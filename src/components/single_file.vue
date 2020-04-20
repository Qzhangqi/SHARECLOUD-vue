<template>
    <v-card
            :class="[uploading ? 'card_uploading' : 'card_uploaded']"
            outlined
    >
        <table id="file_table">
            <tr>
                <td>
                    <div class="file_info_div">
                        <span id="file_name">VehicleAndsmaster.zip</span>
                        <v-chip
                                color="primary"
                                outlined
                                pill
                                style="
                                height: 15px;
                                font-size: x-small;
                                padding-left: 5px;
                                padding-right: 5px;
                                margin-left: 10px;
                                padding-top: 1px;"
                        >
                            33.5MB
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
                            style="margin-top: 3px;"
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
                        <a @click="run" class="bottom_item">{{bottom_item_str}}</a>
                    </div>
                </td>
            </tr>
        </table>
    </v-card>
</template>

<script>
    export default {
        name: "single_file",
        data() {
            return {
                progress_value:0,
                uploading:true,
                bottom_item_str:"取消"
            }
        },
        methods:{
            run() {
                this.progress_value += 10
            }
        },
        watch:{
            progress_value:function () {
                if (this.progress_value == 100) {
                    this.uploading = false;
                    this.bottom_item_str = "复制分享链接"
                }
            }
        }
    }
</script>

<style scoped>
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
        padding-top: 10px;
        padding-bottom: 5px;
        width: 100%;
    }

    .file_info_div {
        max-width: 225px;
        margin-top: 2px;
        margin-left: 17px;
    }

    #file_name {
        font-size: 16px;
        width: 210px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
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

    .bottom_item{
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