//this is a table.. var homeListings is the name of the table
//columns are name and price

module.exports = function(sequelize, DataTypes) {

    var homeListings = sequelize.define("homeListings", {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    });
    return homeListings;
};
