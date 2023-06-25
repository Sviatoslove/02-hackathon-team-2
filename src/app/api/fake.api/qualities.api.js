const qualities = [
  {
    _id: '67rdca3eeb7f6fgeed471198',
    content: 'Умный',
    textColor: 'text-warning',
    color: 'primary'
  },
  {
    _id: '67rdca3eeb7f6fgeed471100',
    content: 'Креативный',
    textColor: 'text-danger-emphasis',
    color: 'secondary'
  },
  {
    _id: '67rdca3eeb7f6fgeed4711012',
    content: 'Борзый',
    textColor: 'text-light-emphasis',
    color: 'success'
  },
  {
    _id: '67rdca3eeb7f6fgeed471101',
    content: 'Тимлид',
    textColor: 'text-warning text-uppercase',
    color: 'danger'
  },
  {
    _id: '67rdca3eeb7f6fgeed471102',
    content: 'Красавчик',
    textColor: 'text-warning-emphasis',
    color: 'info'
  },
  {
    _id: '67rdca3eeb7f6fgeed471103',
    content: 'Спокойный',
    textColor: 'text-light',
    color: 'dark'
  },
  {
    _id: '67rdca3eeb7f6fgeed471104',
    content: 'Вдумчивый',
    textColor: 'text-primary',
    color: 'warning'
  },
  {
    _id: '67rdca3eeb7f6fgeed471105',
    content: 'Непоколебимый',
    textColor: 'text-dark',
    color: 'light'
  }
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(qualities)
    }, 2000)
  })

export default {
  fetchAll
}
