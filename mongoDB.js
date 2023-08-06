const mongodb=require("mongoose");


mongodb.connect("mongodb+srv://IPProject:pass0912@aidassistant.qryst9g.mongodb.net/AidAssistant")
.then(()=> {
    console.log("mongo connected");
})
.catch(()=> {
    console.log("mongo not connected");
})
