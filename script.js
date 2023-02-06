const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, ind) => {
	item.addEventListener('click', () => {
		hideAllItems()	
		hideAllContent()
		item.classList.add('active')
		contents[ind].classList.add('show')
	})
})

function hideAllItems() {
	listItems.forEach(item => item.classList.remove('active'))
}

function hideAllContent() {
	contents.forEach(item => item.classList.remove('show'))
}