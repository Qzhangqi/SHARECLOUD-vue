<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <table>
            <tr>
              <logo></logo>
            </tr>
            <tr>
              <v-card id="all_card" raised>
                <table>
                  <tr>
                    <td>
                      <login></login>
                    </td>
                    <td>
                      <upload></upload>
                    </td>
                    <td>
                      <file></file>
                    </td>
                  </tr>
                </table>
              </v-card>
            </tr>
          </table>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import upload from "@/components/upload";
import login from "@/components/login";
import file from "@/components/filelist";
import logo from "@/components/logo";

export default {
  name: 'App',

  components: {
    'upload':upload,
    'login':login,
    'file':file,
    'logo':logo
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  #all_card {
    padding-top: 10px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 20px;
    border-radius: 20px;
  }
  div::-webkit-scrollbar-track {
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    background-color:#F5F5F5;
  }
  div::-webkit-scrollbar {
    width:5px;
    background-color:#F5F5F5;
  }
  div::-webkit-scrollbar-thumb {
    background-color:#1E90FF;
    border:2px solid #1E90FF;
  }
</style>