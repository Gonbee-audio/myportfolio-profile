<template>
  <v-app>
    <transition name="custom-classes-transition"
                enter-active-class="animated bounceIn"
                leave-active-class="animated hinge">
       <p v-if="backGroundText" class="backGroundView" key="stop">{{sendBackgroundView}}</p>

       <a v-else></a>

       
    </transition>
    <transition name="opButtonFade" mode="out-in" id="inspire">
      <div v-if="isShowingTitle" class="menuButton" key="next">


<!-- title bar-->
        <v-navigation-drawer
      v-model="drawer"
      app
      color="blue lighten-4"
      style="z-index: 11;"
    >
<!-- menu-->
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-col color="blue darken-4">
              <v-btn
               block
               elevation="2"
               outlined
               raised
               @click="profileRouter"
              >
              PROFILE
              </v-btn>
            </v-col>

            <v-col color="blue darken-4">
              <v-btn
               block
               elevation="2"
               outlined
               raised
               @click="profileCareer"
              >
              CAREER
              </v-btn>
            </v-col>

            <v-col color="blue darken-4">
              <v-btn
               block
               elevation="2"
               outlined
               raised
               @click="profilePortfolio"
              >
              PORTFOLIO
              </v-btn>
            </v-col>

            <v-col color="blue darken-4">
              <v-btn
               block
               elevation="2"
               outlined
               raised
               @click="profileInform"
              >
             INFORM
              </v-btn>
            </v-col>
            
        </v-navigation-drawer>
        <v-app-bar 
        style="position: fixed;
               z-index: 10;"
        class="menuButton" 
        key="next"
        >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
            <div class="welcomeAnnotation">please typo any word & enter⇩</div>
            <input type="text" maxlength='22' class="welcome" value="Welcome!! Myfriend!!" @keypress.enter="backgroundView">
        <router-view/>
              <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="red lighten-5 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>


  <v-row justify="space-around">
    <a href="https://note.com/gonbee123audio">
    <v-icon
      large
      color="purple darken-2"
    >
      mdi-facebook
    </v-icon>
    </a>

    <a href="https://twitter.com/Gonbee_audio">
    <v-icon
      large
      color="teal darken-2"
    >
      mdi-twitter
    </v-icon>
    </a>

    <a href="https://github.com/Gonbee-audio/myportfolio-profile">
    <v-icon
      large
      color="blue-grey darken-2"
    >
      mdi-github
    </v-icon>
    </a>

    <a href="https://qiita.com/gonbee1230">
    <v-icon
      large
      color="orange darken-2"
    >
      mdi-card-text
    </v-icon>
    </a>
  </v-row>
      <v-card-text class="black--text pt-0">
        facebookはやっていないので代わりにnoteのマイアカウントのページ、qiitaのアイコンがないので一番右のアイコンはqiitaのurlになっています。その中にtwitterはつながります。githubはこのサイトのgithubのページに飛ぶように設定しています。
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

      </div> 
      <div v-else key="start">
         <div @mouseover.prevent="selector" class="clickTitle">
        <v-container>
         <v-card>
           <h2 class="welcomeFirstTitle">ようこそ！！私のポートフォリオサイトへ！！<br>何かしら優しくアクションをしてください</h2>
         </v-card>
        </v-container>
      </div>  
      </div>
    </transition>
    
  </v-app>
</template>

<script>
export default {
   computed: {
    sendBackgroundView: function(){
    return this.$store.state.backgroundView
    }
  },
  data(){
    return{
    name: '#app',
    drawer: false,
    isShowingTitle: false,
    isShowing: false,
    landscape: "",
    backGroundText: false,
    }
  },
  methods:{
    selector(){
        this.isShowingProfileText = true;
        this.isShowingTitle = true;
    },
    backgroundView(event){

      this.backGroundText = !this.backGroundText
      this.$store.dispatch("setLandscape", event.target.value);
    },
    profileRouter(){
      this.$router.push('/')
    },
    profileCareer(){
      this.$router.push('/Career')
    },
    profilePortfolio(){
      this.$router.push('/Portfolio')
    },
    profileInform(){
      this.$router.push('/Inform')
    },
  }
}
</script>

<style>
.menuButton{
    position: relative;
    text-align:center;
}
.changeButton{
    padding: 0.9% 8%;
    border: 1px solid #000000;
    background-color:#ffffff;
}
.opButtonFade-enter {
    transform: rotateY(90deg);
    opacity: 0.8;
}
.opButtonFade-leave-to {
	opacity: 0;
}
.opButtonFade-leave {
	opacity: 1;
}
.opButtonFade-enter-to{
    opacity: 1;
}
.opButtonFade-enter-active,
.opButtonFade-leave-active {
	transition: opacity 1s;
  transition: transform 1s ease;
}
.clickTitle{
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
}
.welcome{
    font-size: 500%;
    position: relative;
    margin-top: 10%;
    text-align: center;
}
.welcomeAnnotation{
  position: absolute;
  text-align: center;
  margin-top: 5%;
  margin-left: 42.5%;
}
.backGroundView{
    position: absolute;
    font-size: 500%;
    left: 20%;
    bottom: 50%;
    margin: auto;
}
.welcomeFirstTitle{
    font-size: 200%;
    position: relative;
    text-align: center;
    margin-top: 15%;
}

</style>
