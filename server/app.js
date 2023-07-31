import express from 'express';
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";
import { login,register } from './routes/SignIn.js';
import { CreateGroup, Getgroupdata, JoinGroup, GroupPost, GetGroupPost } from './routes/Group.js'
import { GetUserData } from './routes/UserData.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { postNote, getNotes, editNotes, deletenote } from './routes/Notes.js';
import { verifyToken } from './routes/auth.js';
import { isFriend, addFriend, GetFriends, removeFriend, GetFriendsData } from './routes/Friend.js';
import { CreatePost, FetchPosts, UpdateLikes, UpdateDislikes, postComment, getcomments } from './routes/Post.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uri = "mongodb+srv://gurusakthivel:leomessi@cluster0.eh5ckp9.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
/* CORS */
app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.use('/public', express.static(__dirname + '/public'));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage});
/* ROUTES */
app.post("/register",upload.single("picture"),register)
app.post("/login",login)
app.post("/createGroup",verifyToken,CreateGroup) 
app.post("/getuserdata",verifyToken,GetUserData) 
app.post("/isFriend",verifyToken,isFriend)
app.get('/getcomments',verifyToken,getcomments)
app.post("/addFriend",verifyToken,addFriend) 
app.post("/removeFriend",verifyToken,removeFriend)
app.post("/addPost",verifyToken,upload.single("picture"),CreatePost) 
app.get('/getNotes',verifyToken,getNotes)
app.post("/getgroupdata",verifyToken,Getgroupdata)
app.post("/joingroup",verifyToken,JoinGroup) 
app.post('/grouppost',verifyToken,upload.single('picture'),GroupPost) 
app.post('/getgroupposts',verifyToken,GetGroupPost)  
app.post('/getposts',verifyToken,FetchPosts) 
app.get('/getfriendsdata',verifyToken,GetFriendsData)
app.post('/getfriends',verifyToken,GetFriends) 
app.post('/updateLikes',verifyToken,UpdateLikes) 
app.post('/updatedisLikes',verifyToken,UpdateDislikes) 
app.delete('/deletenote',verifyToken,deletenote);
app.post('/postNotes',verifyToken,postNote)
app.post('/editNotes',verifyToken,editNotes)
app.post("/postComment",verifyToken,postComment)


/* CONNECTION */
const PORT = process.env.PORT || 6001;
mongoose.connect("mongodb://127.0.0.1:27017/classroom").then(() => {
    app.listen(PORT, () => console.log(`⚡️Server is running at http://localhost:${PORT}`));
}).catch((error) => console.log(error + " did not connect"));

// async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       app.listen(PORT, () => console.log(`⚡️Server is running at http://localhost:${PORT}`));
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
// run().catch(console.dir);