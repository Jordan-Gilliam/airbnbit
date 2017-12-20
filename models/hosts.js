//this is a table.. var homeListings is the name of the table
//columns are name and price

module.exports = function(sequelize, DataTypes) {

    var HomeListings = sequelize.define("HomeListings", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 100]
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
            // validate: {
            // }
        }
    });
    return HomeListings;
};
