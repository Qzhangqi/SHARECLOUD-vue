<template>
    <div id="upload_area">
        <div class="upload_border">
            <v-btn class="upload_btn"
                   outlined
                   color="primary"
                   @click="uploadFile2"
                   >上传文件</v-btn>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex';

    export default {
        name: "upload",
        computed: {
            ...mapState([
                "Event"
            ])
        },
        methods: {
            ...mapMutations([
                "set_upload_file",
            ]),

            uploadFile2() {
                let input = document.createElement("input");
                input.type = "file";
                input.click();

                input.onchange = () => {
                    let file = input.files[0];
                    this.set_upload_file(file);
                }
            }
        },
        data() {
            return {
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