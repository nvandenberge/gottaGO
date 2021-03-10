----- CREATING 'gottaGO' DATABASE -----
DROP DATABASE IF EXISTS gottaGO_DB;

CREATE DATABASE gottaGO_DB;

USE gottaGO_DB;

----- USERS TABLE -----
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

----- REVIEWS TABLE -----
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    locationName VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip VARCHAR(5) NOT NULL,
    changingStation BOOLEAN,
    feminineProducts BOOLEAN,  
    genderNeutral BOOLEAN,  
    toiletPaper BOOLEAN,  
    multipleStalls BOOLEAN,  
    airDryer BOOLEAN,  
    fancy BOOLEAN,  
    familyFriendly BOOLEAN,  
    motionSensors BOOLEAN,  
    handTowels BOOLEAN,  
    handSoap BOOLEAN,  
    clean BOOLEAN,  
    keyRequired BOOLEAN,  
    payingCustomer BOOLEAN,  
    review TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES user(id) ON DELETE CASCADE
);