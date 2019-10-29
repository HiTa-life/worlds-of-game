export class Game {
    constructor(id, 
        name,
        type,
        description,
        date,
        address,
        city, 
        maxPlayer,
        players
    ){
        this.name =  name;
        this.type = type; 
        this.description = description;
        this.date = date;
        this.address = address;
        this.city = city;
        this.maxPlayer = maxPlayer;
        this.players = players

    }
};