import { connect } from "mongoose"; 

export const dbConnect = async () => {
    const DB_URI = process.env.DB_URI || ''
    await connect(DB_URI)
}