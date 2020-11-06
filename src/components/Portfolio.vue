<template>
<div>
  <v-container>
      <h2>Portfolio</h2>
  <v-carousel 
  v-model="model"
  style="margin-bottom:10%;"
  >
    <v-carousel-item
      v-for="photo in portFolioPhotos"
      :key="photo"
    >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      >
      <!-- push fire dialog button-->
      <template v-slot:activator="{ on, attrs }">
      <v-img
        :src="photo.image"
        height="100%"
        tile
        v-bind="attrs"
        v-on="on"
      >
      
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          </v-row>
        </v-img>
      </template>
      <!--end push fire dialog button-->

      <!-- portfolio detail-->
            <v-card>
                <v-card-title class="headline">
                  slack風チャットアプリ
                </v-card-title>
        <v-card-text>
            <v-img
                :src="photo.image"
                height="100%"
                tile
                >
            </v-img>
        </v-card-text>
        <v-card-text>djangoとvueを使ったアプリケーション。レスポンシブ化するにあたって、フロント部分を作ろうとして一からリメイク中。<br>
        現在spa化するために色々模索しています。その中で未経験がまず触らないだろうdjango channelsというリアルタイムチャット機能を実装できるライブラリを使おうと色々頑張っています。</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            戻る
          </v-btn>
          <a :href="photo.url"><v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            進む
          </v-btn></a>
        </v-card-actions>
        </v-card>
        <!--end portfolio detail-->
      </v-dialog>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</div>

<!--
<div style="margin-bottom:10%;">
    <div v-for="photo of portFolioPhotos" :key="photo.title" >
      <a :href="photo.url" ><img :src="photo.image" class="portfolioHistoryFrame" width="100%" height="100%"></a>
    </div>

    <v-card>
    </v-card>
</div>
-->

<!--
  <transition-group name="portFolioList" tag="div">
            <templates v-for="photo of portFolioPhotos" 
                 :key="photo.title" 
                 style="border: 1px solid;
                        display:inline-block;
                        width: 10%;
                        height: 30%;
                        position: relative;
                        margin-top: 2%;
                        margin-left: 7.5%;
                        margin-right: 7.5%;
                        margin-bottom: auto;
                        font-size: 150%;">
            <img :src="photo.image" width="100%" height="100%">  
            </templates>
            
  </transition-group>
  -->
</template>

<script>
export default {
    name: 'Portfolio',
    data(){
        return{
            dialog: false,
            portFolioPhotos:[
        {
		title: '写真タイトル01',
		image: '/images/photo_01.jpg',
        image_thumb: 'images/photo_01_thumb.jpg',
        url: 'http://ec2-54-249-173-228.ap-northeast-1.compute.amazonaws.com/Django/Login/?next=/Django/',
	},
    ]
        }
    }
}
</script>

<style scoped>
.portfolioHistoryFrame{
    border: 1px solid;
    display:inline-block;
    position: relative;
    width: 30%;
    height: 10%;
    margin-top: 2%;
    margin-left: 7.5%;
    margin-right: 7.5%;
    margin-bottom: auto;
    background-color: #ffffff;
}
.portfolioHistoryFrame:hover{
    transform:scale(1.2);
}
.portFolioList-enter{
        opacity: 0;
        transform:scale(0.1);
}
.portFolioList-enter-active{
        transition: all 1s ease;
}
.portFolioList-enter-to{
        opacity: 1;
        transform:scale(1.0);
}
</style>