<template>
    <div>
        <table style="width: 100%">
            <tr>
                <td id="phone_up">
                    <v-text-field label="Phone Number"
                                  v-model="phone_number"></v-text-field>
                </td>
            </tr>
            <tr>
                <td id="btn_up">
                    <div>
                        <v-btn outlined
                               color="primary"
                               @click="log_in">log in</v-btn>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {LOGIN_URL} from "@/plugins/url";
    import {mapState} from "vuex";

    export default {
        name: "signin",
        computed: {
            ...mapState([
                "Event"
            ])
        },
        methods: {
            log_in() {
                if (!this.check_phone_number(this.phone_number)) {
                    this.Event.$emit("fail_alert", {
                        message: "手机号格式错误",
                        timeout: 5000
                    });
                    return;
                }

                this.axios.post(LOGIN_URL, {
                    'username': this.phone_number
                }).then((response) => {
                    if (response.data.code == "0000") {
                        this.Event.$emit("success_alert", {
                            message: "登录成功",
                            timeout: 2000
                        });
                    } else {
                        this.Event.$emit("fail_alert", {
                            message: response.data.msg,
                            timeout: 5000
                        });
                    }

                }).catch((error) => {
                    console.log(error);
                    this.Event.$emit("fail_alert", {
                        message: "登录失败",
                        timeout: 5000
                    });
                });
            },

            check_phone_number(str) {
                let reg = /^[0-9]+.?[0-9]*$/;
                return reg.test(str) && (str.length == 11);
            },
        },
        data() {
            return {
                phone_number: ""
            }
        }
    }
</script>

<style scoped>
    #phone_up {
        padding-top: 50px;
        padding-bottom: 30px;
    }

    #btn_up {
        padding-top: 90px;
        text-align: center;
    }
</style>