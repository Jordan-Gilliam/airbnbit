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

    });

    return Booking;
};
