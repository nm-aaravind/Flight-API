class crudService{
    constructor(repository){
        this.repository=repository;
    }
    async create(data){
        try {
            const result=await this.repository.create(data)
            return result;
        } catch (error) {
            console.log("Got error in crud service")
        }
    }
    async destory(modelId){
        try {
            await this.repository.destroy(modelId);
            return true;
        } catch (error) {
            console.log("Got error in crud service")
        }
    }
    async get(modelId){
        try {
            const result=await this.repository.get(modelId)
            return result;
        } catch (error) {
            console.log("Got error in crud service")
        }
    }
    async getAll(){
        try {
            const result=await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Got error in crud service")
        }
    }
    async update(){
        try {
            
        } catch (error) {
            console.log("Got error in crud service")
        }
    }
}
module.exports=crudService;