//this is a table. var homeListings is the name of the table
//columns are from the host.html page

//association joins (belongsTo and HasMany) go in the model 

module.exports = function(sequelize, DataTypes) {

    var HomeListing = sequelize.define("HomeListing", {
        listName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [10, 40]
            }
        },
        listEmail: {
            type: DataTypes.STRING(40),
            allowNull: false,
            isEmail: true,
            validate: {
                len: [6, 40]
            }
        },
        listAddress: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [10, 40]
            }
        },
        listCity: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [10, 40]
            }
        },
        listState: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                len: [2, 4]
            }
        },
        listZip: {
            type: DataTypes.STRING(12),
            allowNull: false,
            validate: {
                len: [5, 12]
            }
        },
        listPhone: {
            type: DataTypes.STRING(15),
            allowNull: false,
            validate: {
                len: [10, 20]
            }
        },
        listTax: {
            type: DataTypes.STRING(30),
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
                len: [10, 255]
            }
        },
        listRate: {
            type: DataTypes.STRING(20),
            }
    });
    
    HomeListing.associate = function(models) {
        // This will add the user id to the homeListing
        // The foreign key added to the homeListing is the user id.
        HomeListing.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        // This will add the homeListing id to the booking
        // Each listing can have many bookings, but only one listing to a booking
        // The foreign key added to the booking is the homeListing id.
        HomeListing.hasMany(models.Booking, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return HomeListing;
};
// We will add the rate after
// we take the rest of the information
// and agree with the lister on the rate.
// NEEDS TO BE DONE

 