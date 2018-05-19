var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
    hidden: true,
    track: true,
    map: { name: 'search' },
    defaultSorts: '-updatedAt',
    searchFields: 'username search email',
    nodelete: true
});

User.add('Contact', {
    name: { type: String, initial: true, index: true, required: true },
    search: { type: String, hidden: true, default: 'User Information' },
    gender: { type: Types.Select, options: 'M, F, male, female', initial: true },
    dob: { type: Types.Date, initial: true },
    email: { type: Types.Email, index: true, initial: true },
    profile: { type: Types.Html, wysiwyg: true, height: 150, collapse: true },
    address: { type: Types.Location },
    timezone: {
        local: Boolean
    },
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true, initial: true, default: false, noedit: true },
    isProvider: { type: Boolean, label: 'is Provider', default: false, initial: true },
    createAccount: { type: Boolean, default: false },
    username: { type: String, initial: true, dependsOn: { createAccount: true } },
    password: { type: Types.Password, initial: true, dependsOn: { createAccount: true } },
})
/**
 * Registration
 */
User.defaultColumns = 'search, username, isAdmin, pdatedAt';
User.register();