import config from '../config/db.js'
const ORDERS = async(req,res,next) => {
    try {
        const client = await config.db_connect()
        let {user_id,food_id,count} = req.body 

        if(!count || count > 10 || count <= 0){
            return res.status(402).json({
                status: 402,
                message:"count noto'g'ri kiritildi"
            })
        }

        let result = await client.query(`INSERT INTO orders(user_id,food_id,count) VALUES($1,$2,$3) RETURNING *`,
        [user_id,food_id,count])

        if(result.rows){
            return res.status(201).json({
                status:201,
                message:"Zakas qo'shildi",
                data:result.rows
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    ORDERS
}