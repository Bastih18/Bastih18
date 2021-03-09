import {Application} from "express";
import {getGuild, getGuildPreview} from '../controller/guild.controller';


export default (baseUrl: string, app: Application) =>{
    app.get(`${baseUrl}/:id`, getGuild);
    app.get(`${baseUrl}/:id/preview`, getGuildPreview);
}