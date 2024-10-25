document.body.addEventListener('click', function (event) {
  let isCircleExist = document.getElementsByClassName('circle')

  while (isCircleExist.length >= 2) {
    isCircleExist[0].parentNode.removeChild(isCircleExist[0])
    isCircleExist[0].parentNode.removeChild(isCircleExist[0])
  }

  let circle = document.createElement('div')
  circle.classList.add('circle')

  const randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20

  circle.style.height = randomNumber + 'px'
  circle.style.width = randomNumber + 'px'

  const top = event.clientY - randomNumber / 2
  const left = event.clientX - randomNumber / 2

  console.log('top', top)
  console.log('left', left)

  circle.style.top = top + 'px'
  circle.style.left = left + 'px'

  document.body.appendChild(circle)
})