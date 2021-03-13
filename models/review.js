// Creating our Review model
module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    changingStation: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    feminineProducts: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    genderNeutral: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    toiletPaper: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    multipleStalls: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    airDryer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fancy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    familyFriendly: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    motionSensors: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    handTowels: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    handSoap: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    clean: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    keyRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    payingCustomer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    review: {
      type: DataTypes.STRING,
    },
    starRating: {
      type: DataTypes.INTEGER,
    }
  });
  return Review;
};
