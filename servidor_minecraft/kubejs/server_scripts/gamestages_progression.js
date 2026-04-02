// Game Stages Progression System for Epic Siege Mod Integration
// Time-based progression ONLY - unlock siege features as world time passes

// Stage Progression Tiers (Time-Based):
// siege_tier1: Basic siege abilities (jumping, griefing) - 3 days
// siege_tier2: Advanced mobility (digging, block targeting) - 10 days
// siege_tier3: Complex behaviors (building, creeper jockeys) - 25 days
// siege_tier4: Destructive abilities (demolition/TNT) - 50 days

PlayerEvents.loggedIn(event => {
    const player = event.player;
    const stages = player.stages;
    
    // Welcome message on first join
    if (!stages.has('siege_welcome')) {
        player.tell('§6[Cursed Walking]§r Time-based siege progression active. As days pass, mobs gain new abilities!');
        stages.add('siege_welcome');
    }
});

// Check progression every 5 seconds based purely on world time
PlayerEvents.tick(event => {
    const player = event.player;
    if (event.player.age % 100 !== 0) return; // Check every 5 seconds
    
    const stages = player.stages;
    const level = player.level;
    const daysPassed = level.getDayTime() / 24000;
    
    // Tier 1: 3 days - Basic Siege (Jump & Grief)
    if (!stages.has('siege_tier1')) {
        if (daysPassed >= 3) {
            stages.add('siege_tier1');
            player.tell('§c[Day ' + Math.floor(daysPassed) + ' - Siege Warning]§r Mobs can now §ejump§r and §egrief§r! Danger level increased.');
            player.playSound('minecraft:entity.ender_dragon.growl', 1.0, 1.2);
        }
    }
    
    // Tier 2: 10 days - Mid-game (Digging & Block Targeting)
    if (!stages.has('siege_tier2') && stages.has('siege_tier1')) {
        if (daysPassed >= 10) {
            stages.add('siege_tier2');
            player.tell('§c[Day ' + Math.floor(daysPassed) + ' - Siege Warning]§r Mobs can now §edig§r and §etarget blocks§r! Fortify your base!');
            player.playSound('minecraft:entity.wither.spawn', 0.5, 1.5);
        }
    }
    
    // Tier 3: 25 days - Late-game (Building & Creeper Jockeys)
    if (!stages.has('siege_tier3') && stages.has('siege_tier2')) {
        if (daysPassed >= 25) {
            stages.add('siege_tier3');
            player.tell('§c[Day ' + Math.floor(daysPassed) + ' - Siege Warning]§r Mobs can now §ebuild structures§r and §ecreeper jockeys§r spawn! Maximum threat!');
            player.playSound('minecraft:entity.wither.spawn', 0.8, 0.8);
        }
    }
    
    // Tier 4: 50 days - End-game (Demolition/TNT)
    if (!stages.has('siege_tier4') && stages.has('siege_tier3')) {
        if (daysPassed >= 50) {
            stages.add('siege_tier4');
            player.tell('§c[Day ' + Math.floor(daysPassed) + ' - MAXIMUM SIEGE]§r Mobs can now drop §4LIVE TNT§r! The ultimate challenge awaits!');
            player.playSound('minecraft:entity.wither.death', 1.0, 0.5);
        }
    }
});

// Debug command to check current stages and time
global.checkSiegeStages = (player) => {
    const stages = player.stages;
    const daysPassed = Math.floor(player.level.getDayTime() / 24000);
    player.tell('§6=== Siege Progression Status ===');
    player.tell(`Current Day: §e${daysPassed}`);
    player.tell(`Tier 1 (Day 3 - Jump/Grief): ${stages.has('siege_tier1') ? '§aUnlocked' : '§cLocked'}`);
    player.tell(`Tier 2 (Day 10 - Dig/Target): ${stages.has('siege_tier2') ? '§aUnlocked' : '§cLocked'}`);
    player.tell(`Tier 3 (Day 25 - Build/Jockeys): ${stages.has('siege_tier3') ? '§aUnlocked' : '§cLocked'}`);
    player.tell(`Tier 4 (Day 50 - Demolition): ${stages.has('siege_tier4') ? '§aUnlocked' : '§cLocked'}`);
};
