<template>
    <div class="body-style">
        <div class="sidebar-design">
            <router-link :to="{ name: 'Admin', params: { message: 'Hello World', newmessage: 'Hello from Joy' } }">
                <div class="sidebar-menu">
                    <i class="sidebar-icon fa fa-cogs"></i>
                    <span>Administrator</span>
                </div>
            </router-link>
            <div class="sidebar-menu" @click="showAdminAction()">
                <i class="sidebar-icon fa fa-cogs"></i>
                <span>Administrator</span>
            </div>
            <router-link to="/projects">
                <div class="sidebar-menu">
                    <i class="sidebar-icon fa fa-briefcase"></i>
                    <span>Projects</span>
                </div>
            </router-link>
            <div class="sidebar-menu" @click="showProjectsAction()">
                <i class="sidebar-icon fa fa-briefcase"></i>
                <span>Projects</span>
            </div>
            <router-link to="/chat">
                <div class="sidebar-menu">
                    <i class="sidebar-icon fa fa-briefcase"></i>
                    <span>Chat & Memo</span>
                </div>
            </router-link>
            <div class="sidebar-menu" @click="showChatAction()">
                <i class="sidebar-icon fa fa-comment"></i>
                <span>Chat & Memo</span>
            </div>
            <router-link to="/files">
                <div class="sidebar-menu">
                    <i class="sidebar-icon fa fa-briefcase"></i>
                    <span>File Management</span>
                </div>
            </router-link>
            <div class="sidebar-menu" @click="showFileAction()">
                <i class="sidebar-icon fa fa-file"></i>
                <span>File Management</span>
            </div>
            <div class="sidebar-menu" @click="showLoaderAction(true)">
                <i class="sidebar-icon fa fa-file"></i>
                <span>Show Loader</span>
            </div>
            <div class="sidebar-menu" @click="showLoaderAction(false)">
                <i class="sidebar-icon fa fa-file"></i>
                <span>Close Loader</span>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../store.js"
export default {
    name: "SideBar",
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
        showAdminAction() {
            this.$router.push("/admin")
            // store.commit("showAdmin")
        },
        showProjectsAction() {
            this.$router.push("/projects")
            // store.commit("showProjects")
        },
        showChatAction() {
            this.$router.push("/chat")
            // store.commit("showChat")

        },
        showFileAction() {
            this.$router.push("/files")
            // store.commit("showFiles")

        },
        showLoaderAction(show) {
            store.commit("isLoaderOpen", show)
        }
    }
}
</script>

<style>
.sidebar-design {
    background-color: #2e3743;
    color: white;
    width: 300px;
    text-align: start;
    height: 100vh;
}

.sidebar-menu {
    font-size: 22px;
    padding: 20px 10px;
    font-weight: 700;
}

.sidebar-menu:hover {
    background-color: whitesmoke;
    color: #202730;
    cursor: pointer;
}

.sidebar-icon {
    margin-right: 10px;
}
</style>