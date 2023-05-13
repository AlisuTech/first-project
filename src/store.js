import { createStore } from "vuex";

const store=createStore({
    state(){
        return {
            isAdminVisible: false,
            isChatVisible: false,
            isProjectVisible: false,
            isFileVisible: false,
            isLoading:false
        }
    },
    mutations:{
        isLoaderOpen(state, isloading){
            state.isLoading=isloading
        },
        showAdmin(state){
            state.isAdminVisible=true
            state.isChatVisible=false
            state.isFileVisible=false
            state.isProjectVisible=false
            localStorage.setItem("isAdminVisible",true);
        },
        showChat(state){
            state.isAdminVisible=false
            state.isChatVisible=true
            state.isFileVisible=false
            state.isProjectVisible=false
            localStorage.setItem("isAdminVisible",false);
            
        },
        showProjects(state){
            state.isAdminVisible=false
            state.isChatVisible=false
            state.isFileVisible=false
            state.isProjectVisible=true
            localStorage.setItem("isAdminVisible",false);
        },
        showFiles(state){
            state.isAdminVisible=false
            state.isChatVisible=false
            state.isFileVisible=true
            state.isProjectVisible=false
            localStorage.setItem("isAdminVisible",false);
        }
    }
})

export default store