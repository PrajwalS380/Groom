/**
 * Deployment-level settings shared by the app and the build (vite.config.ts).
 * Plain constants only — no `import.meta.env`, so the build config can import it.
 */

/**
 * The groom side's live invitation, for the canonical link, link previews and the link guests share.
 * Left empty: on Vercel the build takes this site's own production address automatically
 * (VERCEL_PROJECT_PRODUCTION_URL, see vite.config.ts), and in the browser the link guests share falls
 * back to the page's own address — so it never points at the bride side's site. Set it (or VITE_SITE_URL)
 * if a custom domain is added.
 */
export const PRODUCTION_URL = ''

/**
 * WhatsApp number that receives RSVPs (the groom side's), in international format with digits
 * only (country code 91, no '+', spaces or punctuation). Change it here only.
 */
export const RSVP_WHATSAPP_NUMBER = '918553796906'

/**
 * The optional background soundtrack (off until a guest presses Play; never
 * autoplays). Replace the file in public/audio — or point this at another
 * properly licensed track — to change the music.
 */
export const SOUNDTRACK_SRC = '/audio/mangala-dhwani.mp3'
