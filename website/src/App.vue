<template>
<v-app id="example-2" left-fixed-sidebar sidebar-under-toolbar left-fixed-sidebar>

    <v-tabs id="mobile-tabs-1" grow v-bind:model="active">
        <v-tab-item v-for="rt in rts" v-bind:href="rt.href" v-bind:id="'tab'+rt.index" ripple slot="activators" router>
            {{ rt.name}}
        </v-tab-item>
    </v-tabs>
        <router-view></router-view>
    <!-- <v-tab-content  v-for="rt in rts" v-bind:href="rt.href" v-bind:id="'tab'+rt.index">
    </v-tab-content> -->

    <main>
        <v-content>
        </v-content>
    </main>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            rts: [{
                name: 'Channels',
                href: 'channels',
                index: 1
            }, {
                name: 'Users',
                href: 'users',
                index: 2
            }, {
                name: 'Statistics',
                href: 'statistics',
                index: 3
            }, {
                name: 'Charts',
                href: 'charts',
                index: 4
            }],
            active: '',
            channels: []
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

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>
