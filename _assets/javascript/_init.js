import SmoothScroll from 'smooth-scroll'

const reel = document.querySelector('#reel')
const container = document.querySelector('#vimeo-player')
const player = new Vimeo.Player(container)
const scroll = new SmoothScroll('a[href*="#"]')

const clipThumbnails = document.querySelectorAll('.clip a')

clipThumbnails.forEach(thumb => {
  thumb.addEventListener('click', e => {
    e.preventDefault()
    const thevid = Number(e.currentTarget.dataset.vimeoid)
    player.loadVideo(thevid).then(scroll.animateScroll(reel))
  })
})
