const APP_CONFIG = {
    EMAIL_REGEX: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    MIN_PASSWORD_LENGTH: 6,
    API_KEY: import.meta.env.VITE_API_KEY,
    AUTH_DOMAIN: import.meta.env.VITE_AUTH_DOMAIN,
    PROJECT_ID: import.meta.env.VITE_PROJECT_ID,
    STORAGE_BUCKET: import.meta.env.VITE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: import.meta.env.VITE_MESSAGING_SENDER_ID,
    APP_ID: import.meta.env.VITE_API_ID
}

export default APP_CONFIG