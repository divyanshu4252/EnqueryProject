import express from 'express'

const router = express.Router()
import homeController from '../controllers/homeController.js'

router.get("/", (req,res)=>{
    res.send("work")
})
router.post("/create-enquiry", homeController.createEnquiry)

router.get("/all-enquiries", homeController.getAllDoc)

router.put("/update-enquiry/:id", homeController.updateDocById)

router.delete("/delete-enquiry/:id", homeController.deleteDocById)

export default router

