
//////////////////Constants and Objects///////
// let $inputValue = $("#input-box").val(); 
// console.log($inputValue)
    
    
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
///Dragon class///
class Dragon extends Character {
    constructor (name=``, health = 20, strength = 5, dexterity = 0.6, items =[]){
        super(name, health, strength, dexterity, items)
        this.name= name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.items = items;
    }
    attackPlayer(player){
        // $playerMiss.detach()
        // $playerAttack.detach()
        // $dragonAttack.detach()
        // $dragonMiss.detach()
        if (Math.random() <= player.dexterity) {
            $dragonAttack.appendTo($('#gameText'))
             player.health= player.health - this.strength;
        }   else $dragonMiss.appendTo($('#gameText'))
        console.log(`player health is ${player.health}`)
        $playerHP.text(`Your health is ${player.health}`)

    }
}
const dragon = new Dragon ("Kh'O Vah", health= 20, strength = 5, dexterity = 0.6, items = ['gold coins'])

///Player class///
class Player extends Character {
    constructor (name=``, health = 20, strength = 5, dexterity = 0.7, items =[]){
        super(name, health, strength, dexterity, items)
        this.name= name;
        this.health = health;
        this.strength = strength;
        this.dexterity = dexterity;
        this.items = items;
    }
    attackDragon(Dragon){
        // $dragonMiss.detach()
        // $dragonAttack.detach()
        // $playerMiss.detach()
        // $playerAttack.detach()
        if (Math.random() <= dragon.dexterity) {
            $playerAttack.appendTo($('#gameText'))
             dragon.health= dragon.health - this.strength;
        }   else $playerMiss.appendTo($('#gameText'))
        console.log(`Dragon health is ${dragon.health}`)
        $dragonHP.text(`Dragon health is ${dragon.health}`)
    }
    
}
const player = new Player (`Adventurer`)
const ale = {
    name: "Ale",
    property: (player.heatlh = player.heatlh +5)
}
const sword = {
    name: "Magical Sword"
}
////Divs to be appended///
///Health Status///
const $dragonHP = $(`<h2 id="dragonHealth"> Dragon health is ${dragon.health}</h2>`)

const $playerHP = $(`<h2 id="playerHealth">Your health is ${player.health}</h2>`)



///Text boxes///
const $welcome = $(`<p id="welcome">Welcome Adventurer! We, the local villagers have been terrorized by the mighty dragon, Kh'O Vah, will you enter the dungeon and slay the beast?</p>`)
 
const $enterDungeon= $('<p id="forkInPath">As you enter the dungeon, a musty smell assaults your nostrils. Lamps light the way through the dark hallway. You come to an intersection. Do you go left, right, or keep going straight?</p>')
 
const $goLeft =$('<p id="goLeft"> As you hug the wall and go left, you hear a steady drip of water, softly at first, but growing louder as you continue. Is it your imagination, or did you hear tiny scurrying feet? A doorway opens up into a large room. Barrels line the walls, and a familiar aroma hangs in the air. Ales. And lots of them.</p>')
 
const $turnBack = $('<p id="turnBack"> You turn back and go back down the hall to the intersection.</p>')
 
const $exploreAleRoom = $('<p id="exploreAles">Who would have left these barrels to age? As you walk around you see a desk with notes. Whoever the brewer was, they were convinced ale could heal a person...or at least their spirit. They left a small barrel on a stand by the desk, their last project.</p>')
 
const $takeAle = $('<p id="takeAle"> You pick up the small barrell, no larger than a loaf of bread. There is a slight sloshing inside. You stow it in your bag, not knowing when it might come in handy.</p>')
 
const $goStraight = $('<p id="goStraight">This hallway seems lighter for some reason. There is a vibration in the air, a distant hum that seems to transcend time. Where are you going, you wonder. A light suddenly appears at the end of the tunnel. Throwing your hands up to cover your eyes, you look through your fingers and see a brilliant room ahead. Walking through the doorway there is no need for torches, the room seems to create its own light, but how? From where?</p>')
 
const $exploreLightRoom = $('<p id="exploreLightRoom">Glimmering light seems to emanate from the center of the room. There are no decorations on the smooth stone walls. No furniture sits in the room. As you approach the light you see a small altar with a cruciform sword standing proudly, embedded in it.</p>')
 
