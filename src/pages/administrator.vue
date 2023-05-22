<template>
    <div>
        <h3>Administrator</h3>
        <p>{{$route.params.message }}</p>
        <p>{{$route.params.newmessage }}</p>
        <table>
            <thead>
                <tr>
                    <th>Profile</th>
                    <th>gender</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user">
                    <td>{{ user.firstname }} {{ user.lastname }}</td>
                    <td>{{ user.gender }}</td>
                    <td><div style="background-color: green; color:white">
                        <i class="fa fa-circle"></i>
                        {{user.email}}
                    </div></td>
                    <td>Administrator</td>
                </tr>
                <!-- <tr v-for="i in 10" :key="i">
                    <td>{{i}}</td>
                    <td>Joy Chidinma</td>
                    <td>Active</td>
                    <td>Administrator</td>
                </tr> -->
            </tbody>

        </table>
        <!-- <p v-for="i in 10" :key="i">Hello {{ i }}</p> -->
        <!-- <li v-for="i in 10" :key="i">List</li> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "AdminPage",
    data(){
        return {
            users: []
        }
    },
    methods:{
        async fetchData(){
            this.users=[]
            const response=await axios.get('http://localhost:5000/getallusers',
           { 
            headers: {
                'Content-Type': 'application/json',
                'authorization':localStorage.accessToken
            }
        }
            )
            // const response=await axios.get('http://localhost:5000/getuserbygender?gender=female')
            if(response.status==200){
                this.users=response.data
            }else{
                alert(response.data)
            }
        }
    },
    mounted(){
        this.fetchData();
    }
}

</script>
<style></style>