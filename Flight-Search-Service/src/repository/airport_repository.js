const { Airport,City } = require("../models/index");
const { Op } = require("sequelize")
async function createAirport(data) {
    try {
        const airports = await Airport.create(data);
        return airports;
    } catch (error) {
        console.log("Got error in repo of airports")
    }
}
async function updateAirport(airportId, data) {
    try {
        const airport = await Airport.findByPk(airportId);
        airport.name = data.name;
        await airport.save();
        return airport;
    } catch (error) {
        console.log("Got error in repo of updatecity")
    }
}
async function airportsOfCity(cityid) {
    try {
        const airports = await Airport.findAll({
             where: {
                cityId: cityid
            },
            include: [{ 
                    model: City
                }]
        })
        return airports;
    } catch (error) {
        console.log("Got error in repo of airportsOfCity")
    }
}
async function deleteAirport(airportId) {
    try {
        await Airport.destroy({
            where: {
                id: airportId
            }
        })
        return true;
    } catch (error) {
        console.log("Got error in repo of delete city")
    }
}
async function getAirport(airportId) {
    try {
        const airport = await Airport.findAll({
            where: {
                id: airportId
            }
        })
        return airport;
    } catch (error) {
        console.log("Got error in repo of getairport")
    }
}
async function getAllAirports(filter) {
    try {
        const airports = await Airport.findAll({
            where: {
                Name: {
                    [Op.startsWith]: filter.name
                }
            }
        })
        return airports;
    } catch (error) {
        console.log("Got error in repo of getallcities")
    }
}
module.exports = {
    createAirport, updateAirport, deleteAirport, getAirport, getAllAirports, airportsOfCity
}