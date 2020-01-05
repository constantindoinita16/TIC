<template>
<div id="dashboard">
    <ul class="collection with-header">
        <li class="collection-header"><h4>Students</h4></li>
    <li v-for="student in students" v-bind:key="student.id" class="collection-item">
    
    <div class="btn">{{student.faculty}} <router-link class="third-content" v-bind:to="{name: 'view-faculty', params:{student_id: student.student_id}}" ></router-link></div> {{student.student_id}}: {{student.full_name}}
    <router-link class="secondary-content" v-bind:to="{name:'view-student', params: {student_id: student.student_id}}">
        <i class="fa fa-eye"></i>
    </router-link>
    </li> 
    </ul>

    <div class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large dark">
            <i class="fa fa-plus"></i>
        </router-link>
    </div>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'dashboard',
    data () {
        return {
            students: [],
            faculties: []
        }
    },
    created () {
        db.collection('students').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // console.log(doc.data)
                const data = {
                   'id': doc.id,
                   'student_id': doc.data().student_id,
                   'full_name': doc.data().full_name,
                   'funding_type':doc.data().funding_type,
                   'phone_number':doc.data().phone_number,
                   'faculty':doc.data().faculty
                }   
                this.students.push(data)           
            });
        })
        db.collection('faculties').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // console.log(doc.data)
                const data2 = {
                   'id': doc.id,
                   'faculty_id': doc.data().faculty_id,
                   'full_name': doc.data().full_name,
                   'building':doc.data().building,
                   'dean':doc.data().dean,
                }   
                this.faculties.push(data2)           
            });
        })
    }

}
</script>