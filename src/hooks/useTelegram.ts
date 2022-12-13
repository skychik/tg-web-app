import {TelegramWebApps} from "../types/tg";

export const useTelegram: () => TelegramWebApps.WebApp = () => {
    return Telegram.WebApp
}