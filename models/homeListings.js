//this is a table. var homeListings is the name of the table
//columns are from the host.html page

//association joins (belongsTo and HasMany) go in the model 

module.exports = function(sequelize, DataTypes) {

    var HomeListing = sequelize.define("HomeListing", {
        listName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 40]
            }
        },
        listEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            validate: {
                len: [6, 40]
            }
        },
        listAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 40]
            }
        },
        listCity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 40]
            }
        },
        listState: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 4]
            }
        },
        listZip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 12]
            }
        },
        listPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 20]
            }
        },
        listTax: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 25]
            }
        },
        listPhoto1: {
            type: DataTypes.BLOB,
            allowNull: false,
            // validate: {
            //     len: [2, 4]
            // }
        },
        listPhoto2: {
            type: DataTypes.BLOB,
            allowNull: false,
            // validate: {
            //     len: [2, 4]
            // }
        },
        listPhoto3: {
            type: DataTypes.BLOB,
            allowNull: false,
            // validate: {
            //     len: [2, 4]
            // }
        },
        listDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 300]
            }
        },
        listRate: {
            type: DataTypes.STRING,
            }
    });
    return HomeListing;
};
// We will add the rate after
// we take the rest of the information
// and agree with the lister on the rate.
