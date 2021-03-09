import Joi, {Schema} from '@hapi/joi';


/**
 *
 * @param data
 */
export const getGuildValidation = (data: Object) => {

    const schema: Schema = Joi.object({
        id: Joi.string().required()
    })
    return schema.validate(data);
}