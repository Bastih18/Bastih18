import {Application} from "express";
import {getGuild} from '../controller/guild.controller';


export default (baseUrl: string, app: Application) =>{
    app.get(`${baseUrl}/:id`, getGuild);
}