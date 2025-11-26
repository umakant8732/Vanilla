const h1Tag = document.querySelector('h1')

h1Tag.addEventListener('dblclick', () => {
  alert('i am working')
})

const addCard = document.querySelector('.add-card')
let cardNo = 1

addCard.addEventListener('click', e => {
  const container = document.querySelector('.container')

  const div = document.createElement('div')

  div.setAttribute('class', 'card')
  div.textContent = cardNo++

  div.addEventListener('click', e => {
    e.target.remove() ;
    div = null ;
  })

  container.appendChild(div)
})
