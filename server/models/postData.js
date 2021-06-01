import mongoose from 'mongoose';

const dataSchema  = mongoose.Schema({
    companyName: String,
    isinCode:String,
    recommendation: String,
    lastPrice: String,
    targetPrice: String,
    upside: String,
    country: String,
    industry: String,
    freeFloat: String,
})

var PostData  = mongoose.model('CompanyData', dataSchema);

export default PostData;