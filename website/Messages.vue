<template>
<div class="messages" v-if="channel">
    <h5>hello world</h5>
    <!--
  <h6>#{{channel.name}}</h6>
  <h6>Total Messages: {{ rowCount }}</h6>
  <div>CurrentPage: {{currentPage}}</div>
  <div>
    <b-pagination size="lg" :total-rows="rowCount" variant="primary" secondary-variant="info" v-model="currentPage" :per-page="50">
    </b-pagination>
  </div>
  <br> -->
</div>
<!-- <message v-for="message in messages" v-bind:message="message"></message> -->
</template>
<style>
.messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color:red
}
</style>

<script>
export default {
  name: 'Messages',
  props: ['channel'],
  data() {
    return {
      currentPage: 1,
      messages: [],
      rowCount: null,
      queryParams: {}
    }
  },
  methods: {
    getChannelRowCount() {
      this.$http.get('api/channels/' + this.channel._id + '/rowcount').then((res) => {
        this.rowCount = parseInt(res.body)
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
            message.text = '<a href="chillin">lalala</a>'+message.text
          this.messages.push(message)
        })
      })
    }
  },
  watch: {
    currentPage(val, oldVal) {
      this.messages.length = 0
      if(this.channel)
      this.messageQuery()

    },
    channel(val, oldVal) {
      this.messages.length = 0
      this.currentPage = 1
      this.getChannelRowCount();
      if(this.channel)
      this.messageQuery();
    }
  }
}
</script>
