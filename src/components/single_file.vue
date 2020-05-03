<template>
    <v-card
            :class="[uploading ? 'card_uploading' : 'card_uploaded']"
            outlined
            transition="scale-transition"
    >
        <table id="file_table">
            <tr>
                <td>
                    <div class="file_info_div">
                        <div class="file_name_div">
                            <span class="file_name">{{file_name}}</span>
                        </div>
                        <v-chip
                                color="primary"
                                outlined
                                pill
                                class="file_size_info"
                                style="
                                height: 15px;
                                font-size: x-small;
                                padding-left: 5px;
                                padding-right: 5px;
                                margin-left: 10px;
                                padding-top: 1px;"
                        >
                            {{file_size}}
                        </v-chip>
                        <p id="over_time">过期时间 4月10日</p>
                    </div>
                </td>

                <td>
                    <v-img
                            src="../img/file_zip.svg"
                            max-height="35px"
                            max-width="50px"
                            contain
                            style="margin-top: 3px; float: right; margin-right: 8px;"
                    ></v-img>
                </td>
            </tr>

            <tr v-if="uploading">
                <td colspan="2">
                    <div class="progress_activate">
                        <v-progress-linear
                                color="#1E90FF"
                                buffer-value="0"
                                :value="progress_value"
                                stream
                                height="2px"
                                :active="uploading"
                        ></v-progress-linear>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div style="float: left; margin-left: 16px; margin-top: 4px">
                        <a class="bottom_item"
                           @click="upload_pause">{{bottom_item_str}}</a>
                    </div>
                </td>
            </tr>
        </table>
    </v-card>
</template>

<script>
    import * as qiniu from "qiniu-js";
    import {TOKEN_URL, UPLOAD_URL} from "@/plugins/url.js"
    import {mapState} from "vuex";

    const putExtra = {
        fname: "",
        params: {},
        mimeType: null
    };

    const config = {
        useCdnDomain: true,
        region: qiniu.region.z1
    };

    export default {
        name: "single_file",
        props: {
            file: Object,
        },
        computed: {
            ...mapState([
                "Event"
            ]),
            file_name() {
                return this.file.name;
            },
            file_type() {
                let name = this.file.name;
                return name.substring(name.search("\\.") + 1, name.length);
            },
            file_size() {
                if (this.file.size < 1024) {
                    return this.file.size + "B";
                } else if (this.file.size < (1024 * 1024)) {
                    return Math.round(this.file.size / 1024) + "KB";
                } else if (this.file.size < (1024 * 1024 * 1024)) {
                    return Math.round(this.file.size / (1024 * 1024)) + "MB";
                } else {
                    return Math.round(this.file.size / (1024 * 1024 * 1024)) + "GB";
                }
            },
            subObject() {
                const next = (res) => {
                    console.log("上传中");
                    this.progress_value = res.total.percent;
                };

                const error = (error) => {
                    console.log(error);
                    this.Event.$emit("fail_alert", {
                        message: "上传失败",
                        timeout: 3000
                    });
                };

                const complete = (res) => {
                    console.log(res);
                    this.Event.$emit("success_alert", {
                        message: "上传完成",
                        timeout: 2000
                    });
                };

                return {
                    next: next,
                    error: error,
                    complete: complete
                }
            }
        },
        methods: {
            file_name_roll() {
                if (this.wait_value <= 100) {
                    this.wait_value += 1;
                } else {
                    this.filename_right += 0.1;
                    if (this.filename_right >= this.max_right) {
                        this.filename_right = 0;
                        this.wait_value = 0;
                    }
                    this.$el.style.setProperty("--filename--right", this.filename_right + "px");
                }
            },

            file_upload() {
                let file = this.file.file;

                this.axios.get(TOKEN_URL).then((response) => {
                    let token = response.data.uptoken;

                    this.axios.post(UPLOAD_URL, {
                        "fileName": this.file_name,
                        "fileSize": this.file.size,
                        "fileType": this.file_type
                    }).then((response) => {
                        let key = response.data;
                        this.observable = qiniu.upload(file, key, token, putExtra, config);
                        this.subscription = this.observable.subscribe(this.subObject);
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    });

                }).catch((error) => {
                    console.log(error);
                });
            },

            upload_pause() {
                if (this.pause == false) {
                    this.subscription.unsubscribe();
                    this.pause = true;
                    this.bottom_item_str = "继续";
                } else {
                    this.subscription = this.observable.subscribe(this.subObject); //上传文件
                    this.pause = false;
                    this.bottom_item_str = "暂停";
                }
            },

            get_share_url() {
                return "http://q9jitegt4.bkt.clouddn.com/" + "";
            }
        },
        watch: {
            progress_value() {
                if (this.progress_value >= 100) {
                    this.uploading = false;
                    this.bottom_item_str = "复制分享链接";
                }
            }
        },
        data() {
            return {
                uploading: true,
                pause: false,
                bottom_item_str: "暂停",
                filename_right: 0,
                max_right: 0,
                wait_value: 0,
                subscription: null,
                observable: null,
                progress_value: 0,
                file_hash: null
            }
        },
        mounted() {
            this.max_right = (this.file_name.length - 17) * 6;
            if (this.max_right > 0) {
                setInterval(this.file_name_roll, 20);
            }
            if (this.file.file != null) {
                this.file_upload();
            } else {
                this.file_hash = this.file.hash;
                this.uploading = false;
                this.progress_value = 100;
            }
        }
    }
</script>

<style scoped>
    :root {
        --filename--right: 0px;
    }

    .card_uploading {
        width: 320px;
        margin-top: 5px;
        margin-bottom: 15px;
        height: 107px;
    }

    .card_uploaded {
        width: 320px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 92px;
    }

    #file_table {
        padding-top: 7px;
        padding-bottom: 5px;
        width: 100%;
    }

    .file_info_div {
        max-width: 225px;
        margin-top: 2px;
        margin-left: 17px;
    }

    .file_name_div {
        overflow: hidden;
        max-width: 170px;
        float: left;
    }

    .file_name {
        position: relative;
        font-size: 16px;
        white-space: nowrap;
        margin: 0;
        -webkit-user-select: none;
        right: var(--filename--right);
    }

    .file_size_info {
        -webkit-user-select: none;
    }

    #load_time {
        font-size: 11px;
        color: darkgray;
        margin: 0;
        font-family: "Microsoft YaHei UI Light";
    }

    #over_time {
        font-size: 12px;
        margin: 0;
        font-family: "Microsoft YaHei UI";
        -webkit-user-select: none;
    }

    .bottom_item {
        font-size: 13px;
        -webkit-user-select: none;
    }

    .progress_activate {
        margin-top: 10px;
        margin-bottom: 0;
        margin-right: 15px;
        margin-left: 15px;
    }
</style>