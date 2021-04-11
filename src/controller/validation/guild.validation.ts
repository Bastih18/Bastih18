import Joi, {Schema} from '@hapi/joi';


/**
 * Validation for Discord Guild
 * @param {Object} data
 *
 * @alpha
 */
export const getGuildValidation = (data: Object) => {

    // checking if ID is a String 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required()
    })
    return schema.validate(data);
}

/**
 * Validation for Discord Guild Member
 * @param {Object} data
 *
 * @alpha
 */
export const getGuildMemberValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required(),
        userid: Joi.string().required()
    });
    return schema.validate(data);
}

/**
 * Validation for Discord Guild Member and Role
 * @param {Object} data
 *
 * @alpha
 */
 export const removeGuildMemberRoleValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required(),
        userid: Joi.string().required(),
        roleid: Joi.string().required()
    });
    return schema.validate(data);
}

/**
* Validation for Adding Role to a Discord Guild Member
* @param {Object} data
*
* @alpha
*/
export const addGuildMemberRoleValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required(),
        userid: Joi.string().required(),
        roleid: Joi.string().required()
     });
    return schema.validate(data);
 }

 /**
 * Validation for Modify Discord Guild Member
 * @param {Object} data
 *
 * @alpha
 */
  export const modifyGuildMemberValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        nick: Joi.string(),
        roles: Joi.string(),
        mute: Joi.boolean(),
        channel_id: Joi.string()
    });
    return schema.validate(data);
 }
 

 /**
 * Validation for 
 * @param {Object} data
 *
 * @alpha
 */
  export const createGuildBan = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        days: Joi.string(),
        reason: Joi.string(),
    });
    return schema.validate(data);
 }