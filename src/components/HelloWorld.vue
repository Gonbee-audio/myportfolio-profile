<template>
  <div>
    <div class="mainText">
      <div class="textFrame">
        <transition-group name="slideProflie" tag="div">
            <div v-for="element in proflie" class="mainTextSentence" :key="element.sentence">
                {{element.sentence}}
            </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      proflie: [
             {
                 sentence:'名前:高橋侑平',
             },
             {
                 sentence:'生年月日:1993/12/30',
             },
             {
                 sentence:'趣味:楽器、ゲーム、プログラミング',
             },
             {
                 sentence:'好きなアーティスト:chet atkins BOSTON',
             },
             {
                 sentence:'将来の夢:世界を回りたいです',
             },
             {
                 sentence:'使える言語or学習する予定の言語 HTML,CSS,JavaScript,vue.js,PHP,Laravel,python,django',
             },
    
    ]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slideProflie-enter,
.slideProflie-leave-to {
			opacity: 0;
}
.slideProflie-enter-to,
.slideProflie-leave {
	opacity: 1;
}
.slideProflie-enter-active,
.slideProflie-leave-active {
	transition: opacity 3s;
}
.mainText{
    width: 80%;
    height: 20%;
    top: 0;
    bottom: 100%;
    left: 0;
    right: 0;
    position: relative;
    background-color: #ffffff;
    margin-top: 10%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 300px;
}
.textFrame{
    border: 1px solid;
}
</style>
