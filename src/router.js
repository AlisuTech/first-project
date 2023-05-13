import {createRouter, createWebHistory} from 'vue-router'
import Admin from "./pages/administrator.vue"
import Chat from "./pages/chat.vue"
import Files from "./pages/files.vue"
import Projects from "./pages/projects.vue"

//?  - Query Parameter
//:  - Used to pass parameters within VueJS
const routes=[
    {
        path:"/admin?message=:message&newmessage=:newmessage",
        name:"Admin",
        component:Admin
    },
    {
        path:"/chat",
        name:"Chat",
        component:Chat
    },
    {
        path:"/projects",
        name:"Projects",
        component:Projects
    },
    {
        path:"/files",
        name:"Files",
        component:Files
    }
]

export default createRouter(
    {
        history:createWebHistory(),
        routes:routes
    }
)