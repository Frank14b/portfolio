import { ENV_CONFIG } from "./";

const options = {
  ...ENV_CONFIG.SMTP,
};

export const EMAIL_CONFIGS = {
  options,
};