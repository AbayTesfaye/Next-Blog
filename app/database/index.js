import mongoose from "mongoose";

const connectToDB = async () => {
    const connectUrl = "mongodb+srv://abaytesfaye02:<(Eeyban02)@mom>@cluster0.qknj0.mongodb.net/"

    mongoose.connect(connectUrl).then(()=>console.log("blog database connection is succussfull")).catch(()=>console.log(error));
}
export default connectToDB;