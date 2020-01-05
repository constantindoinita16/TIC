import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditStudent from '@/components/EditStudent'
import NewStudent from '@/components/NewStudent'
import ViewStudent from '@/components/ViewStudent'
import ViewFaculty from '@/components/ViewFaculty'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-student',
      component: NewStudent
    },
    {
      path: '/edit/:student_id',
      name: 'edit-student',
      component: EditStudent
    },
    {
      path: '/:student_id',
      name: 'view-student',
      component: ViewStudent
    },
    {
      path: '/:faculty_id',
      name: 'view-faculty',
      component: ViewFaculty
    }
  ]
})
