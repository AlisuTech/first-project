<template>
  <Header></Header>
  <div class="body-style">
    <SideBar></SideBar>
    <div style="flex:1">
      <!-- <div style="background-color: #202730;color: white; border: solid 1px; border-radius: 10px;padding: 10px;align-self: center;" v-if="isLoading">
        <p>Loading...</p>
      </div> -->
      <Loader v-if="isLoading"></Loader>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Loader from "./components/loader.vue"
export default {
  name: 'App',
  computed:{
    ...mapState({
      isAdminVisible:(state)=>state.isAdminVisible,
      isChatVisible:(state)=>state.isChatVisible,
      isProjectVisible:(state)=>state.isProjectVisible,
      isFileVisible:(state)=>state.isFileVisible,
      isLoading:(state)=>state.isLoading
    })
  },
  data() {
    return {
      isAdminVisibleFromStorage:false
    }
  },
  components: {
    Header,
    SideBar,
    Loader
  },
  methods: {
    showAlert() {

    },
    closeAlert() {

    }
  },
  mounted() {
    // console.log("Page is open")
    // alert("Hello from Joy")

    this.isAdminVisibleFromStorage=localStorage.getItem("isAdminVisible")
  }
}
</script>

<style>
.body-style {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

* {
  margin: 0px;
}

.centralise-style {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
