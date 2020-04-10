<template>
    <div>
        <table style="width: 100%">
            <tr>
                <td id="phone_up">
                    <v-text-field label="Phone Number"></v-text-field>
                </td>
            </tr>
            <tr>
                <td id="btn_up">
                    <div>
                        <v-btn outlined color="primary">log in</v-btn>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "signin"
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