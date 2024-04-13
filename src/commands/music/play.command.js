import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("play")
  .setDescription("Plays a song")
  .addStringOption((input) => {
    return input
      .setName("query")
      .setDescription("The query to search song")
      .setRequired(true);
  });

export async function execute(interaction) {
  await interaction.reply(
    `Your query: ${interaction.options.getString("query")}`
  );
}
