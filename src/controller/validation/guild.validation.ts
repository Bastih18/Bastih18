import Joi, {Schema} from '@hapi/joi';


/**
 *  Validation for Discord Guild
 * @param data
 */
export const getGuildValidation = (data: Object) => {

    // checking if ID is a String 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required()
    })
    return schema.validate(data);
}

export const getGuildMemberValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required(),
        userid: Joi.string().required()
    });
    return schema.validate(data);
}