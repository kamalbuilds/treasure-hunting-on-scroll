## Scroll Treasure Quest: An Epic Blockchain Adventure with XP points

This is a treasure hunting game, where your character earns XP points to unlock next levels of adventure and higher tier weapons.

Live Demo - https://treasure-hunting-on-scroll.vercel.app

## Demo video -> 

This is a treasure hunting game, where your character earns XP points to unlock next levels of adventure and higher tier weapons.

- Begin Your Legend

1. Forge Your Hero: Enter the realm by claiming your unique character NFT (ERC-1155), a digital artifact that signifies your presence and prowess in the world of Treasure Hunt.

2. Arm Yourself for Glory: Venture into the arcane Shop, where weapon NFTs (another ERC-1155 contract) await those daring enough to wield their power. 
Choose your weapon wisely, for it will be your companion in the quests to come.

3. Prepare for the Hunt: With weapon in hand, "equip" (stake) it in the legendary [TreasureHunt](./contracts/contracts/TreasureHunt.sol) contract. 

4. Here, your journey truly begins as you start to earn "XP points" (ERC-20 tokens),as you make your progress in the game.

5. Ascend Through the Ranks with your XP

Your valor and strategy will earn you XP points, the currency of progress and power in the game. These tokens are not just markers of your journey; they are keys to unlocking greater challenges and rewards. 

Use them to acquire higher-tier weapons, each imbued with the potential to amplify your rewards per block, marking your rise from a novice adventurer to a legendary treasure hunter.

```js
( 0 + 1 ) * 10_000_000_000_000 / 100_000_000_000_000_000 XP points per block.
```

Once you have earned enough XP tokens, you can use them to purchase higher tier weapons.

For instance, acquiring the "Level 2 Sword" (token ID `1`) for a mere 10 XP points elevates your rewards, leveraging the formula:

```js
(1 + 1)  10_000_000_000_000 / 100_000_000_000_000_000 XP points per block.
```

This intricate mechanism ensures that every action in the game is not just a step forward but a leap towards legendary status..


- List of contracts deployed

TreasureHunting Characters- https://sepolia.scrollscan.com/address/0x64C7Af38958e83fa2921c59CCfd13fe1509E067A
XP points - https://sepolia.scrollscan.com/address/0x542580aF885076C2BaB73497875d01e71Ec0842d
Weapon NFTs - https://sepolia.scrollscan.com/address/0xbE5751A97Bb81cCbEfbB69afDaE4e0f5701D21e7
Treasure Hunting Contract - 