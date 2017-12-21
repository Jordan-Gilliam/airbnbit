//user table

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 100]
            }
        },
        userbio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 300]
            }
        },
    });
    return User;
};
