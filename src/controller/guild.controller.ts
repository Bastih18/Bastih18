import {Request, Response} from 'express';
import Joi from "@hapi/joi";
import {addGuildMemberRoleValidation, createGuildChannelValidation, createGuildRoleValidation, getGuildMemberValidation, getGuildRoleValidation, getGuildIdValidation, modifyGuildChannelPositionsValidation, modifyGuildMemberValidation, modifyGuildValidation, removeGuildMemberRoleValidation} from './validation/guild.validation';
import {body} from '../handler/status';
import {guild} from '../utils/urls';
import fetch from 'node-fetch'

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
    const error = getGuildIdValidation(req.params.guildid);
    if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));

   //request to discord
   fetch((guild.getGuild).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
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
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));
   
   //request to discord
   fetch((guild.getGuildPreview).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))

}


export const modifyGuild = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));

 {
   //Validating given Arguments
   const { error }: Joi.ValidationResult = modifyGuildValidation(req.body);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
 }  

   //request to discord
   fetch((guild.modifyGuild).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PATCH",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})

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
   const error = getGuildIdValidation(req.params.guildid);   
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));
   
   //request to discord
   fetch((guild.getGuildChannels).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))
   
}


export const createGuildChannel = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));
   
   {
      //Validating given Arguments
      const { error }: Joi.ValidationResult = createGuildChannelValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   }

   fetch((guild.createGuildChannel).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "POST",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
   
}

export const modifyGuildChannelPositions = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));
   
   {
      //Validating given Arguments
      const { error }: Joi.ValidationResult = modifyGuildChannelPositionsValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   }

   fetch((guild.createGuildChannel).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PATCH",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
   
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
   fetch((guild.getGuildMember).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
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

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));

   //request to discord
   fetch((guild.getGuildMembers).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))

}

export const modifyGuildMember = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id
   const { error }: Joi.ValidationResult = getGuildMemberValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));


   {
      const { error }: Joi.ValidationResult = modifyGuildMemberValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   }

   
   //request to discord
   fetch((guild.modifyGuildMember).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PATCH",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})

}

/**
 * adds a role to a guild member. You first define the guild (Server)
 * over the guild.id and than search a member with the member.id
 * and then you define a roleid with the role.id
 *
 * The member object has the user object in it.
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
 export const addGuildMemberRole = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id and role.id
   const { error }: Joi.ValidationResult = addGuildMemberRoleValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   fetch((guild.addGuildMemberRole).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid).replace("{role.id}", req.params.roleid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PUT",
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
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
   }).then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
}

/**
 * kicks a Meber from a guild.
 * 
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
export const removeGuildMember = async (req: Request, res: Response) => {

   //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildMemberValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   fetch((guild.removeGuildMember).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
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

/**
 * return's bans of a guild. You just define the guild.
 * 
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
 export const getGuildBans = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));
   
   //request to discord
   fetch((guild.getGuildBans).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))

}

/**
 * return's a ban of a guild. You just define the guildID and memberid.
 * 
 * @param {Request} req
 * @param {Response} res
 *
 * @alpha
 */
 export const getGuildBan = async (req: Request, res: Response) => {

   //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildMemberValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   fetch((guild.getGuildBan).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))

}

export const createGuildBan = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id
   const { error }: Joi.ValidationResult = getGuildMemberValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //Validating given delete_message_days and reason
   {
      const { error }: Joi.ValidationResult = modifyGuildMemberValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   }

   //request to discord
   fetch((guild.createGuildBan).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PUT",
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
}

export const removeGuildBan = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id
   const { error }: Joi.ValidationResult = getGuildMemberValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   //request to discord
   fetch((guild.removeGuildBan).replace("{guild.id}", req.params.guildid).replace("{user.id}", req.params.userid), {
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

export const getGuildRoles = async (req: Request, res: Response) => {

   //Validating given guild.id and member.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));

   //request to discord
   fetch((guild.getGuildRoles).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch(err => res.status(500).send(body("Something didn't work. Error => "+ err, 500)))
}

export const createGuildRole = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));


   {
      const { error }: Joi.ValidationResult = createGuildRoleValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   }

   
   //request to discord
   fetch((guild.createGuildRole).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "POST",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})

}

export const modifyGuildRolePositions = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));


   {
      const { error }: Joi.ValidationResult = modifyGuildChannelPositionsValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   }

   
   //request to discord
   fetch((guild.modifyGuildRolePositions).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PATCH",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})

}

export const modifyGuildRole = async (req: Request, res: Response) => {

   //Validating given guild.id
   const { error }: Joi.ValidationResult = getGuildRoleValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   {
      const { error }: Joi.ValidationResult = createGuildRoleValidation(req.body);
      if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));

   }

   //request to discord
   fetch((guild.modifyGuildRole).replace("{guild.id}", req.params.guildid).replace("{role.id}", req.params.roleid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "PATCH",
      "body": JSON.stringify(req.body)
   })
   .then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system

   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})

}

export const deleteGuildRole = async (req: Request, res: Response) => {

   //Validating guildId, memberId and RoleId
   const { error }: Joi.ValidationResult = getGuildRoleValidation(req.params);
   if(error) return res.status(400).send(body(error.details[0].message.toString(), 400));
   
   //request to discord
   fetch((guild.deleteGuildRole).replace("{guild.id}", req.params.guildid).replace("{role.id}", req.params.roleid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "DELETE",
   }).then((response) => {
      //send response      
      res.status(response.status).send(body(response.statusText, response.status));
      //TODO StatusHandler that checks specific status and run's ticket system
  
   }).catch((err) => {
      console.log(err);
      
      res.status(500).send(body("Something didn't work. Error => "+ err, 500))})
}

export const getGuildVoiceRegions = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));

  //request to discord
  fetch((guild.getGuildVoiceRegions).replace("{guild.id}", req.params.guildid), {
      "headers": {
         "Content-Type": "application/json",
         "Authorization": `Bot ${process.env.TOKEN}`
      },
      "method": "GET",
   })
   .then(async (response) => {
      
      //get Data from response
      let responseData = response.json()
      await responseData.then(json => responseData = json)
      
      //send response        
      res.status(response.status).send(body(responseData, response.status));
     //TODO StatusHandler that checks specific status and run's ticket system

  }).catch(err => res.status(500).send(body("Something didn't work. Error => " + err, 500)))
}

export const getGuildInvites = async (req: Request, res: Response) => {

   //Validating given guild.id
   const error = getGuildIdValidation(req.params.guildid);
   if(error) return res.status(400).send(body("The GuildId must be a Number with a minimum length of 15.", 400));

  //request to discord
  fetch((guild.getGuildInvites).replace("{guild.id}", req.params.guildid), {
   "headers": {
      "Content-Type": "application/json",
      "Authorization": `Bot ${process.env.TOKEN}`
   },
   "method": "GET",
})
.then(async (response) => {
   
   //get Data from response
   let responseData = response.json()
   await responseData.then(json => responseData = json)
   
   //send response        
   res.status(response.status).send(body(responseData, response.status));
     //TODO StatusHandler that checks specific status and run's ticket system

  }).catch(err => res.status(500).send(body("Something didn't work. Error => " + err, 500)))
}