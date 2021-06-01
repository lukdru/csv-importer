import express from 'express';
import mongoose from 'mongoose';

import PostData from '../models/postData.js';

const router = express.Router();

export const getAllData = async (req, res) => { 
    try {
        const postData = await PostData.find();
                
        res.status(200).json(postData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getData = async (req, res) => { 
    const { id } = req.params;

    try {
        const data = await PostData.findById(id);
        
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const importData = async (req, res) => {
    try {
        for (var i = 0; i < req.body.length; i++) {
            const companyName = req.body[i].data['Company Name'];
            const isinCode = req.body[i].data['Isin Code'];
            const recommendation = req.body[i].data['Recommendation'];
            const lastPrice = req.body[i].data['Last Price'];
            const targetPrice = req.body[i].data['Target Price'];
            const upside = req.body[i].data['Upside'];
            const country = req.body[i].data['Country'];
            const industry = req.body[i].data['Industry'];
            const freeFloat = req.body[i].data['Free Float%'];
    
            const newPostData = new PostData({ companyName, isinCode, recommendation, lastPrice, targetPrice, upside, country, industry, freeFloat });
            await newPostData.save();
        }
        res.status(201).json(newPostData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    } 
}

export const updateData = async (req, res) => {
    const { id } = req.params;
    
    const companyName = req.body.data['Company Name'];
    const isinCode = req.body.data['Isin Code'];
    const recommendation = req.body.data['Recommendation'];
    const lastPrice = req.body.data['Last Price'];
    const targetPrice = req.body.data['Target Price'];
    const upside = req.body.data['Upside'];
    const country = req.body.data['Country'];
    const industry = req.body.data['Industry'];
    const freeFloat = req.body.data['Free Float%'];

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`);

    const updatedData = { companyName, isinCode, recommendation, lastPrice, targetPrice, upside, country, industry, freeFloat, _id: id };

    await PostData.findByIdAndUpdate(id, updatedData, { new: true });

    res.json(updatedData);
}

export const deleteData = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`);

    await PostData.findByIdAndRemove(id);

    res.json({ message: "Data deleted successfully." });
}

export default router;