<template>
<div class="channels">
    <v-sidebar class="mt-0 scroll-y">
        <v-list dense>
            <v-list-item v-for="(channel,i) in channels" :key="i" v-on:click="changeChannel(channel)">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="'#'+channel.name" />
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-item>
        </v-list>
    </v-sidebar>
    <messages v-bind:channel="channel"></messages>
</div>

</template>
<style>
.channels {
    display: flex;
    flex-direction: row;
}
</style>
<script>
import Messages from './Messages.vue'
export default {
    components: {
        Messages
    },
    methods: {
        changeChannel(channel) {
            this.channel = channel
        }
    },
    data() {
        return {
            channels: [],
            sidebar: null,
            channel: null
        }
    },
    beforeCreate() {
        var self = this;
        this.$http.get('/api/channels').then(function(res) {
            console.log(res);
            this.channels = res.body
        }, function(err) {
            console.log(err);
        })
    }
}
</script>
