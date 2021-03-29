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

