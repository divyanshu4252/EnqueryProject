import enquiryModel from "../models/enquiry.js";

class homeController{
    static async createEnquiry(req, res){
        try {
            const result = await enquiryModel.create(req.body);
            console.log(req.body)
            // result.save()
            res.status(201).send({success: true, message: result}) 
            
        } catch (error) {
            console.log(error)
            res.status(400).send("Error")
        }
    }
    static async getAllDoc (req,res){
        try{
            const result = await enquiryModel.find()
            //console.log(result)
            res.status(200).send({success: true, message: result})
        }catch(error){
            console.log(error)
            res.status(400).send("Error")
        }
    }
    static async updateDocById (req,res){
        //console.log(req.params.id)
        //console.log(req.body)
        try{
            const result = await enquiryModel.findByIdAndUpdate(req.params.id, req.body)
            //console.log(result)
            res.status(201).send({success: true, message: result})
        } catch(error){
            console.log(error)
            res.status(400).send("Error")
        }
    }
    static async deleteDocById (req,res){
        //console.log(req.params.id)
        try{
            const result = await enquiryModel.findByIdAndDelete(req.params.id)
            console.log(result)
            res.status(204).send({success: true, message: result})

        } catch(error){
            console.log(error)
            res.status(400).send("Error")
        }
    }
    static async getSingleDoc (req,res){
        try{
            console.log(req.params)
            const result = await enquiryModel.find({sName:req.params.sName},'sName dateOfEnquiry course status email mobile')
            //console.log(result)
            res.status(200).send({success: true, message: result})
        }catch(error){
            console.log(error)
            res.status(400).send("Error")
        }
    }
}

export default homeController