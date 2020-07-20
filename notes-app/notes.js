const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicate = notes.find((note) => note.title === title)
    if (!duplicate) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note already taken!'))
    }

}

const saveNotes = (notes) => {
    const notesData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesData)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesAfterRemoval = notes.filter((note) => note.title !== title)
    if (notesAfterRemoval.length < notes.length) {
        console.log(chalk.green('Note removed!', title))
        saveNotes(notesAfterRemoval)
    } else {
        console.log(chalk.red('No note found!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your Notes'))
    notes.forEach((note) => console.log(chalk.blue(note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note)=>note.title === title)
    if(!foundNote){
        console.log(chalk.red("No note found!"))
    }else{
        console.log(chalk.green(foundNote.title))
        console.log(foundNote.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}