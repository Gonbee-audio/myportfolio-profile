<template>
<v-container>
<h2>Inform</h2>
<div class="above">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <h3>私のツイッター↓</h3>
    <a href="https://twitter.com/Gonbee_audio">
    <i class="fas fa-dove fa-10x " style="color: #339af0;"></i>
    </a>
    <br>
    <div><button @click="emailModal">emailでの連絡はこちらから</button></div>

              <modal name="email-modal">
                <div>
                <EmailModal></EmailModal>
                </div>
              </modal>
</div>
</v-container>


</template>

<script>
import EmailModal from './EmailModal.vue'

export default {
  components:{ EmailModal },
  methods: {
    emailModal() {
      this.$modal.show('email-modal');
    },
  },
}
</script>

<style>
.above{
  position: relative;
  display: inline-block;
  border: 1px solid #000000;
  margin-top: 5%;
  margin-bottom:10%;
  padding: 0% 15%;
}

</style>