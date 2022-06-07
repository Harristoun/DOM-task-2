const div = document.createElement('div')

const ul = document.createElement('ul')

const li = document.createElement('li')

const a = document.createElement('a')

const li2 = document.createElement('li')

const a2 = document.createElement('a')
 
a.textContent = 'Наш инстаграм'
a.href = 'https://github.com/intocode/bootcamp/blob/main/campus/js/tasks/07-grokking-the-dom.md'

a2.textContent = 'Наш сайт'
a2.href = 'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&oq=gtht&aqs=chrome.1.69i57j0i1i10i433i512l2j0i1i10i512l2j0i1i10i433i512j0i1i10i512l2j0i1i10i433i512j0i1i10i512.1473j0j4&sourceid=chrome&ie=UTF-8'


div.append(ul)
ul.append(li,li2)
li.append(a)
li2.append(a2)


document.body.append(div)

console.log(div)