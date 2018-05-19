exports = module.exports = function (done) {
    new User.model({
        name: { first: 'Admin', last: 'User' },
        password: 'admin',
        isAdmin: true
    }).save(done);
};