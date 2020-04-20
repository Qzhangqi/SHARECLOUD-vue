<template>
    <div id="file_area">
        <table>
            <!--eslint-disable-next-line-->
            <tr v-for="file in file_list">
                <single-file></single-file>
            </tr>
        </table>
    </div>
</template>

<script>
    import single_file from "@/components/single_file";

    export default {
        name: "file",
        components:{
            'single-file':single_file
        },
        data() {
            return {
                file_list:[1,1]
            }
        },

    };
</script>

<style scoped>
    #file_area {
        height: 470px;
        width: 330px;
        margin-left: 22px;
        overflow-x: hidden;
    }
</style>