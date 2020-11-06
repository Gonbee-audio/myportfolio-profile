<template>
  <v-container>
        <transition-group>
          <div
            v-for="element in proflie"  
            :key="element.sentence"
            elevation="2"
            class="mx-auto"
            style="margin: 10%;"
            max-width="344"
            >
            <v-card 
            v-if=" element.id == `1`"
            style="left: 15%;"
            class="mx-auto"
            max-width="344"
            > 
                <v-img
                :src=" element.image "
                height="200px"
                ></v-img>
                <v-card-title>{{element.sentence}}</v-card-title><br>
                <v-card-text>{{element.detail}}</v-card-text>
            </v-card>
            <v-card v-else
            style="right: 15%;"
            class="mx-auto"
            max-width="344"
            >
                <v-img
                :src=" element.image "
                height="200px"
                ></v-img>
                <v-card-title>{{element.sentence}}</v-card-title><br>
                <v-card-text>{{element.detail}}</v-card-text>
            </v-card>  
          </div>
        </transition-group>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      proflie: [
             {
                 id: 1,
                 image:'images/my_icon.jpg',
                 sentence:'名前:高橋侑平',
                 detail:'この写真は私の好きなゲームの写真です。よくわからないけど可愛いからアイコンにしています。',
             },
             {
                 id:2,
                 image:'images/my_icon2.jpg',
                 sentence:'生年月日:1993/12/30',
                 detail:'山羊座です。',
             },
             {
                 id:1,
                 image:'images/my_icon3.jpg',
                 sentence:'趣味:楽器、ゲーム、プログラミング',
                 detail:'ゲームは昔からしていて、楽器は中学の時からギターをやっています。',
             },
             {
                 id:2,
                 image:'images/my_icon4.jpg',
                 sentence:'好きなアーティスト',
                 detail:'chet atkins、BOSTON、古い洋楽がまあまあ好きです。',
             },
             {
                 id:1,
                 image:'images/my_icon5.jpg',
                 sentence:'将来の夢:世界を回りたいです',
                 detail:'目で見た物が自分自身の考えを作るので、もっと色々経験したいです。',
             },
             {
                 id:2,
                 image:'images/my_icon6.jpg',
                 sentence:'使える言語or学習する予定の言語',
                 detail:'HTML,CSS,JavaScript(vue.js),python(django)',
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
