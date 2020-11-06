import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
 state:{
     textContent: '',
     backgroundView: ''
 },
 mutations:{
    setContent(state, strContent){
        state.textContent = strContent;
    },
    setLandscape(state, strLandscape){
        state.backgroundView = strLandscape;
        
    }
 },
actions:{
    setContent(context, strContent){
        context.commit('setContent',strContent );
        },
    setLandscape(context, strLandscape){
        context.commit('setLandscape',strLandscape );
        }
    },
});