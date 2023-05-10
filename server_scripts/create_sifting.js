const meshes = [
  "<modpack_name>:iron_mesh",
  "<modpack_name>:gold_mesh",
  "<modpack_name>:diamond_mesh",
  "<modpack_name>:netherite_mesh",
];

const sifting = [
  {
    block: "minecraft:sand",
    output: [
      ["minecraft:raw_gold", 0.2],
      ["minecraft:raw_copper", 0.3],
      ["minecraft:clay_ball", 0.2],
      ["thermal:raw_nickel", 0.1],
      ["thermal:raw_silver", 0.1],
      ["mekanism:fluorite_gem", 0.1],
      ["minecraft:raw_iron", 0.4],
      ["minecraft:redstone", 0.3],
      ["minecraft:glowstone_dust", 0.2],
    ],
  },
  {
    block: "minecraft:gravel",
    output: [
      ["minecraft:lapis_lazuli", 0.1],
      ["thermal:cinnabar", 0.1],
      ["minecraft:diamond", 0.05],
      ["minecraft:emerald", 0.05],
      ["minecraft:iron_nugget", 0.7],
      ["minecraft:gold_nugget", 0.4],
      ["thermal:lead_nugget", 0.3],
      ["minecraft:amethyst_shard", 0.1],
      ["thermal:apatite", 0.2],
      ["thermal:sulfur", 0.1],
    ],
  },
  {
    block: "minecraft:dirt",
    output: [
      ["hexerei:sage_seed", 0.2],
      ["botania:grass_seeds", 0.35],
      ["minecraft:wheat_seeds", 0.6],
      ["minecraft:oak_sapling", 0.25],
    ],
  },
];

ServerEvents.recipes((event) => {
  meshes.forEach((e, i) => {
    sifting.forEach((element, index) => {
      let items = [];
      element.output.forEach((item, idx) => {
        let chance = item[1];
        switch (e) {
          case "<modpack_name>:iron_mesh":
            chance += 0.05;
            break;

          case "<modpack_name>:gold_mesh":
            chance += 0.08;
            break;

          case "<modpack_name>:diamond_mesh":
            chance += 0.1;
            break;

          case "<modpack_name>:netherite_mesh":
            chance += 0.12;
            break;
        }

        items.push(Item.of(item[0]).withChance(chance).toJson());
      });

      event.recipes.createsifterSifting(items, [element.block, e]);
    });
  });
});