const $takeSword = $(`<p id="takeSword">The sword seems to call to you. This is impossible you think, but then again, you are here to fight a dragon. You grip the sword and it leaps out of the altar. Your mind is filled with victorious conquests you've never remembered before. Is this sword alive?</p>`)
 
const $goRight = $(`<p id="goRight">You go right. The hairs on the back of your neck start to stand as you go deeper. The musty smell gets stronger and you hear something dragging along the floor. A low rumble sends chills down your spine as you enter the doorway at the end of the hall into a massive room. Before you, sitting upright, is a massive dragon. Its gold and scarlet scales seem to flicker like an internal fire burning deep within the beast.
"BEAST?!" the dragon roars, "I AM NO BEAST! I am ${dragon.name}, and yes, I can peer into your thoughts!" Your legs quake, your mouth goes dry and your heart races.</p>`)
 
const $startFight = $('<p id="startFight">You draw your sword and charge at the dragon</p>')
const $getASword = $(`<p id="getASword">You need a sword before you can fight ${dragon.name}!</p>`)
const $playerAttack = $(`<p id="playerAttack">You swing wildly at the dragon. The blade slices between the scales and cuts deep into the hide of the dragon. ${dragon.name} roars in agony</p>`)
const $drinkAle= $('<p id="drinkAle">You crack open the barrel and have a drink. The ale is surprisingly good and refreshing. You feel recharged!"</p>')
const $dragonAttack = $('<p id="dragonAttack">The dragon rears back and lunges at you, fire escaping from its snout as it strikes you with its claw.</p>')
const $playerMiss = $(`<p id="playerMiss">As you clumsily swing your sword, you lose your balance and miss. ${dragon.name} laughs at your feeble attempt.</p>`)
const $dragonMiss = $(`<p id="dragonMiss">As ${dragon.name} rears back and takes a deep breath in, you feel the sword in your hand tug you and pull you to the side. You stumble out of the way in the nick of time as a jet of fire shoots where you were just standing. ${dragon.name} snorts in disgust and disappointment.</p>`)
 
const $playerDeath = $(`<p id="playerDeath">Searing pain rips through your chest. You fall to your knees as a warm wet sensation covers your front. Dropping the sword you look up at the mighty ${dragon.name}.
"Yes," he murmurs softly, "Why did they send you to me? You don't even know." As you drift into the void, you feel your body being gently lifted from the cold hard ground. Warmth surrounds you and slowly ebbs into the darkness.</p>`)
const $dragonDeath = $(`<p id="dragonDeath">With a mighty blow, the sword in your hand almost seems to lead you as it plunges deep into the dragon's hide. ${dragon.name} shrieks in agony and pulls back, ripping the sword from your hand. As he writhes in pain, you jump back and he falls to the ground. Slowly you approach him. There is no anger or fear in his eyes. What is it? Relief? Appreciation?
"You don't know why they sent you to kill me do you." It's a statement, not a question. You gulp realizing that the villagers never told you what the ${dragon.name} had done to them. Was it merely their own fear?
"I was brought here long ago as a hatchling," ${dragon.name} sighs, "Now I can finally be free." You leave the dungeon, shaken.</p>`)
const $bothDie =$(`<p id ="bothDie">You and ${dragon.name} both lunge at each other. Your sword buries itself deep in his hide while his mighty claw tears through your body. You look up into his great eyes, now softened as he gazes down at you. Is that a tear forming? You slump over while ${dragon.name} cradles you in one of his claws. 
"You may rest now with me," he murmurs, "You fought well." Together you drift into the void.</p>`) 

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

const $takeSwordBtn =$('<div class="buttons" id="takeItem">');
$takeSwordBtn.text('take sword');

const $fightDragon =$('<div class="buttons" id="fightDragon">')
$fightDragon.text('fight the dragon')

const $attack =$('<div class="buttons" id="attack">')
$attack.text('attack');

const $drinkAleBtn =$('<div class="buttons" id="drinkAle">')
$drinkAleBtn.text('drink ale');

const $continue =$('<div class="buttons" id="continue">')
$continue.text('continue');
/////////////////////////Functions/////////////

