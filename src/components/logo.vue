<template>
    <div id="logo_div">
        <h1 id="logo">
            S H A R E C L O U D
        </h1>
        <p id="logo_info">
            将文件变为可供分享的链接
        </p>
    </div>
</template>

<script>
    export default {
        name: "logo"
    }
</script>

<style scoped>
    #logo_div {
        height: 90px;
        padding-left: 20px;
        float: left;
    }

    #logo{
        font-family: "Microsoft YaHei UI Light";
        font-size: 40px;
    }

    #logo_info {
        font-family: "Microsoft YaHei UI Light";
        color: darkgray;
        font-size: 13px;
    }
</style>