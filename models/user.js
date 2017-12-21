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

    //associate user with homelistings and booking. 
    //If a user is deleted, then all of the listings and bookings from that user will be deleted

    User.associate = function(models) {
        User.hasMany(models.HomeListing, {
            onDelete: "cascade"
        });
        User.hasMany(models.Booking, {
            onDelete: "cascade"
        });
    };
    return User;
};
