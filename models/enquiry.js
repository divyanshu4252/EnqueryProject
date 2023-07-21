import mongoose from 'mongoose'

const Enquiry = new mongoose.Schema({
    sName: {type:String,required:true},
    fName: {type:String,required:true},
    mName: {type:String,required:true},
    email: {type:String, unique: true},
    mobile: {type:Number,required:true},
    branch: {type:String,required:true},
    course: {type:String,required:true},
    dateOfEnquiry: {type:Date,required:true, default: Date.now},
    group: {type:String,required:true},
    status: {type:String,required:true},
    totalFee: {type:Number,required:true},
    discount: {type:Number,required:true},
    discountBy: {type:String,required:true},
    gender: {type:String,required:true},
    parentMobile: {type:Number,required:true},
    description: {type:String}
})
const enquiryModel = mongoose.model('enquiry',Enquiry)

export default enquiryModel 