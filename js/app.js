console.log($)
//////////////////Constants and Objects///////
// const input = 
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
    constructor (name=`${input.val()}`, health = 20, strength = 5, dexterity = 0.7, items =[]){
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
    constructor (name=`${input.val()}`, health = 20, strength = 5, dexterity = 0.6, items =[]){
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

const player = new Player (`${input.val}`)
const dragon = new Dragon ("Kh'o Vah", items['gold coins'])
////Divs to be appended///
///Text boxes///
///Buttons///

/////////////////////////Functions/////////////

/////Display the instructions////

/////take Player name///////

///////Insert player name to Player character////

///////Set the scene/////

////////Choice to go left, right, or straight////

//////Go left, pick up beer///////
//////go back///

//////Go straight, pick up sword///
/////go back///


///////Go Right, fight dragon/////

//////Dragon fight///////

