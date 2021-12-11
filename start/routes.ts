/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import PagesController from 'App/Controllers/Http/PagesController'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

// Route.get('/about', async() =>{
//   return "La page a propos"
// })
// Route.get('/contact', async() => {
//   return 'La page de contact'
// })

Route.get('/', 'PagesController.home')
Route.get('/about', 'PagesController.about')
Route.get('/contact', 'PagesController.contact')