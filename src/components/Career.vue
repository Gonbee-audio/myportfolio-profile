<template>
<div>       
  <transition-group name="modalCareerAppear">
            <div 
            class="textFrameAction && careerModalButton" 
            v-for="(text, index) of modalCareer" 
            :key="text.id" 
            @click="modalCalling(index)">{{text.title}}
            </div>
  </transition-group> 

  <v-card class="afterCareer">
    <v-card-title>開発に使ったスキル</v-card-title><br>
    <v-card-text>html</v-card-text><br>
    <v-card-text>css</v-card-text><br>
    <v-card-text>javascript(vue.js)</v-card-text><br>
    <v-card-text>aws ec2</v-card-text><br>
  </v-card>
          


              <modal name="career-modal" :text="selectedText">
                <div>
                <CareerModal></CareerModal>
                </div>
              </modal>

              
</div>
</template>



<script>
import CareerModal from './CareerModal.vue';

export default {
  components:{ CareerModal },
  data(){
      return {
        isShowing: true,
        isShowingModal: false,
        selectedText: [],
        modalCareer:[ 
        { 
          id:1,
          title:'これまでの経歴',
          content:'私は小さい頃から学者を目指して、2012年に高校を卒業。理学系の学科のある大学に行こうと思って勉強してはいたのですが、全く結果に現れず。本番だったり、模擬の試験を受けたら手の震え、頭が真っ白になり全く頭が働かず、試験後試験中の記憶に霧がかかったようになり、７年時間をかけましたが、全然試験結果に反映されませんでした。７年間勉強しましたが、将来を見据えて、辛いですが受験を諦めました。',
    },
        {
          id:2,
          title:'どんな仕事がしたいか',
          content:'自分が学者になりたかった理由は、０から１を作る仕事だからです。クリエイティブな仕事がしたいと思ってます。そして、アルバイトで接客をしたりもしたのですが、黙々と作業のやる仕事の方が自分に向いてると思いました。只、決して人と関わることが嫌いというわけではありません。この業界の自分に向いているというところの一つとして、人との程々の距離があるというところがとても大事だと思います。',
            
    },
        {
          id:3,
          title:'なぜこの仕事を選んだのか',
          content:'正直理学系学者になる仕事以外就くつもりはありませんでした、しかし受験をやめ、アイデンティティーがなくなったわけではなく、７年間勉強に縁がないのかもしれません。しかし、なぜか勉強嫌いにはなりませんでした。そして今、受験勉強という加瀬がなくなり、いろんな本を読み（主にビジネス本）を読みITの仕事に興味を持ち、特に、文字で打ったものが絵になったり、形が変わったり、世界を自分で作るような部分に惹かれてプログラマーを目指しました。。',
        },
        {
          id:4,
          title:'自分の使えるスキル',
          content:'html☆☆ \n css☆ \n javascript☆ \n vue.js☆☆,\n php☆', 
        }
    ]
      };
  },
  methods:{
      modalCalling(index) {
        this.isShowingModal = true;
        const idSelectoer = (this.modalCareer.id = this.modalCareer[index]);
        this.selectedText = idSelectoer.content;
        this.$store.dispatch("setContent", this.selectedText);
        this.$modal.show('career-modal');
    },
  }
  }
</script>

<style scoped>
.modal{
    font-size: 2000%;
}
.textFrameAction{
    display: inline-block;
    border: 1px solid;
    border-radius: 30%;
    width: 20%;
    height: 20%;
    margin-bottom:10%;
    margin-left:2%;
    margin-right:2%;
    padding-bottom:10%;
    background-color: #ffffff;
}
.careerModalButton{
    position: relative;
    text-align:center;
    margin-top: 5%; 
   -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all  0.3s ease;
    }
.careerModalButton:hover {
    background-color: #ffc9d7;
    font-size: 120%;
    }
.modalCareerAppear-enter-active{
  transition: all 1.0s ease 0s;
 }
 .modalCareerAppear-enter{
  opacity: 0;
  transform: translateY(-180px);
 }
.afterCareer{
    position: relative;
    border: 1px solid;
    display: inline-block;
    text-align: center;
}
li {
  margin-bottom: 0.5em;
}
</style>