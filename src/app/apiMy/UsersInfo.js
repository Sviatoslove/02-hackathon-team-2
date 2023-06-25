import { nanoid } from 'nanoid'

// временно!!
const UsersInfo = [
  { _id: nanoid(), name: 'Алексей', age: 28 },
  { _id: nanoid(), name: 'Святослав', age: 37 },
  { _id: nanoid(), name: 'Максим', age: 30 },
  { _id: nanoid(), name: 'Александр', age: 22 }
]

const content = `Превращаем идеи в технологическое совершенство. 
Расширяем возможности будущего с помощью кода!`

export { UsersInfo, content }
