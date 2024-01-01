const express = require('express');

const Employee = require('../models/Employee');
const app = express();

app.use(express.json());


//show all employees
const index = (req,res,next)=>{   
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message : 'An error Occured!'
        })
    })
}


//show single employee
// const show = (req,res,next)=>{
//     let employeeID = req.body.employeeID;
//     Employee.findById(employeeID)
//     .then(response=>{
//         res.json({
//             response
//         })
//     })
//     .catch(error=>{
//         res.json({
//             message : 'An error Occured!'
//         })
//     })
// }

//show single employee by id
const show = (req, res, next) => {
    let employeeID = req.body.id;
    Employee.findById(employeeID)
        .then(response => {
            if (response) {
                // Employee found, send the data
                res.json({
                    response
                });
            } else {
                // No employee found
                res.status(404).json({
                    message: 'Employee not found'
                });
            }
        })
        .catch(error => {
            // Handle other errors
            res.status(500).json({
                message: 'An error occurred!'
            });
        });
};


//store employee
const store = (req,res,next)=>{
    console.log('Request Body:', req.body);
    let employee = new Employee({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age
    })
    employee.save()
    .then(response=>{
        res.json({
            message : 'Employee Added Successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message : 'An error Occured!'
        })
    })
}

//update employee
const update = (req,res,next)=>{
    let employeeID = req.body.id;
    console.log('Update Employee',employeeID);
    let updatedData = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age
    }

    Employee.findByIdAndUpdate(employeeID,{$set : updatedData})
    .then(()=>{
        res.json({
            message : 'Employee Updated Successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message : 'An error Occured!'
        })
    })
}

//delete employee
const destroy = (req,res)=>{
    let employeeID = req.params.id;
    console.log('Delete Employee',employeeID);    
    Employee.findByIdAndDelete(employeeID)
    .then(()=>{
        res.json({
            message : 'Employee Deleted Successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message : 'An error Occured!'
        })
    })
}

module.exports = {
    index,show,store,update,destroy

}