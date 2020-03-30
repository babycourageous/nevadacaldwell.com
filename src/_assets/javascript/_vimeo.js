const thumbContainers = document.querySelectorAll('a[data-vimeoid]')

thumbContainers.forEach(async thumbContainer => {
  const vimeoId = thumbContainer.dataset.vimeoid

  // Endpoint: https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/
  const data = await getJson(
    'https://vimeo.com/api/oembed.json?url=https://vimeo.com/' +
      vimeoId +
      '&width=640'
  )

  //const selector = `[data-vimeoId="${vimeoId}"]`
  const it = thumbContainer.querySelector('img')
  it.setAttribute('src', data.thumbnail_url)
})

// After: no more callbacks!
async function getJson(url) {
  try {
    let response = await fetch(url)
    let json = await response.json()
    return json
  } catch (e) {
    console.log('Error!', e)
  }
}
