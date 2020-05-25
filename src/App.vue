<template>
  <div>
    <transition name="custom-classes-transition"
                enter-active-class="animated bounceIn"
                leave-active-class="animated hinge">
       <p v-if="backGroundText" class="backGroundView" key="stop">{{sendBackgroundView}}</p>
       <p v-else></p>
    </transition>
    <transition name="opButtonFade" mode="out-in">
      <div v-if="isShowingTitle" class="menuButton" key="next">
        <div class="menuButton" key="next">
            <router-link class="changeButton" to="/">PROFILE</router-link>
            <router-link class="changeButton" to="/Career" >CAREER</router-link>
            <router-link class="changeButton" to="/Portfolio">PORTFOLIO</router-link>
            <router-link class="changeButton" to="/Inform">INFORM</router-link>
        </div>
            <div class="welcomeAnnotation">please typo any word & enter⇩</div>
            <input type="text" maxlength='22' class="welcome" value="Welcome!! Myfriend!!" @keypress.enter="backgroundView">
        <router-view/>
      </div> 
      <div v-else key="start">
         <div @mouseover.prevent="selector" class="clickTitle">
         <h2 class="welcomeFirstTitle">ようこそ！！私のポートフォリオサイトへ！！<br>何かしら優しくアクションをしてください</h2>
      </div>  
      </div>
    </transition>
  </div>
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
