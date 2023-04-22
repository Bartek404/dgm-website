document.addEventListener('DOMContentLoaded', function () {
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const allNavItems = document.querySelectorAll('.nav__link')
const homeBtn = document.querySelector('.nav__homeBtn')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item =>
		item.addEventListener(
			'click',
			() => navMobile.classList.remove('nav-mobile--active') & navBtn.classList.remove('is-active')
		)
	)
}

navBtn.addEventListener('click', handleNav)




function addHomeBtn() {
	if (window.scrollY >= 200) {
		homeBtn.classList.add('nav__homeBtn--active')
	} else {
		homeBtn.classList.remove('nav__homeBtn--active')
	}
}

window.addEventListener('scroll', addHomeBtn)
})