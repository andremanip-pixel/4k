LootJS.modifiers((event) => {
  // by id
  event
    .addLootTableModifier("minecraft:chests/simple_dungeon")
    .randomChance(0.05) // Adjusted random chance to 5%
    .addWeightedLoot(
      [1, 3], // 1 to 3 rolls
      [
        Item.of("marbledsfirstaid:medkit").withChance(10),
        Item.of("marbledsfirstaid:bandages").withChance(7),
        Item.of("marbledsfirstaid:pain_pills").withChance(5),
        Item.of("marbledsfirstaid:bandaid").withChance(10),
        Item.of("marbledsfirstaid:cloth").withChance(15),
        Item.of("marbledsfirstaid:medicine_bottle").withChance(5),
        Item.of("marbledsfirstaid:awkward_medicine_bottle").withChance(2),
        Item.of("marbledsfirstaid:morphine").withChance(1),
        Item.of("marbledsfirstaid:eye_drops").withChance(2),
        Item.of("marbledsfirstaid:antidote").withChance(2),
        Item.of("marbledsfirstaid:tonic").withChance(2),
        Item.of("marbledsfirstaid:stimpack").withChance(5),
        Item.of("marbledsfirstaid:adrenaline_syringe").withChance(1),
      ]
    );
  event
    .addEntityLootModifier("minecraft:zombie")
    .randomChance(0.01) // Adjusted random chance to 5%
    .addWeightedLoot(
      [1, 3], // 1 to 3 rolls
      [
        Item.of("marbledsfirstaid:medkit").withChance(10),
        Item.of("marbledsfirstaid:bandages").withChance(7),
        Item.of("marbledsfirstaid:pain_pills").withChance(5),
        Item.of("marbledsfirstaid:bandaid").withChance(10),
        Item.of("marbledsfirstaid:cloth").withChance(15),
        Item.of("marbledsfirstaid:medicine_bottle").withChance(5),
        Item.of("marbledsfirstaid:awkward_medicine_bottle").withChance(2),
        Item.of("marbledsfirstaid:morphine").withChance(1),
        Item.of("marbledsfirstaid:eye_drops").withChance(2),
        Item.of("marbledsfirstaid:antidote").withChance(2),
        Item.of("marbledsfirstaid:tonic").withChance(2),
        Item.of("marbledsfirstaid:stimpack").withChance(5),
        Item.of("marbledsfirstaid:adrenaline_syringe").withChance(1),
      ]
    );
});
