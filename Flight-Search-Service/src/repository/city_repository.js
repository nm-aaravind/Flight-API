const {Op, QueryInterface}=require("sequelize");
const { City }=require("../models/index.js")
async function createCity(data){
    try{
        const city=await City.create(data);
        return city;
    } catch(error){
        console.log("Got error in repo of createCity");
    }
}
async function getAllCities(filter){
    try {
        console.log(filter.Name);
        if(filter.Name){
            console.log(filter.Name)
            const cities=await City.findAll({
                // attributes:['id','Name','createdAt','updatedAt'],
                where:{
                    Name:{
                        [Op.startsWith]:filter.Name
                    }
                }
            })
            return cities;
        }
        const cities=await City.findAll({
            // attributes:['id','Name','createdAt','updatedAt']
        });
        return cities;
    } catch (error) {
        console.log("Got error in repo of getAllCities")
    }
}

async function createMany(data){
    try {
        const cities=await City.bulkCreate(data)
        return cities;
    } catch (error) {
        console.log("Got error in repo of create many")
    }
}
async function updateCity(cityId,data){
    try{
        //The below method doesnt return the object, hence altered code is written below
        // const object=await City.update(data,{
        //     where:{
        //         id:cityId
        //     }
        // })
        // return object;
        const city=await City.findByPk(cityId,{
            // attributes:['id','Name','createdAt','updatedAt']
        });
        city.Name=data.Name;
        await city.save();
        return city;
    }catch(error){
        console.log("Got error in repo of updateCity")
    }
}
async function getCity(cityId){
    try{
        const object=await City.findByPk(cityId,{
            // attributes:['id','Name','createdAt','updatedAt'],
        });
        return object;
    }catch(error){
        console.log("Got error in repo of findCity")
    }
}
async function deleteCity(cityId){
    try{
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;
    } catch(error){
        console.log("Got error in repo of deleteCity")
    }
}
module.exports={
    createCity,deleteCity,updateCity,getCity,getAllCities,createMany
}