/////Display the instructions////
const startGame = () =>{
    $dragonDeath.detach()
    $playerDeath.detach()
    $welcome.appendTo($('#gameText'))
$enterButton.appendTo('#console') 
};


///////Utility Functions/////
const pickUpAle = ()=>{
    $exploreAleRoom.detach()
    $takeSwordBtn.detach()
    $takeItem.remove()
    $takeAle.appendTo($('#gameText'))
    player.items.push(ale)
}

const pickUpSword =()=>{
    $takeSwordBtn.detach();
    $exploreLightRoom.detach();
    $takeItem.detach();
    $takeAle.detach();
    $takeSword.detach()

    $takeSword.appendTo($('#gameText'));
    player.items.push(sword);
}

const getSword= ()=>{
    $goRight.detach()
    $getASword.appendTo($('#gameText'))
    $fightDragon.detach()
}
const drinkAle=()=>{
    $drinkAleBtn.detach()
    player.items.pop(ale);
    player.health = player.health +5
    $drinkAle.appendTo($('#gameText'))

}
const replay =()=>{
location.reload();
}



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
    $takeSwordBtn.detach()
    $takeItem.detach()
    $exploreAleRoom.detach()
    $exploreLightRoom.detach()
    $getASword.detach()
    $attack.detach()
    $drinkAle.detach()
    $drinkAleBtn.detach()
    $dragonAttack.detach()
    $dragonMiss.detach()
    $playerAttack.detach()
    $playerMiss.detach()
    $continue.detach()
    $fightDragon.detach()
    $startFight.detach()
    
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
        if (player.items.includes(ale)=== true){
            $takeItem.detach()
        }
        $explore.detach();
        $goLeft.detach();
        $exploreLightRoom.detach();
        $takeSwordBtn.detach();

        $exploreAleRoom.appendTo($('#gameText'))
        $takeItem.appendTo($('#console'))

        $takeItem.on('click', pickUpAle)
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
        $takeAle.detach();
        $takeItem.detach()
        
        $exploreLightRoom.appendTo($('#gameText'));
        $exploreAleRoom.detach();
        $takeSwordBtn.appendTo($('#console'));

        $takeSwordBtn.on('click', pickUpSword)
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

    // $fightDragon.on('click', dragonFight)
    $fightDragon.on('click', event => {
        if (player.items.includes(sword)===false) {
            getSword();
        }else{dragonFight()
        }
    })
}



const dragonFight =()=>{
    $fightDragon.detach();
    $goRight.detach();    

    $dragonHP.prependTo($('.gameBox'))
    $playerHP.prependTo($('.gameBox'))
    $startFight.appendTo($('#gameText'));
    $attack.appendTo($('#console'));
   
    if (player.items.includes(ale) === true){
    $drinkAleBtn.appendTo($('#console'))
    }
        
    $attack.on('click', event =>{
        $startFight.detach()
        $dragonMiss.detach()
        $dragonAttack.detach()
        $playerMiss.detach()
        $playerAttack.detach()
        $drinkAle.detach()
        if (player.health > 0 && dragon.health > 0){
            player.attackDragon(dragon)
             $drinkAleBtn.on('click', drinkAle);
             $continue.on('click', dragon.attackPlayer(player))
        }   else if (player.health <= 0 && dragon.health <= 0){  
            $attack.detach();
            $drinkAleBtn.detach();
            $goBack.detach();
            $bothDie.appendTo($('#gameText'));
            $continue.appendTo($('#console'));  
         } else if (dragon.health <= 0) {
                $dragonDeath.appendTo($('#gameText'))
                $attack.detach()
                $drinkAleBtn.detach()
                $goBack.detach()
                $continue.appendTo($('#console'));       
        } else {$playerDeath.appendTo($('#gameText'))
        $attack.detach()
        $drinkAleBtn.detach()
        $goBack.detach()
        $continue.appendTo($('#console'));
        
        }
    }) 
} 
$continue.on('click', replay)
$rightButton.on('click', goRight);
$straightButton.on('click', goStraight);
$leftButton.on('click', goLeft);
$goBack.on('click', goBack);
$enterButton.on('click', enterDungeon);
onload=startGame();