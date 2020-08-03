console.log($)
//////////////////Constants and Objects///////
let $inputValue = $("#input-box").val(); 
console.log($inputValue)
    
    
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
        this.name= name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.items = items;
    }
    attackDragon(dragon){
        if (Math.random() <= dragon.dexterity) {
            displayPlayerAttack()
             dragon.health= dragon.health - this.strength;
        }   else displayPlayerMissedAttack()
    return dragon.health
    }
    
}
///Dragon class///
class Dragon extends Character {
    constructor (name=`${$inputValue}`, health = 20, strength = 5, dexterity = 0.6, items =[]){
        super(name, health, strength, dexterity, items)
        this.name= name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.items = items;
    }
    attackPlayer(player){
        if (Math.random() <= player.dexterity) {
            displayDragonAttack()
             player.health= player.health - this.strength;
        }   else displayDragonMissedAttack()
    return player.health

    }
}

const player = new Player (`${$inputValue}`)
const dragon = new Dragon ("Kh'O Vah", items = ['gold coins'])
const ale = {
    name: "Ale",
    property: (player.heatlh= player.heatlh +5)
}
const sword = {
    name: "Magical Sword"
}
////Divs to be appended///
///Text boxes///
const $welcome = $(`<p id="welcome">Welcome Adventurer! We, the local villagers have been terrorized by the mighty dragon, Kh'O Vah, will you enter the dungeon and slay the beast?</p>`)

const $enterDungeon= $('<p id="forkInPath">As you enter the dungeon, a musty smell assaults your nostrils. Lamps light the way through the dark hallway. You come to an intersection. Do you go left, right, or keep going straight?</p>')

const $goLeft =$('<p id="goLeft"> As you hug the wall and go left, you hear a steady drip of water, softly at first, but growing louder as you continue. Is it you rimagination, or did you hear tiny scurrying feet? A doorway opens up into a large room. Barrels line the walls, and a familiar aroma hangs in the air. Ales. And lots of them.</p>')

const $turnBack = $('<p id="turnBack"> You turn back and go back down the hall to the intersection.</p>')

const $exploreAleRoom = $('<p id="exploreAles">Who would have left these barrels to age? As you walk around you see a desk with notes. Whoever the brewer was, they were conviced ale could heal a person...or at least their spirit. They left a small barrel on a stand by the desk, their last project.</p>')

const $takeAle = $('<p id="takeAle"> You pick up the the small barrell, no larger than a loaf of bread. There is a slight sloshing inside. You stow it in your bag, not knowing when it might come in handy.</p>')

const $goStraight = $('<p id="goStraight">This hallway seems lighter for some reason. There is a vibration in the air, a distant hum that seems to transcend time. Where are you going, you wonder. A light suddenly appears at the end of the tunnel. Throwing your hands up to cover your eyes, you look through your fingers and see a brilliant room ahead. Walking through the doorway there is no need for torches, the room seems to create its own light, but how? From where?</p>')

const $exploreLightRoom = $('<p id="exploreLightRoom">Glimmering light seems to eminate from the center of the room. There are no decorations on the smooth stone walls. No furniture sits in the room. As you approach the light you see a small altar with a cruciform sword standing proudly, embedded in it.</p>')

const $takeSword = $(`<p id="takeSword">The sword seems to call to you. This is impossible you think, but then again, you are here to fight a dragon. You grip the sword and it leaps out of the altar. Your mind is filled with victrorious conquets you've never remembered before. Is this sword alive?</p>`)

const $goRight = $(`<p id="goRight">You go right. The hairs on the back of your neck start to stand as you go deeper. The musty smell gets stronger and you hear something dragging along the floor. A low rumble sends chills down your spine as you enter the doorway at the end of the hall into a massive room. Before you, sitting upright, is a massive dragon. Its gold and scarlet scales seem to flicker like an internal fire burning deep within the beast. 
    "BEAST?!" the dragon roars, "I AM NO BEAST! I am ${dragon.name}, and yes, I can peer into your thoughts!" Your legs quake, your mouth goes dry and your heart races.</p>`)

const $startFight = $('<p id="startFight">You draw your sword and charge at the dragon</p>')
const $playerAttack = $(`<p id="playerAttack">You swing wildly at the dragon. The blade slices between the scales and cuts deep into the hide of the dragon. ${dragon.name} roars in agony</p>`)
const $dragonAttack = $('<p id="dragonAttack">The dragon rears back and lunges at you, fire escaping from its snout as it strikes you with its claw.</p>')
const $playerMiss = $(`<p id="playerMiss">As you clumsily swing your sword, you lose your balance and miss. ${dragon.name} laughs at your feeble attempt.</p>`)
const $dragonMiss = $(`<p id="dragonMiss">As ${dragon.name} rears back and takes a deep breath in, you feel the sword in your hand tug you and pull you to the side. You stumble out of the way in the nick of time as a jet of fire shoots where you were just standing. ${dragon.name} snorts in disgust and disappointment.</p>`)

