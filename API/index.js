const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('Welcome To Student API');
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/members',async(req,res)=>{
    try{
        const result = await pool.query('select * from members');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/authors',async(req,res)=>{
    try{
        const result = await pool.query('select * from authors');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/publishers',async(req,res)=>{
    try{
        const result = await pool.query('select * from publishers');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/categories',async(req,res)=>{
    try{
        const result = await pool.query('select * from categories');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/books',async(req,res)=>{
    try{
        const result = await pool.query('select * from books');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/staff',async(req,res)=>{
    try{
        const result = await pool.query('select * from staff');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/borrow',async(req,res)=>{
    try{
        const result = await pool.query('select * from borrow');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/fines',async(req,res)=>{
    try{
        const result = await pool.query('select * from fines');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/reservations',async(req,res)=>{
    try{
        const result = await pool.query('select * from reservations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/returns',async(req,res)=>{
    try{
        const result = await pool.query('select * from returns');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully.....Running on Port ${PORT}`)
});

