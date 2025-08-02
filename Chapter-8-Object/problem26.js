const player = {
    name: 'messi',
    goals: 800,
    club: 'Inter Miami'
}
Object.freeze(player);

//
player.teams = 'Barca';
player.clubs = 'honu';
delete player.club;
console.log(player);