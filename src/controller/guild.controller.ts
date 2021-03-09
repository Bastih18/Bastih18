import {Request, Response} from 'express';
import Joi from "@hapi/joi";
import {getGuildMemberValidation, getGuildValidation} from './validation/guild.validation';
import {body} from '../handler/status';
import axios from 'axios';
import {guild} from '../utils/urls';


export const getGuild = async (req: Request, res: Response) => {

    //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   //request to discord
   axios.get(guild.getGuild.replace("{guild.id}", req.params.guildid), {
      headers: {
         Authorization: `Bot ${process.env.TOKEN}`
      }
   }).then((response) => {
      //send response
      res.status(response.status).send(body(response.data, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => " + err, 500)))
}

export const getGuildPreview = async (req: Request, res: Response) => {

   //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   axios.get(guild.getGuildPreview.replace("{guild.id}", req.params.guildid), {
      headers: {
         Authorization: `Bot ${process.env.TOKEN}`
      }
   })
   .then((response) => {
      //send response
      res.status(response.status).send(body(response.data, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))

}

export const getGuildMember = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id
   const { error }: Joi.ValidationResult = getGuildMemberValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   axios.get((guild.getGuildMember).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
      headers: {
         Authorization: `Bot ${process.env.TOKEN}`
      }
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.data, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))

}