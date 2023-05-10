// priority: 0

StartupEvents.registry("item", (event) => {
  event
    .create("<modpack_name>:iron_mesh", "createsifter:mesh")
    .displayName("Iron Mesh")
    .parentModel("createsifter:block/meshes/custom_mesh")
    .texture("1", "<modpack_name>:item/iron_mesh");

  event
    .create("<modpack_name>:gold_mesh", "createsifter:mesh")
    .displayName("Gold Mesh")
    .parentModel("createsifter:block/meshes/custom_mesh")
    .texture("1", "<modpack_name>:item/gold_mesh");

  event
    .create("<modpack_name>:diamond_mesh", "createsifter:mesh")
    .displayName("Diamond Mesh")
    .parentModel("createsifter:block/meshes/custom_mesh")
    .texture("1", "<modpack_name>:item/diamond_mesh");

  event
    .create("<modpack_name>:netherite_mesh", "createsifter:mesh")
    .displayName("Netherite Mesh")
    .parentModel("createsifter:block/meshes/custom_mesh")
    .texture("1", "<modpack_name>:item/netherite_mesh");
});
