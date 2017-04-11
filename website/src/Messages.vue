<template>
<div class="messages" v-if="channel" grow>

    <h6>#{{channel.name}}</h6>
    <h6>Total Messages: {{ rowCount }}</h6>
    <div>Current Page: {{currentPage}}</div>
        <v-pagination v-bind:length.number="pageCount" v-model="currentPage" circle />
        <!-- <b-pagination size="lg" :total-rows="rowCount" variant="primary" secondary-variant="info" v-model="currentPage" :per-page="50">
    </b-pagination> -->
    <v-list>
        <message v-for="message in messages" v-bind:message="message"></message>
    </v-list>

        <v-pagination v-bind:length.number="pageCount" v-model="currentPage" circle />
    <br>
</div>
</template>
<style>
.messages {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<script>
import Message from './Message.vue'
export default {
    components: {
        Message
    },
    name: 'Messages',
    props: ['channel'],
    data() {
        return {
            currentPage: 1,
            messages: [],
            rowCount: null,
            queryParams: {},
            pageCount: null
        }
    },
    methods: {
        getChannelRowCount() {
            this.$http.get('api/channels/' + this.channel._id + '/rowcount').then((res) => {
                this.rowCount = parseInt(res.body)
                this.pageCount = Math.ceil(this.rowCount / 50)
            })
        },
        messageQuery() {
            this.$http.get('api/channels/' + this.channel._id + '/messages', {
                params: {
                    page: this.currentPage
                }
            }).then((res) => {
                console.log(res);
                var messages = res.body;
                messages.forEach(message => {
                    var tt = new Date(message.created).toISOString()
                    var timesplit = tt.split('T')
                    var date = timesplit[0]
                    var msgtime = timesplit[1].split('.')[0]
                    message.text = message.text;
                    message.time = msgtime;
                    message.date = date;
                    this.messages.push(message)
                })
            })
        }
    },
    watch: {
        currentPage(val, oldVal) {
            console.log(this.currentPage);
            this.messages.length = 0
            if (this.channel)
                this.messageQuery()

        },
        channel(val, oldVal) {
            this.messages.length = 0
            this.currentPage = 1
            this.getChannelRowCount();
            if (this.channel)
                this.messageQuery();
        }
    }
}
</script>
