import template from './template.html';

const game = {
	"info": {
		"occuredAt": 1445483783874,
		"queueType": "NONE",
		"gameLength": null,
		"didWin": true
	},
	"champion": {
		"id": 53,
		"key": "Blitzcrank",
		"name": "Blitzcrank",
		"title": "the Great Steam Golem",
		"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Blitzcrank.png"
	},
	"spells": [{
		"name": "Exhaust",
		"description": "Exhausts target enemy champion, reducing their Movement Speed and Attack Speed by 30%, their Armor and Magic Resist by 10, and their damage dealt by 40% for 2.5 seconds.",
		"summonerLevel": 4,
		"id": 3,
		"key": "SummonerExhaust",
		"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/spell/SummonerExhaust.png"
	}, {
		"name": "Flash",
		"description": "Teleports your champion a short distance toward your cursor's location.",
		"summonerLevel": 8,
		"id": 4,
		"key": "SummonerFlash",
		"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/spell/SummonerFlash.png"
	}],
	"items": [{
			"id": 3069,
			"name": "Talisman of Ascension",
			"group": "GoldBase",
			"description": "<stats>+100% Base Health Regen <br><mana>+100% Base Mana Regen <br></mana>+20 Movement Speed<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion death without dealing the killing blow grants 4 Gold and 10 Health.<br><active>UNIQUE Active:</active> Grants nearby allies +40% Movement Speed for 3 seconds (40 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income item</groupLimit><br><br><i><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></i><br><br>",
			"plaintext": "Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.",
			"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/item/3069.png"
		}, {
			"id": 3050,
			"name": "Zeke's Harbinger",
			"description": "<stats><mana>+250 Mana</mana><br>+30 Armor<br>+50 Ability Power<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Conduit:</active> Bind to target ally (60 second cooldown).<br><unique>UNIQUE Passive:</unique> When within 1000 units of each other, you and your ally generate Charges. Attacking or casting spells generates extra Charges. At 100 Charges, causing damage consumes them, increasing your and your ally's Ability Power by 20% and Critical Strike Chance by 50% for 8 seconds. ",
			"plaintext": "Empowers an ally with Critical Strike Chance and Ability Power",
			"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/item/3050.png"
		}, {
			"id": 2049,
			"name": "Sightstone",
			"description": "<stats>+150 Health</stats><br><br><unique>UNIQUE Passive - Ward Refresh:</unique> Holds 4 charges and refills upon visiting the shop.<br><active>UNIQUE Active - Ghost Ward:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 3 minutes. A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time.<br><br><i>(Unique Passives with the same name don't stack.)</i>",
			"plaintext": "Increases Health and provides Stealth Wards over time",
			"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/item/2049.png"
		}, {
			"id": 3117,
			"name": "Boots of Mobility",
			"description": "<unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +105 Movement Speed when out of combat for 5 seconds.<br><br><i>(Unique Passives with the same name don't stack.)</i>",
			"plaintext": "Greatly enhances Movement Speed when out of combat",
			"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/item/3117.png"
		}, {
			"id": 2043,
			"name": "Vision Ward",
			"group": "PinkWards",
			"description": "<groupLimit>Can only carry 2 Vision Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a visible ward that reveals the surrounding area and invisible units in the area until killed. Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><i>(Revealing a ward in this manner grants a portion of the gold reward when that unit is killed.)</i>",
			"plaintext": "Use to temporarily provide vision and stealth detection in an area",
			"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/item/2043.png"
		},
		null
	],
	"trinket": {
		"id": 3341,
		"name": "Sweeping Lens (Trinket)",
		"group": "RelicBase",
		"description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><unique>Active:</unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a small radius (120 second cooldown).<br><br>At level 9, cast range and sweep radius increase by 50% each and the cooldown is reduced to 75 seconds.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</i>",
		"plaintext": "Detects and disables nearby invisible wards and traps",
		"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/item/3341.png"
	},
	"teams": {
		"blue": [{
			"summoner": {
				"id": 19859286,
				"name": "whitewolf216",
				"profileIcon": {
					"id": 539,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/539.png"
				},
				"level": 30
			},
			"champion": {
				"id": 150,
				"key": "Gnar",
				"name": "Gnar",
				"title": "the Missing Link",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Gnar.png"
			},
			"teamId": 100
		}, {
			"summoner": {
				"id": 41663226,
				"name": "Small Turtle",
				"profileIcon": {
					"id": 7,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/7.png"
				},
				"level": 30
			},
			"champion": {
				"id": 61,
				"key": "Orianna",
				"name": "Orianna",
				"title": "the Lady of Clockwork",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Orianna.png"
			},
			"teamId": 100
		}, {
			"summoner": {
				"id": 52211499,
				"name": "Struggle Buss",
				"profileIcon": {
					"id": 937,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/937.png"
				},
				"level": 30
			},
			"champion": {
				"id": 62,
				"key": "MonkeyKing",
				"name": "Wukong",
				"title": "the Monkey King",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/MonkeyKing.png"
			},
			"teamId": 100
		}, {
			"summoner": {
				"id": 26166442,
				"name": "icypyro",
				"profileIcon": {
					"id": 915,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/915.png"
				},
				"level": 30
			},
			"champion": {
				"id": 222,
				"key": "Jinx",
				"name": "Jinx",
				"title": "the Loose Cannon",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Jinx.png"
			},
			"teamId": 100
		}],
		"purple": [{
			"summoner": {
				"id": 57446495,
				"name": "Midnight Rook ",
				"profileIcon": {
					"id": 785,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/785.png"
				},
				"level": 30
			},
			"champion": {
				"id": 12,
				"key": "Alistar",
				"name": "Alistar",
				"title": "the Minotaur",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Alistar.png"
			},
			"teamId": 200
		}, {
			"summoner": {
				"id": 113855,
				"name": "Instances",
				"profileIcon": {
					"id": 915,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/915.png"
				},
				"level": 30
			},
			"champion": {
				"id": 23,
				"key": "Tryndamere",
				"name": "Tryndamere",
				"title": "the Barbarian King",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Tryndamere.png"
			},
			"teamId": 200
		}, {
			"summoner": {
				"id": 30039830,
				"name": "MoIla",
				"profileIcon": {
					"id": 937,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/937.png"
				},
				"level": 30
			},
			"champion": {
				"id": 7,
				"key": "Leblanc",
				"name": "LeBlanc",
				"title": "the Deceiver",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Leblanc.png"
			},
			"teamId": 200
		}, {
			"summoner": {
				"id": 35684892,
				"name": "cheftomkill",
				"profileIcon": {
					"id": 924,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/924.png"
				},
				"level": 30
			},
			"champion": {
				"id": 254,
				"key": "Vi",
				"name": "Vi",
				"title": "the Piltover Enforcer",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Vi.png"
			},
			"teamId": 200
		}, {
			"summoner": {
				"id": 51088568,
				"name": "PIacebo",
				"profileIcon": {
					"id": 929,
					"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/profileicon/929.png"
				},
				"level": 30
			},
			"champion": {
				"id": 104,
				"key": "Graves",
				"name": "Graves",
				"title": "the Outlaw",
				"imageUrl": "http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/Graves.png"
			},
			"teamId": 200
		}]
	},
	"team": "blue",
	"stats": {
		"level": 11,
		"goldEarned": 8309,
		"numDeaths": 2,
		"minionsKilled": 16,
		"goldSpent": 6900,
		"totalDamageDealt": 18794,
		"totalDamageTaken": 13596,
		"team": 100,
		"win": true,
		"physicalDamageDealtPlayer": 6758,
		"magicDamageDealtPlayer": 11250,
		"physicalDamageTaken": 10657,
		"magicDamageTaken": 2938,
		"largestCriticalStrike": 156,
		"timePlayed": 1316,
		"totalHeal": 1383,
		"totalUnitsHealed": 4,
		"assists": 21,
		"item0": 3069,
		"item1": 3050,
		"item2": 2049,
		"item3": 3117,
		"item4": 2043,
		"item6": 3341,
		"visionWardsBought": 2,
		"magicDamageDealtToChampions": 5676,
		"physicalDamageDealtToChampions": 3481,
		"totalDamageDealtToChampions": 9157,
		"trueDamageDealtPlayer": 785,
		"wardPlaced": 17,
		"totalTimeCrowdControlDealt": 55,
		"playerRole": 2,
		"playerPosition": 2
	}
};

export default class GameCard {
	static selector = 'game-card';
	static template = template;

	constructor() {
		// Assigning each property of game to 'this'
		Object.assign(this, game);

		// Converting the occuredAt timing
		this.info.occuredAt = new Date(this.info.occuredAt).toLocaleTimeString();

		// We might have to make sure this stuff below
		// doesn't return errors for game mode other than Summoners Rift
		this.stats.championsKilled = this.stats.championsKilled ? this.stats.championsKilled : 0;
		this.stats.neutralMinionsKilled = this.stats.neutralMinionsKilled ? this.stats.neutralMinionsKilled : 0;
	}
}