var express = require("express");
var app=express();

app.use(express.json());

app.listen(1300);

app.get("/web", (req, res) =>{
    res.sendFile("web.html", {root: __dirname});
})
app.get("/web.html", (req, res) =>{
    res.sendFile("web.html", {root: __dirname});
})
app.get("/Menu.html", (req, res) =>{
    res.sendFile("Menu.html", {root: __dirname});
})

app.get("/Cart.html", (req, res) =>{
    res.sendFile("Cart.html", {root: __dirname});
})
app.get("/reservation.html", (req, res) =>{
    res.sendFile("reservation.html", {root: __dirname});
})
app.get("/contact.html", (req, res) =>{
    res.sendFile("contact.html", {root: __dirname});
})

app.post("/info", (req, res)=>{
    console.log(req.body);
    res.json({ message: "Reservation information received" });
});
app.post("/place-order", (req, res)=>{
    console.log(req.body);
    res.json({ message: "Order received successfully" });
});