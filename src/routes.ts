/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that used for authentication
 * These routes redirect to /settings if user already logged in
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register"];

/**
 * Prefix for api authentication routes
 * Routes that startwith this prefix are used for authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default logging path after logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
