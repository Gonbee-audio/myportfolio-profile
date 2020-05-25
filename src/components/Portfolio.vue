<template>
<div>
    <div v-for="photo of portFolioPhotos" :key="photo.title" class="portfolioHistoryFrame">
        <img :src="photo.image" width="100%" height="100%">
    </div>
</div>

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
		image: 'images/photo_01.jpg',
		image_thumb: 'images/photo_01_thumb.jpg',
	},
	{
		title: '写真タイトル02',
		image: 'images/photo_02.jpg',
		image_thumb: 'images/photo_02_thumb.jpg',
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
    width: 10%;
    height: 30%;
    padding: 10%;
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