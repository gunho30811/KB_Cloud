import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Account from '@/pages/expenses/account.vue';
import Calendar from '@/pages/expenses/calendar.vue';
import Forms from '@/pages/expenses/forms.vue';
import Graph from '@/pages/expenses/graph.vue';
import Main from '@/pages/expenses/main.vue';
import Info from '@/pages/invest/info.vue';
import Portfolio from '@/pages/invest/portfolio.vue';
import sample from '@/pages/sample.vue'
import sample2 from '@/pages/sample2.vue'


const router = createRouter({
  history: createWebHistory(),
  routes :[
    { path: '/', name: 'Home', component: Home },
    { path: '/expenses/account', name: 'Account', component: Account },
    { path: '/expenses/calendar', name: 'Calendar', component: Calendar },
    { path: '/expenses/forms', name: 'Forms', component: Forms },
    { path: '/expenses/graph', name: 'Graph', component: Graph },
    { path: '/expenses/main', name: 'Main', component: Main },
    { path: '/invest/info', name: 'Info', component: Info },
    { path: '/invest/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/sample', name: "sample", component: sample },
    { path: '/sample2', name: "sample", component: sample2 },

  ]
});

export default router;
