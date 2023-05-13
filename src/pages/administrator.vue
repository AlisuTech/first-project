<template>
    <div>
        <h3>Administrator</h3>
        <p>{{$route.params.message }}</p>
        <p>{{$route.params.newmessage }}</p>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Profile</th>
                    <th>Status</th>
                    <th>Roles & Permissions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user">
                    <td>{{ user.sn }}</td>
                    <td>{{ user.name }}</td>
                    <td><div style="background-color: green; color:white">
                        <i class="fa fa-circle"></i>
                        {{user.status}}
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
export default {
    name: "AdminPage",
    data(){
        return {
            users: [
                {
                    sn:1,
                    name:"Joy Chidinma",
                    status:"Active"
                },
                {
                    sn:2,
                    name:"Ifeanyi Nwachukwu",
                    status:"Active"
                },
                {
                    sn:3,
                    name:"Oniro Oburoh",
                    status:"Inactive"
                },
                {
                    sn:4,
                    name:"Victory Ejere",
                    status:"Active"
                },
                {
                    sn:5,
                    name:"Jerry Nkwocha",
                    status:"Inactive"
                }
            ]
        }
    }
}

</script>
<style></style>