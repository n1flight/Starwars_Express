const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900,
        avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Master',
        forcePoints: 10000,
        age: 40,
        avatar: 'https://miro.medium.com/max/1838/1*cS-k9aZRfJ6JU9SGtI7BTw.jpeg',
        routeName: 'lukeSkywalker'
    },
    {
        name: 'Princess Leia',
        role: 'General Princess',
        forcePoints: 100,
        age: 40,
        avatar: 'https://api.time.com/wp-content/uploads/2016/12/carrie-fisher-movies-2.jpg?w=600&quality=85',
        routeName: 'princessLeia'
    }
]

app.get('/', (req, res) => {
    res.send('May the force be with you!')
})

app.get('/api/characters', (req, res) => {
    res.json(characters)
})

app.get('/api/characters/:routeName', (req, res) => {
    const targetCharacter = req.params.routeName


    const character = characters.find((character) => {
        console.log(character.routeName === targetCharacter)
        return false
    })
    

    res.end()
})


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})