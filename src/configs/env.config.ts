export const ENV_CONFIG = {
  SMTP: {
    from: process.env.NEXT_PUBLIC_SMTP_FROM,
    hostname: process.env.NEXT_PUBLIC_SMTP_HOST,
    username: process.env.NEXT_PUBLIC_SMTP_USER,
    password: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
  },
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },
};
