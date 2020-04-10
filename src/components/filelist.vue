<template>
    <div id="file_area">
        <table>
            <!--eslint-disable-next-line-->
            <tr v-for="file in file_list">
                <v-card
                        class="mx-auto"
                        outlined
                        style="width: 320px; margin-top: 5px; margin-bottom: 5px; height: 117px;"
                >
                    <table id="file_table">
                        <tr>
                            <td>
                                <div class="file_info_div">
                                    <p id="file_name">VehicleAndsmaster.zip</p>
                                    <p id="load_time">已被下载 7 次</p>
                                </div>
                            </td>

                            <td>
                                <v-img
                                        src="../img/file_zip.svg"
                                        max-height="40px"
                                        max-width="80px"
                                        contain
                                        style="margin-top: 3px;"
                                ></v-img>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="file_info_div" style="height: 22px;">
                                    <p id="over_time">4月10日过期</p>
                                </div>
                            </td>

                            <td>
                                <div style="text-align:center; height: 22px; margin-right: 3px; padding-top: 3px;">
                                    <p id="file_size">35.5MB</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <div style="margin-top: 5px; margin-bottom: 2px;">
                                    <v-progress-linear
                                            color="#1E90FF"
                                            buffer-value="0"
                                            value="20"
                                            stream
                                    ></v-progress-linear>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div style="float: right; margin-right: 10px;">
                                    <a style="font-size: 14px;">复制链接</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </v-card>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "file",
        data() {
            return {
                file_list:[1,1,1,1,1,1,1,1,1,1]
            };
        },
    }
</script>

<style scoped>
    #file_area {
        height: 470px;
        width: 340px;
        margin-left: 10px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    #file_table {
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100%;
    }

    .file_info_div {
        max-width: 225px;
        margin-top: 2px;
        margin-left: 10px;
    }

    #file_name {
        font-size: 15px;
        width: 210px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
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
    }

    #file_size {
        font-size: 13px;
        /*font-family: "Microsoft YaHei UI";*/
        font-family: "Microsoft YaHei UI Light";
    }

</style>