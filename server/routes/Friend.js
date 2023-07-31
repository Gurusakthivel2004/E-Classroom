import User from "../models/User.js"

export const isFriend = async (req, res) => {
  try {
    const { currentUser, requestedUser} = req.body;
    const user = await User.findOne({username: currentUser})
    let ans = user.friends.find(users => users === requestedUser)
    res.status(201).json(ans === undefined ? false : true)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const addFriend = async (req, res) => {
    try {
        const { currentUser, requestedUser} = req.body;
        const user = await User.findOne({username: currentUser})
        const req_user = await User.findOne({username: requestedUser})
        let ans = user.friends.find(users => users === requestedUser)
        if(ans) res.status(201).json('You both are already friends')
        else {
          user.friends.push(requestedUser)
          req_user.friends.push(currentUser)
          await user.save()
          await req_user.save()
          res.status(201).json('Added successfully')
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const removeFriend = async (req, res) => {
  try {
      const { currentUser, requestedUser} = req.body;
      const user = await User.findOne({username: currentUser})
      const req_user = await User.findOne({username: requestedUser})
      let ans = user.friends.findIndex(users => users === requestedUser)
      let ans2 = req_user.friends.findIndex(users => users === currentUser)
      user.friends.splice(ans,1)
      req_user.friends.splice(ans2,1)
      await user.save()
      await req_user.save()
      res.status(201).json('Removed successfully')
  } catch (error) {
      res.status(500).json({error: error.message})
  }
}

export const GetFriends = async (req, res) => {
  try {
    const { username } = req.body
    const userData = await User.findOne({username : username})
    if(userData === null) res.status(201).json('No user found') 
    else res.status(201).json(userData)
  } catch (error) {
    res.status(500).json({error : error.message})
  }
}

export const GetFriendsData = async (req, res) => {
  try {
    const username = req.header("username");
    let data = []
    const userData = await User.findOne({username : username})
    if(userData === null) res.status(201).json('No user found') 
    else {
      await Promise.all(
        userData.friends.map(async friend => {
          const friendData = await User.findOne({username : friend})
          if(friendData) data.push(friendData)
        }))
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json({error : error.message})
  }
}