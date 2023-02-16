import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectionDB = async () => {
	const db = await mongoose.connect(process.env.MONGODB_URI);
	console.log(`Success connect to ${db.connection.name}`);
};

export default connectionDB;
