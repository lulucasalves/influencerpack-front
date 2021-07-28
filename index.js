const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove ('show')
  })
}

function changeHeaderWhenScroll() {
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {

    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      ServiceWrapperSize: true
    }
  }
})

const scrollReveal = ScrollReveal({
  origin:'top',
  distace: '30px',
  duration: 1000,
  reset: false
})

scrollReveal.reveal(
  `#home h1, #home .text-button, #home .video,
  #about .first, #about .second, #about .list .item,
  .about2 .btn, .about2 .aulas, .about2 .midia, .about2 .carta, .about2 .contrato,
  #bonus, #bonus .description,
  .resume, .resume .list .itens, .resume h4, .resume .real-price,
  #garantia p, #garantia img,
  .aviso`,
  { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

  if(window.scrollY >= 1000) {
    backToTopButton.classList.add('show')
  }
  else {
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections ) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }
    else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }

}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})