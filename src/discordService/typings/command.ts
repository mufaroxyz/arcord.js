import {
  CommandInteraction,
  CommandInteractionOptionResolver,
  ContextMenuCommandBuilder,
  GuildMember,
  Interaction,
  PermissionResolvable,
  SlashCommandBuilder,
} from 'discord.js';
import Bot from '../bot';

interface CommandRunOptions {
  client: Bot;
  interaction: CommandInteraction;
  args: CommandInteractionOptionResolver;
}

type RunFunction = (options: CommandRunOptions) => Promise<void>;

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  data: ContextMenuCommandBuilder | SlashCommandBuilder;
  run: RunFunction;
};
