// Libraries
import express from "express";
import passport from "passport";

// Database model
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /list
Des       Get all menu based on id
Params    _id
Access    Public
Method    GET 
*/

Router.get("/list/:id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findOne(_id);
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /image
Des       Get all images based on id
Params    _id
Access    Public
Method    GET 
*/

Router.get("/image/:id", (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});