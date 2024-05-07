import config from '../config/db.js'


const GET = async (req,res,next) => {
    try {
        const client = await config.db_connect()
        let users =await client.query("select * from users")
        return res.status(200).json({
            status:200,
            message:"Barcha userlar",
            data:users.rows
        })
    } catch (error) {
        console.log(error);
    }
}

const REGISTER = async(req,res,next) => {
    try {
        const { username, contact } = req.body
        const client = await config.db_connect()

        if(!contact || !(/^998(9[012345789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){
            return res.status(402).json({
                status:402,
                message:"Telefon nomer hato"
            })
        }

        let result = await client.query(`INSERT INTO users(username,contact) VALUES($1,$2) RETURNING *`,
        [username,contact])
        
        return res.status(201).json({
            status:201,
            message:"User qo'shildi",
            data:result.rows
        })
    } catch (error) {
        console.log(error);
    }
}

const GET_ORDERS = async(req,res,next) => {
    try {
        let { userId } = req.params
        const client = await config.db_connect()

        let orders = await client.query(`select * from orders 
        inner join users u on u.user_id = orders.user_id
        inner join foods f on f.food_id = orders.food_id
        where orders.user_id = ${userId}`)

        return res.status(200).json({
            status: 200,
            message:'zakazlar',
            data: orders.rows
        })
    } catch (error) {
        console.log(error);
    }
}
export default {
    GET,
    REGISTER,
    GET_ORDERS
}