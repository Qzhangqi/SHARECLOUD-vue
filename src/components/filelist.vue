<template>
    <div id="file_area">
        <table>
            <!--eslint-disable-next-line-->
            <tr v-for="file in file_list">
                <single-file :file = "file"></single-file>
            </tr>
        </table>
    </div>
</template>

<script>
    import single_file from "@/components/single_file";
    import { mapState } from 'vuex'

    export default {
        name: "file",
        components: {
            'single-file': single_file
        },
        computed: {
            ...mapState([
                "file_list"
            ])
        },
        data() {
            return {
            }
        }
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