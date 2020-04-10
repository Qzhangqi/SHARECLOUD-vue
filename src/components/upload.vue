<template>
    <div id="upload_area">
        <div id = "upload_border">
        </div>
    </div>
</template>

<script>
    export default {
        name: "upload"
    }
</script>

<style scoped>
    #upload_area {
        height: 470px;
        width: 370px;
        margin-right: 17px;
        margin-left: 5px;
        overflow: hidden;
    }

    #upload_border {
        border-style: dashed;
        border-width: 3px;
        border-color: darkgray;
        margin-top: 20px;
        width: 100%;
        height: 440px;
        border-radius: 20px;
    }

    #upload_info {
    }

    #upload_text1 {
        margin-top: 10px;
        font-size: 20px;
        font-family: "Microsoft YaHei UI";
        font-weight: bolder;
    }
</style>