import FavoritesPage from '../layouts/FavoritesPage'
import MainPage from '../layouts/MainPage'
import TeamPage from '../layouts/TeamPage'

const routes = [
  {
    name: 'Главная страница',
    to: '/',
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    name: 'Наша команда',
    to: '/ourTeam',
    path: '/ourTeam/:id?',
    exact: false,
    component: TeamPage
  },
  {
    name: 'Избранные',
    to: '/favorites',
    path: '/favorites',
    exact: false,
    component: FavoritesPage
  }
]

export default routes
