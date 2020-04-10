<template>
    <div id="login_area">
        <div style="width: 100%">
            <v-tabs grow background-color="white">
                <v-tab key>
                    register
                </v-tab>
                <v-tab>
                    log in
                </v-tab>

                <v-tab-item>
                    <div class="signin">
                        <signup></signup>
                    </div>
                </v-tab-item>

                <v-tab-item>
                    <div class="signin">
                        <signin></signin>
                    </div>
                </v-tab-item>
            </v-tabs>
        </div>
    </div>
</template>

<script>
    import signin from "@/components/signin";
    import signup from "@/components/signup";

    export default {
        name: "login",
        components: {
            'signin': signin,
            'signup': signup
        },
    }
</script>

<style scoped>
    #login_area {
        height: 470px;
        width: 320px;
        margin-right: 10px;
    }

    .signin {
        margin-top: 70px;
        margin-left: auto;
        margin-right: 36px;
        width: 80%;
    }
</style>