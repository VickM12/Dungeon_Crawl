console.log($)
//////////////////Constants and Objects///////
let $inputValue = $("#input-box").val(); 

    
    
///Character Class///
class Character {
    constructor (name= "", health= 0, strength= 0, dexterity=0, items= []){
        this.name= name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.items = items;
    }
}
///Player class///
class Player extends Character {
    constructor (name=`${$inputValue}`, health = 20, strength = 5, dexterity = 0.7, items =[]){
        super(name, health, strength, dexterity, items)
        // this.name= name;
        // this.health = health;
        // this.strength = strength;
        // this.dexterity = dexterity;
        // this.items = items;
    }
    attackDragon(Dragon){
        if (Math.random() <= dragon.dexterity) {
            displayPlayerAttack()
             dragon.health= dragon.health - this.strength;
        }   else displayMissedAttack()
    return dragon.health
    }
    
}
///Dragon class///
class Dragon extends Character {
    constructor (name=`${$inputValue}`, health = 20, strength = 5, dexterity = 0.6, items =[]){
        super(name, health, strength, dexterity, items)
        // this.name= name;
        // this.health = health;
        // this.strength = strength;
        // this.dexterity = dexterity;
        // this.items = items;
    }
    attackPlayer(Player){
        if (Math.random() <= player.dexterity) {
            displayDragonAttack()
             player.health= player.health - this.strength;
        }   else displayMissedAttack()
    return player.health

    }
}

const player = new Player (`${$inputValue}`)
const dragon = new Dragon ("Kh'o Vah", items = ['gold coins'])
////Divs to be appended///
///Text boxes///
const $welcome = $(`<p id="welcome">Welcome ${$inputValue}! We have been terrorized by the mighty dragon, Kh'o Vah, will you enter the dungeon and slay the beast?</p>`)

const $enterDungeon= $('<p id="forkInPath">As you enter the dungeon, a musty smell assaults your nostrils. Lamps light the way through the dark hallway. You come to an intersection. Do you go left, right, or keep going straight?</p>')
///Buttons///
const $enter = $('<div class="buttons" id="enter">')
$enter.text('Enter')

const $left = $('<div class="buttons" id="left">');
$left.text('Go left')
/////////////////////////Functions/////////////

/////Display the instructions////
const startGame = () =>{
    $welcome.appendTo($('#gameText'))
$enter.appendTo('#console')
}

/////take Player name///////
$('form').on('submit', (event)=>{
    event.preventDefault(); 
    $welcome.appendTo($('#gameText'));
console.log($inputValue);
$(event.currentTarget).trigger('reset');  
});
///////Insert player name to Player character////

///////Set the scene/////

////////Choice to go left, right, or straight////
const enterDungeon = () =>{
    $enter.remove()
    $welcome.remove()
    $enterDungeon.appendTo($('#gameText'))
    $left.appendTo('#console')
}
$enter.on('click', enterDungeon)
//////Go left, pick up beer///////
//////go back///

//////Go straight, pick up sword///
/////go back///


///////Go Right, fight dragon/////

//////Dragon fight///////





onLoad=startGame()