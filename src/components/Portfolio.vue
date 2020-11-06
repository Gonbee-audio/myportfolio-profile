<template>
<div>
  <v-container>
    <v-sheet>
      <v-card-text><h2>Portfolio</h2></v-card-text>
    </v-sheet>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="photo in portFolioPhotos"
      :key="photo"
    >
    <a :href="photo.url" >
      <v-img
        :src="photo.image"
        height="100%"
        tile
      >
      
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          </v-row>
        </v-img>
      </a>
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