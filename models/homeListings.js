//this is a table.. var homeListings is the name of the table
//columns are name and price

//association joins (belongsTo and HasMany) go in the model 

module.exports = function(sequelize, DataTypes) {

    var HomeListing = sequelize.define("HomeListing", {
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
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 300]
            }

        }
    });

    HomeListing.associate = function(models) {
        HomeListing.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return HomeListing;
};
