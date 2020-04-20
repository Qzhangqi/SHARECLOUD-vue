<template>
    <div class="account_div">
        <v-chip
                class="ma-2"
                color="primary"
                outlined
                pill
                style="padding-top: 1px"
        >
            余额：100/GB/月
        </v-chip>

        <v-btn
               rounded
               style=
                       "height: 27px;
                        width: 20px;
                        margin-left: 5px;
                        margin-bottom: 2px;"
               color="primary">充值</v-btn>
    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>

<style scoped>
    .account_div {
        float: right;
        margin-top: 35px;
        margin-right: 20px;
    }
</style>