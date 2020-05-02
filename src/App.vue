<template>
  <v-app>
    <v-content>
      <div style="height: 15%; padding-top: 1.5%">
        <alert></alert>
      </div>

      <v-row justify="center">
        <table>
          <tr>
            <logo></logo>
            <account v-if="have_account"></account>
          </tr>
          <tr>
            <v-card id="all_card" raised>
              <table>
                <tr>
                  <td v-if="have_account">
                    <login></login>
                  </td>
                  <td>
                    <upload></upload>
                  </td>
                  <td v-if="have_file">
                    <file></file>
                  </td>
                </tr>
              </table>
            </v-card>
          </tr>
        </table>
      </v-row>
<!--              <v-btn @click="change_have_account">have_account</v-btn>-->
      <!--        <v-btn @click="change_have_file">have_file</v-btn>-->
    </v-content>
  </v-app>
</template>

<script>

  import upload from "@/components/upload";
  import login from "@/components/login";
  import file from "@/components/filelist";
  import logo from "@/components/logo";
  import account from "@/components/account";
  import alert from "@/components/alert";

  export default {
    name: 'App',

    components: {
      'upload':upload,
      'login':login,
      'file':file,
      'logo':logo,
      'account':account,
      'alert':alert
    },

    data: () => ({
      have_account : true,
      have_file : true,
    }),

    methods : {
      change_have_account() {
        // this.have_account = !this.have_account
        this.upload_success = !this.upload_success
      },
      change_have_file() {
        this.have_file = !this.have_file
      }
    }
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