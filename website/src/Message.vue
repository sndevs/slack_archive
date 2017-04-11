<template>
<v-list-item class="message">
        <v-list-tile-title>
            <div class="messageinfo">
            <div>
                <a href="chillin">{{message.user.name}}</a>
            </div>
            <div>
            </div>
            <div>

                {{message.time}} - {{message.date}}
            </div>
        </div>
        </v-list-tile-title>
    <div class="messagebody">

        <v-list-tile-content>
            {{message.text}}

        </v-list-tile-content>
    </div>
</v-list-item>
</template>
<style>
.message {
    /*background-color: red;*/
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.messageinfo {
    /*background-color: blue;*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /*justify-content: flex-start;*/
    align-items: flex-start;
}
</style>

<script>
export default {
    name: 'Message',
    props: ['message'],
    data() {
        return {}
    }
}
</script>
