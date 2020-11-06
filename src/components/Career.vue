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

  <v-container>
    <v-card>
        <v-card-title>ポートフォリオの履歴</v-card-title>
        <v-card-text style="text-align:left;">2019年12月 ポートフォリオ完成</v-card-text>
        <v-card-text style="text-align:left;">2020年5月 ポートフォリオspa化</v-card-text>
        <v-card-text style="text-align:left;">2020年11月 ポートフォリオと呼ぶには杜撰(ずさん)いうことでvuetifyを使ってテコ入れ</v-card-text>
    </v-card>
  </v-container>

  <v-card class="afterCareer" style="margin-bottom:10%;">
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }" >
        <v-card>
        <v-btn
          class="black--text"
          color="indigo lighten-5"
          dark
          v-bind="attrs"
          v-on="on"
        >
         <v-card-title>このポートフォリオの開発に使ったスキル</v-card-title>
        </v-btn>
        </v-card>
      </template>
      

      <v-card>
        <v-card-title class="headline grey lighten-2">
          このポートフォリオの開発に使ったスキル
        </v-card-title>

        <v-card-text>
            <v-card-subtitle>
              html
            </v-card-subtitle>
            <v-card-text>
              最初の骨組みはhtmlを使ってましたが、ほとんどはvueのカスタムタグで書いてます。
            </v-card-text><br>
            <v-card-subtitle>
              css
            </v-card-subtitle>
            <v-card-text>
              アニメーションをつけるのに主に使っています。<br>
              基本のデザインはvueを使ってます。
            </v-card-text><br>
            <v-card-subtitle>javascript(vue.js)</v-card-subtitle>
            <v-card-text>
              素のjavascriptは使わずにほとんどvueを使っています
            </v-card-text><br>
            <v-card-subtitle>aws ec2</v-card-subtitle>
            <v-card-text>
              ポートフォリオをに公開するためにawsを勉強しました。
            </v-card-text><br>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  </div>
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
        dialog: false,
        isShowing: true,
        isShowingModal: false,
        selectedText: [],
        useSkillImage:"my_icon.jpg",
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