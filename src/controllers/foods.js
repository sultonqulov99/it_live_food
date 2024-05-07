import config from '../config/db.js'
const GET = async(req,res,next) => {
    try {
        const client = await config.db_connect()

        let foods = await client.query("SELECT * FROM foods")

        return res.status(200).json({
            status:200,
            message: "Barcha ta'omlar",
            data:foods.rows
        })
        
    } catch (error) {
        console.log(error);
    }
}

export default {
    GET
}