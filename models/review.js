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
    },
    feminineProducts: {
      type: DataTypes.BOOLEAN,
    },
    genderNeutral: {
      type: DataTypes.BOOLEAN,
    },
    toiletPaper: {
      type: DataTypes.BOOLEAN,
    },
    multipleStalls: {
      type: DataTypes.BOOLEAN,
    },
    airDryer: {
      type: DataTypes.BOOLEAN,
    },
    fancy: {
      type: DataTypes.BOOLEAN,
    },
    familyFriendly: {
      type: DataTypes.BOOLEAN,
    },
    motionSensors: {
      type: DataTypes.BOOLEAN,
    },
    handTowels: {
      type: DataTypes.BOOLEAN,
    },
    handSoap: {
      type: DataTypes.BOOLEAN,
    },
    clean: {
      type: DataTypes.BOOLEAN,
    },
    keyRequired: {
      type: DataTypes.BOOLEAN,
    },
    payingCustomer: {
      type: DataTypes.BOOLEAN,
    },
    review: {
      type: DataTypes.STRING,
    },
  });
  return Review;
};
