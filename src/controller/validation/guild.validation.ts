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
 * Validation for Discord Guild Modification
 * @param {Object} data
 *
 * @alpha
 */
 export const modifyGuildValidation = (data: Object) => {

    const schema: Schema = Joi.object({
        name: Joi.string(),
        region: Joi.string(),
        verification_level: Joi.number(),
        default_message_notifications: Joi.number(),
        explicit_content_filter: Joi.number(),
        afk_channel_id: Joi.number(),
        afk_timeout: Joi.number(),
        icon: Joi.string(),
        splash: Joi.string(),
        discovery_splash: Joi.string(),
        banner: Joi.string(),
        system_channel_id: Joi.number(),
        system_channel_flags: Joi.number(),
        rules_channel_id: Joi.number(),
        public_updates_channel_id: Joi.number(),
        preferred_locale: Joi.string(),
        description: Joi.string(),
    })
    return schema.validate(data);
}

/**
 * Validation for creating Discord Guild Channel
 * @param {Object} data
 *
 * @alpha
 */
 export const createGuildChannelValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        name: Joi.string().required(),
        type: Joi.number(),
        topic: Joi.string(),
        bitrate: Joi.number(),
        user_limit: Joi.number(),
        rate_limit_per_user: Joi.number(),
        position: Joi.number(),
        permission_overwrites: Joi.array(),
        parent_id: Joi.number(),
        nsfw: Joi.boolean()
    });
    return schema.validate(data);
}

/**
 * Validation for modifying Discord Guild Position
 * @param {Object} data
 *
 * @alpha
 */
 export const modifyGuildChannelPositionsValidation = (data: Object) => {

    const schema: Schema = Joi.object({
        id: Joi.string().required(),
        position: Joi.string(),
        lock_permissions: Joi.boolean(),
        parent_id: Joi.string(),
    });
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
 * Validation for creating a Guild Ban
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

/**
 * Validation for creating Discord Guild Role
 * @param {Object} data
 *
 * @alpha
 */
 export const createGuildRoleValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        name: Joi.string(),
        permissions: Joi.string(),
        color: Joi.number(),
        hoist: Joi.boolean(),
        mentionable: Joi.boolean(),
    });
    return schema.validate(data);
}

/**
 * Validation for modifying the Position of a Discord Guild Role
 * @param {Object} data
 *
 * @alpha
 */
 export const modifyGuildRolePositionsValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        id: Joi.string(),
        position: Joi.string(),
    });
    return schema.validate(data);
}

/**
 * Validation for modifying a Discord Guild Role
 * @param {Object} data
 *
 * @alpha
 */
 export const getGuildRoleValidation = (data: Object) => {

    // checking if both IDs are Strings 
    const schema: Schema = Joi.object({
        guildid: Joi.string().required(),
        roleid: Joi.string().required(),
    });
    return schema.validate(data);
}