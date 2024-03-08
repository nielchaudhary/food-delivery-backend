const deliveryAgent = require('../../model/deliveryAgent.model')


const createNewAgent = async(req,res) =>{
    const {name, availability} = req.body

    try{

        const existingAgent = await deliveryAgent.findOne({name})
        if(existingAgent){
            return res.status(400).send('Delivery Agent already exists.')
        }

        const newAgent = new deliveryAgent({name, availability})

        await newAgent.save();
        return res.status(201).send({"Delivery Agent Created":newAgent})




    }catch(error){
        console.log(error)
        return res.status(500).send('Something went wrong.')
    }
}

module.exports = createNewAgent