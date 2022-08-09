import { Utils } from "../core/utils/utils";
import { AppRoutes } from "./app-enums";

export const MAIN_MENU_TABS = [
  {label: Utils.firstUpperCase(AppRoutes.Home), icon: 'pi pi-fw pi-home'},
  {label: Utils.firstUpperCase(AppRoutes.Documentation), icon: 'pi pi-fw pi-file'},
  {label: Utils.firstUpperCase(AppRoutes.Settings), icon: 'pi pi-fw pi-cog'}
];

export const INITIAL_TEXTAREA_CONTENT: string = ' Hello! I am Fede\'s AI. You can ask me whatever you like! \n\n You: ';