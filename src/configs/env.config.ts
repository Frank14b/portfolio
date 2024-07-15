export const ENV_CONFIG = {
    SMTP: {
        from: process.env.NEXT_PUBLIC_SMTP_FROM,
        hostname: process.env.NEXT_PUBLIC_SMTP_HOST,
        username: process.env.NEXT_PUBLIC_SMTP_USER,
        password: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
        port: process.env.NEXT_PUBLIC_SMTP_PORT,
    }
}