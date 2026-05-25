const express = require("express")
const router= express.Router()
const {registerAuth,loginAuth,logoutAuth}  = require("../controller/auth.controller")
router.post("/register",registerAuth )
router.post("/login",loginAuth)
router.get("/logout", logoutAuth)

module.exports =router