const $playerDeath = $(`<p id="playerDeath">Searing pain rips through your chest. You fall to your knees as a warm wet sensation covers your front. Dropping the sword you look up at the mighty ${dragon.name}. 
    "Yes," he murmurs softly, "Why did they send you to me? You don't even know." As you drift into the void, you feel your body being gently lifted from the cold hard ground. Warmth surrounds you and slowly ebbs into the darkness.</p>`)
const $dragonDeath = $(`<p id="dragonDeath">With a mighty blow, the sword in your hand almost seems to guide you as it plunges deep into the dragon's hide. ${dragon.name} shrieks in agony and pulls back, ripping the sword from your hand. As he writhes in pain, you jump back and he falls to the ground. Slowly you approach him. There is no anger or fear in his eyes. What is it? Relief? Appreciation?
    "YOu don't know why they sent you to kill me do you." It's a statement, not a question. You gulp realizing that the villagers never told you what the ${dragon.name} had done to them. Was it merely their own fear?
    "I was brought here long ago as a hatchling," ${dragon.name} sighs, "Now I can finally be free." You leave the dungeon, shaken.</p>`)


///Buttons///
const $enterButton = $('<div class="buttons" id="enter">');
$enterButton.text('Enter')

const $leftButton = $('<div class="buttons" id="left">');
$leftButton.text('Go left')

const $rightButton = $('<div class="buttons" id="right">');
$rightButton.text('Go right');

const $straightButton = $('<div class="buttons" id="straight">');
$straightButton.text('Go straight');

const $explore =$('<div class ="buttons" id="explore">');
$explore.text('explore');

const $goBack = $ ('<div class="buttons" id="goBack">');
$goBack.text('go back');

const $takeItem = $('<div class="buttons" id="takeItem">');
$takeItem.text('take item');

const $fightDragon =$('<div class="buttons" id="fightDragon">')
$fightDragon.text('fight the dragon')

/////////////////////////Functions/////////////

/////Display the instructions////
const startGame = () =>{
    $welcome.appendTo($('#gameText'))
$enterButton.appendTo('#console') 
};


///////Set the scene/////

////////Choice to go left, right, or straight////
const enterDungeon = () =>{
    $enterButton.remove()
    $welcome.remove()
    $enterDungeon.appendTo($('#gameText'))
    $leftButton.appendTo('#console')
    $rightButton.appendTo('#console')
    $straightButton.appendTo('#console')
}
const goBack =()=>{
    $goLeft.detach()
    $goRight.detach()
    $goStraight.detach()
    $explore.detach()
    $goBack.detach()
    $takeAle.detach()
    $takeSword.detach()
    $takeItem.detach()
    $exploreAleRoom.detach()
    $exploreLightRoom.detach()
    
    $turnBack.appendTo($('gameBox'))
    $enterDungeon.appendTo($('#gameText'))
    $leftButton.appendTo('#console')
    $rightButton.appendTo('#console')
    $straightButton.appendTo('#console')

}
const goLeft =()=>{
    $enterDungeon.detach();
    $leftButton.detach();
    $rightButton.detach();
    $straightButton.detach();
    
    $goLeft.appendTo($('#gameText'));
    $explore.appendTo($('#console'));
    $goBack.appendTo($('#console'));


    $explore.on('click', event=>{
        $explore.detach()
        $goLeft.detach();

        $exploreAleRoom.appendTo($('#gameText'))
        $takeItem.appendTo($('#console'))

            $takeItem.on('click', event=>{
                $exploreAleRoom.detach()
                $takeAle.appendTo($('#gameText'))
                player.items.push(ale)
            })
        })
}

const goStraight =()=>{
    $enterDungeon.detach();
    $leftButton.detach();
    $rightButton.detach();
    $straightButton.detach();
    
    $goStraight.appendTo($('#gameText'));
    $explore.appendTo($('#console'));
    $goBack.appendTo($('#console'));

    $explore.on('click', event => {
        $explore.detach();
        $straightButton.detach();
        $goStraight.detach();
        
        $exploreLightRoom.appendTo($('#gameText'));
        $takeItem.appendTo($('#console'));

        $takeItem.on('click', event => { 
            $exploreLightRoom.detach();
            $takeItem.detach();

            $takeSword.appendTo($('#gameText'));
            player.items.push(sword);
        })
    })
}

const goRight =() => {
    $enterDungeon.detach();
    $leftButton.detach();
    $rightButton.detach();
    $straightButton.detach();
    
    $goRight.appendTo($('#gameText'));
    $goBack.appendTo($('#console'));
    $fightDragon.appendTo($('#console'));

}

//////go back///

//////Go straight, pick up sword///
/////go back///


///////Go Right, fight dragon/////

//////Dragon fight///////

$rightButton.on('click', goRight);
$straightButton.on('click', goStraight);
$leftButton.on('click', goLeft);
$goBack.on('click', goBack);
$enterButton.on('click', enterDungeon);
onLoad=startGame();