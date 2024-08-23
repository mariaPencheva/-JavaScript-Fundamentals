function songs(arr){
    let songs = [];
    let numOfSongs = arr.shift();
    let typeSong = arr.pop();

    class Song {
        type;
        name;
        time;

        constructor (type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let line of arr){
        let tokens = line.split('_');

        let type= tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === 'all'){
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }

}

songs(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
)