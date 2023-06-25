export const declensionWord = (num = 0, word, end1, end2, end3) => {
  const z = (num % 100) / 10
  const x = num % 10
  z >= 1.1 && z <= 1.4
    ? (num += ` ${word}${end1}`) //Поваров, минут, лет
    : x === 1
    ? (num += ` ${word}${end2}`) //Повар, минуту, год
    : x === 2 || x === 3 || x === 4
    ? (num += ` ${word}${end3}`) //Повара, минуты, года
    : (num += ` ${word}${end1}`) //Поваров, минут, лет
  return num
}
