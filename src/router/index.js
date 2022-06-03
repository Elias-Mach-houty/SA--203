import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import BobView from '../views/BobView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import StyleguideView from '../views/StyleguideView.vue'
import page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',          name: 'home',               component: HomeView },
    { path: '/artistes',          name: 'ArtistesView',            component: ArtistesView  },
    { path: '/programmation',          name: 'ProgrammationView',            component: ProgrammationView  },
    { path: '/festival',          name: 'FestivalView',            component: FestivalView  },
    { path: '/contact',          name: 'ContactView',            component: ContactView  },
    { path: '/bob',          name: 'BobView',            component: BobView  },
    { path: '/mentionslegales', name: 'MentionsLegalesView', component: MentionsLegalesView },
    { path: '/styleguide', name: 'StyleguideView', component: StyleguideView },
    { path: '/:pathMatch(.*)*', name: '404' , component: page404}
  ]
})

export default router
