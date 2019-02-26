import SmoothScroll from 'smooth-scroll'

const reel = document.querySelector('#reel')
const container = document.querySelector('#vimeo-player')
const player = new Vimeo.Player(container)
const scroll = new SmoothScroll('a[href*="#"]')
console.log(scroll)

const clipThumbnails = document.querySelectorAll('.clip a')
console.log('clip thumbs', clipThumbnails)

clipThumbnails.forEach(thumb => {
  console.log(thumb)
  thumb.addEventListener('click', e => {
    e.preventDefault()
    const videoId = e.currentTarget.dataset.vimeoid
    player.loadVideo(videoId).then(scroll.animateScroll(reel))
  })
})

/*
console.log(iframe);

console.log(player)

player.on('play', function() {
  console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});
 */
