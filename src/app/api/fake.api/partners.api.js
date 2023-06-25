// import { randomInt } from '../../utils/randomNum'
import { randomInt } from '../../../../src//utils/randomNum'

const partners = [
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'Александр Пузиков',
    age: 22,
    projectJob: 'Page: Favorites, Components: NavBar and Breadcrumbs',
    image: 'https://i.ebayimg.com/images/g/Rx4AAOSw9EljBmmN/s-l500.jpg',
    email: 'yaluvv@yandex.ru',
    telegram: 'https://t.me/yalvv',
    github: ' https://github.com/yaluvv',
    hardSkills: {
      title: 'Hard Skills:',
      javaScript: { name: 'Java Script:', progress: randomInt(25, 65) },
      html: { name: 'HTML:', progress: randomInt(55, 80) },
      css: { name: 'CSS:', progress: randomInt(60, 75) },
      redux: { name: 'Redux:', progress: randomInt(35, 55) }
    },
    softSkills: {
      title: 'Soft Skills:',
      creativity: { name: 'Креативность:', progress: randomInt(20, 85) },
      flexibility: { name: 'Гибкость:', progress: randomInt(30, 75) },
      discipline: { name: 'Коммуникативность:', progress: randomInt(20, 90) },
      autonomy: { name: 'Самостоятельность:', progress: randomInt(60, 95) },
      proactivity: { name: 'Проактивность:', progress: randomInt(50, 90) }
    },
    qualities: [
      '67rdca3eeb7f6fgeed471198',
      '67rdca3eeb7f6fgeed471102',
      '67rdca3eeb7f6fgeed471103'
    ],
    about_me: '',
    favorites: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'Алексей Харитонов',
    age: 28,
    projectJob: 'Page: Main, Components: Badge and Button',
    image: 'https://plaqat.ru/images/19337.jpg',
    email: 'alexeywest024@list.ru',
    telegram: 'https://t.me/WeST_024',
    github: 'https://github.com/AlexeyKharitonov',
    hardSkills: {
      title: 'Hard Skills:',
      javaScript: { name: 'Java Script:', progress: randomInt(25, 65) },
      html: { name: 'HTML:', progress: randomInt(55, 80) },
      css: { name: 'CSS:', progress: randomInt(60, 75) },
      redux: { name: 'Redux:', progress: randomInt(35, 55) }
    },
    softSkills: {
      title: 'Soft Skills:',
      creativity: { name: 'Креативность:', progress: randomInt(20, 85) },
      flexibility: { name: 'Гибкость:', progress: randomInt(30, 75) },
      discipline: { name: 'Коммуникативность:', progress: randomInt(20, 90) },
      autonomy: { name: 'Самостоятельность:', progress: randomInt(60, 95) },
      proactivity: { name: 'Проактивность:', progress: randomInt(50, 90) }
    },
    qualities: [
      '67rdca3eeb7f6fgeed471100',
      '67rdca3eeb7f6fgeed4711012',
      '67rdca3eeb7f6fgeed471105'
    ],
    about_me: '',
    favorites: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'Святослав Попов',
    age: 37,
    projectJob: 'Page: Routing, Components: Fake API',
    image:
      'https://img5.goodfon.ru/original/640x480/9/f4/alex-borsuk-by-alex-borsuk-donnie-stil-fon-cherepashki-nindz.jpg',
    email: 'svyatpopov86@gmail.com',
    telegram: 'https://t.me/Vana_Svyat',
    github: 'https://github.com/Sviatoslove',
    hardSkills: {
      title: 'Hard Skills:',
      javaScript: { name: 'Java Script:', progress: randomInt(25, 65) },
      html: { name: 'HTML:', progress: randomInt(55, 80) },
      css: { name: 'CSS:', progress: randomInt(60, 75) },
      redux: { name: 'Redux:', progress: randomInt(35, 55) }
    },
    softSkills: {
      title: 'Soft Skills:',
      creativity: { name: 'Креативность:', progress: randomInt(20, 85) },
      flexibility: { name: 'Гибкость:', progress: randomInt(30, 75) },
      discipline: { name: 'Коммуникативность:', progress: randomInt(20, 90) },
      autonomy: { name: 'Самостоятельность:', progress: randomInt(60, 95) },
      proactivity: { name: 'Проактивность:', progress: randomInt(50, 90) }
    },
    qualities: [
      '67rdca3eeb7f6fgeed471101',
      '67rdca3eeb7f6fgeed471103',
      '67rdca3eeb7f6fgeed471104'
    ],
    about_me:
      'Рад работать в коллективе с такими прекрасными качествами. Уверен, что нам любая задача по плечу. Хочется больше новых и интересных проектов. Готов прилагать необходимые усилия для того, чтобы всё работало))). Треньки и обед по распорядку)',
    favorites: false
  },
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'Максим Рогозин',
    age: 30,
    projectJob: 'Page: PartnerPage, Components: PartnerCard and Progress',
    image:
      'https://artwall.kz/image/catalog/cat-images/detskie/ninja-turtles/tmnt-art-nl.jpg',
    email: 'maximrogozin@icloud.com',
    telegram: 'https://t.me/Autmaxcapital',
    github: 'https://github.com/Maximrogozin',
    hardSkills: {
      title: 'Hard Skills:',
      javaScript: { name: 'Java Script:', progress: randomInt(25, 65) },
      html: { name: 'HTML:', progress: randomInt(55, 80) },
      css: { name: 'CSS:', progress: randomInt(60, 75) },
      redux: { name: 'Redux:', progress: randomInt(35, 55) }
    },
    softSkills: {
      title: 'Soft Skills:',
      creativity: { name: 'Креативность:', progress: randomInt(20, 85) },
      flexibility: { name: 'Гибкость:', progress: randomInt(30, 75) },
      discipline: { name: 'Коммуникативность:', progress: randomInt(20, 90) },
      autonomy: { name: 'Самостоятельность:', progress: randomInt(60, 95) },
      proactivity: { name: 'Проактивность:', progress: randomInt(50, 90) }
    },
    qualities: [
      '67rdca3eeb7f6fgeed471100',
      '67rdca3eeb7f6fgeed471102',
      '67rdca3eeb7f6fgeed471105'
    ],
    about_me: '',
    favorites: false
  }
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(partners)
    }, 2000)
  })

export default {
  fetchAll
}
