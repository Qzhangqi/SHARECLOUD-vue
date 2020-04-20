<template>
    <div id="upload_area">
        <div class="upload_border">
            <v-btn class="upload_btn" outlined color="primary" @click="uploadFile">上传文件</v-btn>
        </div>
    </div>
</template>

<script>
    import uploader from "../plugins/uploader";

    export default {
        name: "upload",
        methods: {
            uploadFile() {
                //定义一个配置项
                let opt = {};
                opt.action = "/uploadFile"; //必填，上传接口地址
                opt.maxsize = 10; //可选，文件大小限制，单位M
                opt.params = {userId: 16}; //可选，其他业务参数

                opt.startCallback = (file) => {
                    console.log("文件开始上传", file); //file是已经开始上传的本地文件对象
                };

                //上传进度的钩子函数
                opt.progressCallback = (object) => {
                    if (object.computable) {
                        console.log(
                            "上传中...",
                            "当前速度：" + object.speed,
                            "已上传 " + Math.round(object.progress * 100) + "%"
                        )
                    }
                };

                //上传成功的钩子函数
                opt.successCallback = (data) => {
                    console.log("上传成功", data); //data是接口返回的数据
                };

                //设置上传配置项
                uploader.setOption(opt);

                //上传
                //* 此方法，一定要在用户行为里去触发（比如用户的click事件）
                //* 如果上传配置项实现了钩子函数，这里就不需要处理then和catch了
                uploader.upload();
            }
        }
    }
</script>

<style scoped>
    #upload_area {
        height: 470px;
        width: 370px;
        margin-right: 5px;
        margin-left: 5px;
        overflow: hidden;
    }

    .upload_border {
        border-style: dashed;
        border-width: 3px;
        border-color: darkgray;
        margin-top: 20px;
        width: 100%;
        height: 440px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .upload_btn {
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