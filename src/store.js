import { createStore } from "vuex";

const store=createStore({
    state(){
        return {
            isAdminVisible: false,
            isChatVisible: false,
            isProjectVisible: false,
            isFileVisible: false
        }
    },
    mutations:{
        showAdmin(state){
            state.isAdminVisible=!state.isAdminVisible
        },
        showChat(state){
            state.isChatVisible=!state.isChatVisible
            
        },
        showProjects(state){
            state.isProjectVisible=!state.isProjectVisible
        },
        showFiles(state){
            state.isFileVisible=!state.isFileVisible
        }
    }
})

export default store