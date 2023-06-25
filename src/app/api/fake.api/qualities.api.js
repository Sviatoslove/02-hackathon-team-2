const qualities = {
  smart: {
    _id: '67rdca3eeb7f6fgeed471198',
    name: 'Умный',
    color: 'primary'
  },
  creative: {
    _id: '67rdca3eeb7f6fgeed471100',
    name: 'Креативный',
    color: 'secondary'
  },
  greyhound: {
    _id: '67rdca3eeb7f6fgeed4711012',
    name: 'Борзый',
    color: 'success'
  },
  timlid: {
    _id: '67rdca3eeb7f6fgeed471101',
    name: 'Тимлид',
    color: 'danger'
  },
  handsome: {
    _id: '67rdca3eeb7f6fgeed471102',
    name: 'Красавчик',
    color: 'info'
  },
  calm: {
    _id: '67rdca3eeb7f6fgeed471103',
    name: 'Спокойный',
    color: 'dark'
  },
  thoughtful: {
    _id: '67rdca3eeb7f6fgeed471104',
    name: 'Вдумчивый',
    color: 'warning'
  },
  unwavering: {
    _id: '67rdca3eeb7f6fgeed471105',
    name: 'Непоколебимый',
    color: 'light'
  }
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(qualities)
    }, 2000)
  })

export default {
  fetchAll
}
