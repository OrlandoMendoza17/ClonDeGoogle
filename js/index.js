const googleSearch = 'https://www.google.com/search?q='
const $search = document.getElementById('search')

$search.addEventListener('submit', (event)=>{
  event.preventDefault()
  const form = new FormData($search)
  const input = form.get('search')
  console.log(input)
  window.location = `${googleSearch}${input}`  
})