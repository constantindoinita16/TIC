<template>
<div id="view-student">
   <ul class="collection with-header">
       <li class="collection-header"><h4>{{full_name}}</h4></li>
       <li class="collection-header">Student ID: {{student_id}}</li>
       <li class="collection-header">Phone Number: {{phone_number}}</li>
       <li class="collection-header">Faculty: {{faculty}}</li>
       <li class="collection-header">Funding Type: {{funding_type}}</li>
   </ul>
   <router-link to="/" class="btn grey">Back</router-link>
   <button  class="btn red">Delete</button>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'view-student',
    data () {
        return {
            student_id: null,
            full_name:null,
            phone_number:null,
            funding_type:null,
            faculty:null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('students').where('student_id',
        '==', to.params.student_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc =>{
                next(vm => {
                    vm.student_id = doc.data().student_id
                    vm.full_name = doc.data().full_name
                    vm.phone_number = doc.data().phone_number
                    vm.funding_type = doc.data().funding_type
                    vm.faculty = doc.data().faculty


                })
            }
            )
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData (){
            db.collection('students').where
            ('student_id', '==', this.$route.params.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.student_id = doc.data().student_id
                    this.faculty = doc.data().faculty
                    this.phone_number = doc.data().phone_number
                    this.full_name = doc.data().full_name
                    this.funding_type = doc.data().funding_type
                })
            })
        }


    }

}
</script>