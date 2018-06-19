import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import PersonalService from '@/components/PersonalService'
import Remuneration from '@/components/Remuneration'
import Outsourcing from '@/components/Outsourcing'
import PersonnelPlatform from '@/components/PersonnelPlatform'
import RecruitingCentre from '@/components/RecruitingCentre'
import Register from '@/components/register'
import Loginwang from '@/components/Loginwang'
import Company from '@/components/Company'
import Social from '@/components/Social'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/abc',
        name: 'PersonalService',
        component: PersonalService
    }, {
        path: '/bcs',
        name: 'Remuneration',
        component: Remuneration
    }, {
        path: '/zpzx',
        name: 'Outsourcing',
        component: Outsourcing
    }, {
        path: '/grfw',
        name: 'PersonnelPlatform',
        component: PersonnelPlatform
    }, {
        path: '/wbfw',
        name: 'RecruitingCentre',
        component: RecruitingCentre
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/login',
        name: 'Loginwang',
        component: Loginwang
    }, {
        path: '/company',
        name: 'Company',
        component: Company
    }, {
        path: '/social',
        name: 'Social',
        component: Social
    }]
})