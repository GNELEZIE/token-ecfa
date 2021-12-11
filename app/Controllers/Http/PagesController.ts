 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
    public home({view}:HttpContextContract){
        return view.render('pages/index');
    }

    public about({view}:HttpContextContract){
        return view.render('pages/about')
    }
   public contact({view}:HttpContextContract){
       return view.render('pages/contact')
   }

}
