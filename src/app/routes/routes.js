import FavoritesPage from '../layouts/FavoritesPage'
import MainPage from '../layouts/MainPage'
import TeamPage from '../layouts/TeamPage'
import Login from '../layouts/login'

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
    path: '/ourTeam/:id?/:name?',
    exact: false,
    component: TeamPage
  },
  {
    name: 'Избранные',
    to: '/favorites',
    path: '/favorites',
    exact: false,
    component: FavoritesPage
  },
  {
    name: 'Вход',
    to: '/login',
    path: '/login',
    exact: false,
    component: Login
  }
]

export default routes
