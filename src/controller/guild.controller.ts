import {Request, Response} from 'express';
import Joi from "@hapi/joi";
import {getGuildValidation} from './validation/guild.validation';
import {body} from '../handler/status';
import axios from 'axios';


export const getGuild = async (req: Request, res: Response) => {

    //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   //request to discord
   axios.get("https://discord.com/api/guilds/" + req.params.id, {
      headers: {
         Authorization: `Bot ${process.env.TOKEN}`
      }
   }).then((response) => {
      //send response
      res.status(response.status).send(body(response.data, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => " + err, 500)))
}