<template>
    <div>
        <table>
            <tr>
                <td colspan="2" id="phone_in">
                    <v-text-field label="Phone Number"></v-text-field>
                </td>
            </tr>
            <tr>
                <td id="auth_code">
                    <v-text-field label="Auth Code"> </v-text-field>
                </td>
                <td>
                    <div>
                        <v-btn text color="primary">发送验证码</v-btn>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" id="btn_in">
                    <div>
                        <v-btn outlined color="primary">register</v-btn>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "signup"
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