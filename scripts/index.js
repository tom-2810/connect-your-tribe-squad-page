import express from 'express'

const url = 'https://whois.fdnd.nl/api/v1/squad/'
// const data = await fetch(url)
//   .then((response) => response.json())
//   .catch((error) => error)

// console.log(data)


// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  // console.log(request.query.squad)

  let slug = request.query.squad || 'squad-b-2022'
  let orderBy = request.query.orderBy || 'name'
  let direction = request.query.direction || 'ASC'
  let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=' + direction


  fetchJson(squadUrl).then((data) => {
    response.render('index', data)
  })
})

// app.get('/partials/members', (request, response) => {

// })

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}