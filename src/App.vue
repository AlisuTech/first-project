<template>
  <Header></Header>
  <div class="body-style">
    <SideBar></SideBar>
    <div style="flex:1">
      <Admin v-if="isAdminVisible"></Admin>
      <Chat v-if="isChatVisible"></Chat>
      <Projects v-if="isProjectVisible"></Projects>
      <Files v-if="isFileVisible"></Files>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Admin from "./pages/administrator.vue"
import Chat from "./pages/chat.vue"
import Files from "./pages/files.vue"
import Projects from "./pages/projects.vue"

export default {
  name: 'App',
  computed:{
    ...mapState({
      isAdminVisible:(state)=>state.isAdminVisible,
      isChatVisible:(state)=>state.isChatVisible,
      isProjectVisible:(state)=>state.isProjectVisible,
      isFileVisible:(state)=>state.isFileVisible,
    })
  },
  data() {
    return {
    }
  },
  components: {
    Header,
    SideBar,
    Files,
    Projects,
    Admin,
    Chat
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
