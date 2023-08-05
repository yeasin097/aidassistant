const mongodb=require("mongoose");
mongodb.connect("mongodb+srv://IPProject:pass0912@aidassistant.gro8fs0.mongodb.net/AidAssistant")
.then(()=> {
    console.log("mongo connected");
})
.catch(()=> {
    console.log("mongo not connected");
})
