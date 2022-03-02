import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Custom Fog",
	"Setadokalo",
	"A mod allowing you to customize the appearance of fog in your world.",
)
.icon("https://cdn.modrinth.com/data/2JyZgJxC/icon.png")
.add_version(15, 16, 17)
.add_category("Fog")
.add_link(
	{ host: "curseforge" },
	{ host: "modrinth" },
	{ host: "github" }
);