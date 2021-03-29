import {Request, Response} from 'express';
import Joi from "@hapi/joi";
import {getGuildMemberValidation, getGuildValidation, removeGuildMemberRoleValidation} from './validation/guild.validation';
import {body} from '../handler/status';
import axios from 'axios';
import {guild} from '../utils/urls';
import fetch from 'node-fetch';

/**
 * return's the discord server guild.
 * It's only accessible, when out Bot joined the Server
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
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

/**
 * return's a preview of a discord guild.
 * It has less information than the guild endpoint.
 * It's only accessible, when out Bot joined the Server
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
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

/**
 * return's a guild member. You first define the guild (Server)
 * over the guild.id and than search a member with the member.id
 *
 * The member object has the user object in it.
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
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

/**
 * 
 * return's all guild members. You just define the Server (guildid).
 * 
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */

 export const getGuildMembers = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id
   const { error }: Joi.ValidationResult = getGuildValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   //request to discord
   axios.get((guild.getGuildMembers).replace("{guild.id}", req.params.guildid), {
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

/**
 * return's channels of a guild. You just define the guild.
 * 
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
 export const getGuildChannels = async (req: Request, res: Response) => {

   //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   axios.get((guild.getGuildChannels).replace("{guild.id}", req.params.guildid), {
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

   export const removeGuildMemberRole = async (req: Request, res: Response) => {

   //Validating guildId, memberId and RoleId
   const { error }: Joi.ValidationResult = removeGuildMemberRoleValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   fetch((guild.removeGuildMemberRole).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid).replace("{role.id}", req.params.roleid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "DELETE",
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
   }