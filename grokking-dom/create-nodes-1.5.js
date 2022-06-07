
const red = document.createElement('div')
const green = document.createElement('div')
const blue = document.createElement('div')
const text = document.createElement('p')

red.style.color = 'red'
green.style.color = 'green'
blue.style.color = 'blue'

text.textContent = 'Im here!!!'

red.append(green)
green.append(blue)
blue.append(text)

document.body.append(red)
