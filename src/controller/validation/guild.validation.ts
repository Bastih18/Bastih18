import Joi, {Schema} from '@hapi/joi';


/**
 *  Validation for Discord Guild
 * @param data
 */
export const getGuildValidation = (data: Object) => {

    // checking if ID is a String 
    const schema: Schema = Joi.object({
        id: Joi.string().required()
    })
    return schema.validate(data);
}