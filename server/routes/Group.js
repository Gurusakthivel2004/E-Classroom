import Group from "../models/Group.js"
import User from "../models/User.js";

export const CreateGroup = async (req, res) => {
  try {
    const { username, group_name, group_description } = req.body;
    const newGroup = new Group({ leader: username, group_name, posts: [],members: [username], group_description });
    const userData = await User.findOne({username: username})
    userData.groups.push(group_name)
    userData.save()
    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const Getgroupdata = async (req, res) => {
  try {
    const {group_data} = req.body
    let data = []
    await Promise.all(group_data.map(async name => {
      const grp_data = await Group.findOne({group_name: name})
      if(grp_data) data.push(grp_data)
    }))
    res.status(201).json(data)
  } catch (error) {
    res.status(501).json({error: error.message})
  }
}

export const JoinGroup = async (req, res) => {
  const {name, group_name} = req.body
  try {
      const grp = await Group.findOne({group_name: group_name})
      const user = await User.findOne({username: name})
      if(grp.members.includes(name)) res.status(201).json('You are already in that group')
      else if(grp && user){
        grp.members.push(name)
        user.groups.push(group_name)
        grp.save()
        user.save()
        res.status(201).json('Joined successfully')
      } else res.status(201).json('Group doesnt exist')
  } catch (error) {
      res.status(501).json(error.message)
  }
}

export const GroupPost = async (req, res) => {
    try {
      const {message, grp_name, username, date, profile} = req.body
      let picturePath = ''; 
      if (req.file) {
        picturePath = req.file.path;
      }
      const data = {
        username: username,
        picturePath: picturePath,
        message: message,
        profile: profile,
        date: date
      }
      const grp = await Group.findOne({group_name: grp_name})
      if(grp){
        grp.posts.push(data)
        grp.save()
        res.status(201).json(data)
      } else res.status(201).json('Group does not exist')
    } catch (error) {
        res.status(501).json(error)
    }
}

export const GetGroupPost = async (req, res) => {
    try {
      const {group_name} = req.body
      const grp = await Group.findOne({group_name: group_name})
      if(grp){
        res.status(201).json(grp.posts)
      } else res.status(201).json('Group does not exist')
    } catch (error) {
        res.status(501).json(error)
    }
}