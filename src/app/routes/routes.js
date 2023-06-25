import Favorites from '../layouts/Favorites'
import Main from '../layouts/Main'
import OurTeam from '../layouts/OurTeam'
import PartnerPage from '../layouts/PartnerPage'

const routes = [
  {
    path: '/',
    name: 'Главная страница',
    display: true,
    exact: true,
    component: Main
  },
  {
    path: '/ourTeam',
    name: 'Наша команда',
    display: true,
    exact: false,
    component: OurTeam
  },
  {
    path: '/favorites',
    name: 'Избранные',
    display: true,
    exact: false,
    component: Favorites
  },
  {
    path: '/ourTeam/:id',
    name: 'Страница участника',
    display: false,
    exact: false,
    component: PartnerPage
  }
]

export default routes
