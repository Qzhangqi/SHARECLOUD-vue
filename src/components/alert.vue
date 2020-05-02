<template>
    <div>
        <v-alert type="success"
                 border="top"
                 :value="success_alert"
                 elevation="6"
                 transition="scroll-y-transition"
                 style="width: 15%; margin: 0 auto;">
            {{alert_message}}
        </v-alert>

        <v-alert type="error"
                 border="top"
                 :value="failed_alert"
                 elevation="6"
                 transition="scroll-y-transition"
                 style="width: 15%; margin: 0 auto;">
            {{alert_message}}
        </v-alert>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "alert",
        computed: {
            ...mapState([
                "Event"
            ])
        },
        methods : {
            close_alert() {
                this.success_alert = false;
                this.failed_alert = false;
            }
        },
        mounted() {
            this.Event.$on('fail_alert', (data) => {
                this.close_alert();
                this.alert_message = data.message;
                this.failed_alert = true;
                setTimeout(this.close_alert, data.timeout);
            });

            this.Event.$on('success_alert', (data) => {
                this.close_alert();
                this.alert_message = data.message;
                this.success_alert = true;
                setTimeout(this.close_alert, data.timeout);
            });
        },
        data() {
            return {
                success_alert : false,
                failed_alert : false,
                alert_message : String
            }
        },

    }
</script>

<style scoped>

</style>