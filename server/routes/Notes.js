import User from "../models/User.js"

export const postNote = async (req, res) => {
  try {
    const { username, title, description, date } = req.body;
    const user = await User.findOne({username: username})
    user.notes.push({title: title,description: description,date: date})
    user.save()
    res.status(201).json(user.notes)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getNotes = async (req, res) => {
    try {
        const username = req.header("username");
        const user = await User.findOne({username: username})
        res.status(201).json(user.notes)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const editNotes = async (req, res) => {
    try {
        const { username, title, description, date, olddescription } = req.body;
        const user = await User.findOne({username: username})
        if(user) {
            const index = user.notes.findIndex(note => note.description === olddescription)
            user.notes[index] = {title: title,description: description,date: date}
            await user.save()
            res.status(201).json(user.notes)
        } else res.status(201).json('no user found')
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deletenote = async (req, res) => {
    try {
        const { note, username } = req.body;
        console.log(note);
        const user = await User.findOne({username: username})
        if(user) {
            const index = user.notes.findIndex(n => n.description === note.description)
            user.notes.splice(index,1)
            await user.save()
            res.status(201).json(user.notes)
        } else res.status(201).json('no user found')
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}