<template>
    <div>
        <table>
            <tr>
                <td colspan="2" id="phone_in">
                    <v-text-field label="Phone Number" v-model="phone_number"></v-text-field>
                </td>
            </tr>
            <tr>
                <td id="auth_code">
                    <v-text-field label="Auth Code" v-model="auth_code"></v-text-field>
                </td>
                <td>
                    <div>
                        <v-btn text
                               color="primary"
                               @click="send_auth_code"
                               :disabled="auth_btn_disabled">{{auth_btn}}
                        </v-btn>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" id="btn_in">
                    <div>
                        <v-btn outlined
                               color="primary"
                               @click="register">register</v-btn>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {AUTH_CODE_URL, REGISTER_URL} from "@/plugins/url.js"
    import {mapState} from "vuex";

    export default {
        name: "signup",
        computed: {
            ...mapState([
                "Event"
            ])
        },
        methods: {
            send_auth_code() {
                if (!this.check_phone_number(this.phone_number)) {
                    this.Event.$emit("fail_alert", {
                        message: "手机号格式错误",
                        timeout: 5000
                    });
                    return;
                }

                this.nIntervId = setInterval(this.btn_refresh, 1000);
                this.auth_btn_disabled = true;

                this.axios.get(AUTH_CODE_URL, {
                    params: {
                        'phoneNumber': this.phone_number
                    }
                }).then((response) => {
                    console.log(response);
                    this.Event.$emit("success_alert", {
                        message: "获取成功",
                        timeout: 2000
                    });
                }).catch((error) => {
                    console.log(error);
                    this.Event.$emit("fail_alert", {
                        message: "获取失败",
                        timeout: 5000
                    });
                });
            },

            check_phone_number(str) {
                let reg = /^[0-9]+.?[0-9]*$/;
                return reg.test(str) && (str.length == 11);
            },

            btn_refresh() {
                this.count_down -= 1;
                this.auth_btn = this.count_down + "秒后重试";
                if (this.count_down == 0) {
                    clearInterval(this.nIntervId);
                    this.auth_btn = "发送验证码";
                    this.count_down = 60;
                    this.auth_btn_disabled = false;
                }
            },

            register() {
                this.axios.post(REGISTER_URL, {
                    'username': this.phone_number,
                    'authcode': this.auth_code
                }).then((response) => {
                    console.log(response);
                    console.log(this.auth_code);
                    this.Event.$emit("success_alert", {
                        message: "注册成功",
                        timeout: 3000
                    });
                }).catch((error) => {
                    console.log(error);
                    this.Event.$emit("fail_alert", {
                        message: "注册失败",
                        timeout: 5000
                    });
                });
            }
        },
        data() {
            return {
                phone_number: "",
                auth_code: "",
                auth_btn: "发送验证码",
                count_down: 60,
                nIntervId: null,
                auth_btn_disabled: false
            }
        }
    }
</script>

<style scoped>
    #phone_in {
        padding-bottom: 30px;
    }

    #btn_in {
        padding-top: 70px;
        text-align: center;
    }
</style>