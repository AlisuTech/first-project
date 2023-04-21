<template>

<div class="body-style">
    <div class="sidebar-design">
        <div class="sidebar-menu" 
        @click="toggleVisibility(true,false,false,false)">
            <i class="sidebar-icon fa fa-cogs"></i>
            <span>Administrator</span>
        </div>
        <div class="sidebar-menu"
        @click="toggleVisibility(false,false,false,true)">
            <i class="sidebar-icon fa fa-briefcase"></i>
            <span>Projects</span>
        </div>
        <div class="sidebar-menu"
        @click="toggleVisibility(false,true,false,false)">
            <i class="sidebar-icon fa fa-comment"></i>
            <span>Chat & Memo</span>
        </div>
        <div class="sidebar-menu"
        @click="toggleVisibility(false,false,true,false)">
            <i class="sidebar-icon fa fa-file"></i>
            <span>File Management</span>
        </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js"
export default {
    name: "SideBar",
    data(){
        return{
        }
    },
    components:{
    },
    methods:{
        toggleVisibility(isadmin,ischat,isproject,isfile){
            store.commit("showAdmin")
            this.isAdminVisible=isadmin
            this.isChatVisible=ischat
            this.isProjectVisible=isproject
            this.isFileVisible=isfile
        }
    }
}
</script>

<style>
    .sidebar-design{
        background-color: #2e3743;
        color:white;
        width: 300px;
        text-align: start;
        height: 100vh;
    }
    .sidebar-menu{
        font-size: 22px;
        padding:20px 10px;
        font-weight: 700;
    }
    .sidebar-menu:hover{
        background-color: whitesmoke;
        color:#202730;
        cursor: pointer;
    }
    .sidebar-icon{
        margin-right: 10px;
    }
</style>