import FavoritesPage from '../layouts/FavoritesPage'
import MainPage from '../layouts/MainPage'
import TeamPage from '../layouts/TeamPage'
import Login from '../layouts/Login'

const routes = [
  {
    name: 'Главная страница',
    display: true,
    to: '/',
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    name: 'Наша команда',
    display: true,
    to: '/ourTeam',
    path: '/ourTeam/:id?',
    exact: false,
    component: TeamPage
  },
  {
    name: 'Избранные',
    display: true,
    to: '/favorites',
    path: '/favorites',
    exact: false,
    component: FavoritesPage
  },
  {
    name: 'Вход',
    display: false,
    to: '/login',
    path: '/login',
    exact: false,
    component: Login
  }
]

export default routes
