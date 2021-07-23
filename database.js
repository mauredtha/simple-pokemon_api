var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE my_pokemon (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            nickname text UNIQUE, 
            image text,
            pokemon_id INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO my_pokemon (name, nickname, image, pokemon_id) VALUES (?,?,?,?)'
                db.run(insert, ["butterfree","simentega","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",12])
                db.run(insert, ["ivysaur","siivy","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",2])
            }
        });  
    }
});


module.exports = db