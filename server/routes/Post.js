import Post from "../models/Post.js"
import User from "../models/User.js"

export const CreatePost = async (req, res) => {
  try {
    const { username, caption, userPicture } = req.body;
    let picturePath = ''; 
    if (req.file) {
      picturePath = req.file.path;
    }
    const data = {
        username : username,
        caption: caption,
        userPicture: userPicture,
        picturePath: picturePath,
        likes: [],
        comments: []
    }
    const Posts = await Post.findOne({ id: "1"});
    const userData = await User.findOne({username : username})
    userData.posts.push(data)
    userData.save()
    Posts.posts.push(data)
    Posts.save()
    res.status(201).json(Posts.posts)
  } catch (err) {
    res.status(500).json({message: "error"});
  }
};

export const FetchPosts = async (req, res) => {
  try {
    const { id } = req.body
    const posts = await Post.findOne({id: id})
    if(posts) res.status(201).json(posts.posts)
    else res.status(201).json('No posts yet')
  } catch (error) {
    res.status(501).status(error)
  }
}

export const UpdateLikes = async (req, res) => {
  try {
    const { username, post } = req.body;
    const postData = await Post.findOne({ id: "1" });
    postData.posts.forEach(p => {
      if (post._id === p._id.toString()) {
        if (!p.likes.includes(username)) {
          p.likes.push(username);
        }
      }
    });
    await postData.save(); 
    res.status(200).json(postData.posts);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
}



export const UpdateDislikes = async (req, res) => {
  try {
    const { username, post } = req.body;
    const postData = await Post.findOne({ id: "1" });
    postData.posts.forEach(p => {
      if (post._id === p._id.toString()) {
        const index = p.likes.indexOf(username);
        if (index !== -1) {
          p.likes.splice(index, 1);
        }
      }
    });
    await postData.save(); 
    res.status(200).json(postData.posts);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
}

export const postComment = async (req, res) => {
  try {
    const { comment, post, picture } = req.body;
    const postData = await Post.findOne({ id: "1" });
    const index = postData.posts.findIndex(pos => pos.caption === post.caption)
    postData.posts[index].comments.push({
      username: post.username,
      picturePath: picture,
      comment: comment
    })
    await postData.save(); 
    res.status(200).json(postData.posts);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
}

export const getcomments = async (req, res) => {
  try {
    const post = req.header('currentpost')
    const postData = await Post.findOne({ id: "1" });
    const index = postData.posts.findIndex(pos => pos.caption === post)
    res.status(200).json(postData.posts[index].comments);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
}