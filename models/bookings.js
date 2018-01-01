//bookings table 

module.exports = function(sequelize, DataTypes) {

    var Booking = sequelize.define("Booking", {
        listId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        arriveDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        leaveDate: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });

    //need to associate Booking with homeListing and User

    Booking.associate = function(models) {
        // This will add the homeListing id to the booking 
        Booking.belongsTo(models.HomeListing, {
            foreignKey: {
                allowNull: false
            }
        });
        // This will add the user id (the guest) to the booking
        Booking.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Booking;
};
