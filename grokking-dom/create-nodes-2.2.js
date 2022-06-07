const ul = document.createElement('ul')
const arr = ['html', 'css', 'js']
const render = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
   const li = document.createElement('li')
   li.append(arr[i])
   ul.append(li)
   document.body.prepend(li)
    }
}
console.log(render(arr))