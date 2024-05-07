import pkg from 'pg'
import dotenv from "dotenv"
const { Pool } = pkg 

dotenv.config()

const pool = new Pool({
    user:process.env.DB_USERNAME,
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

const db_connect = async() => {
    try {
        let client = await pool.connect()
        console.log('Postgreasql ga ulandi');
        return client
    } catch (error) {
        console.log(error);
    }
}

export default {
    db_connect
}