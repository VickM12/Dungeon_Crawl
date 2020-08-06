# HELLO! And WELCOME 
## To my first project.
 
Dungeon Crawl is a browser based adventure game with minimal graphics that uses button clicks to navigate through the game.
 
This is my first General Assembly project and as such may not be the most visually appealing. Have fun and thanks for checking out my game!
 
To play the game, simply click the buttons to explore the dungeon and interact with items.
 
When you enter a fight, the player's health and the enemy's health will appear above the game text box. Attacks are based on player and enemy dexterity and a random number generator. If the randomly generated number is lower than the dexterity of a character, a successful hit is granted to the attacking player. Health points are deducted according to the attacking character's strength.
 
There is an option for the player to heal. Because of this, the dexterity of enemy characters is given a lower value, making it easier for them to hit the player.
 
When one or both characters' health reaches 0, the game is over and pressing the "Continue" button will reload the page, allowing players to play again.
 
Known bugs:
 
The heal method will reset the health of the player back to full 20 points rather than simply add 5 points of health as it is intended to do. However, unless the enemy health is at 5, in which case the odds of the player winning are significantly higher after healing, the enemy can still win.
 
Even if a player reaches 0 health, they can use the heal item because the player's health isn't checked until the beginning of the next round of attacks, which occurs when the player clicks the "Attack" button.
 
Players are able to return to the room where they picked up the healing item and continue to pick it up again and again, and again, despite there being a boolean check to determine if they already possess the item, which is supposed to remove the option to pick up item from the game.
 
If a player picks up the healing item a second time, the game will give the player two of that item. If the player still possesses the item from the first time they picked up the item, they will then have 3 of the item in their inventory. If the player picks it up a third time, the game will give them three of the item, bringing the total inventory to 6, and so on.
