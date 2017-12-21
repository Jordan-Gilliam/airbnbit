//bookings table 

module.exports = function(sequelize, DataTypes) {

    var Booking = sequelize.define("Booking", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 100]
            }
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    //need to associate Booking with homeListing and User

    Booking.associate = function(models) {
        Booking.belongsTo(models.HomeListing, {
            foreignKey: {
                allowNull: false
            }
        });
        Booking.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Booking;
};
