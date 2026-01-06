// Cookie management utilities

const COOKIE_CONSENT_KEY = "cookie-consent"

export function getCookieConsent(): boolean | null {
  if (typeof window === "undefined") return null

  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (consent === null) return null
  return consent === "accepted"
}

export function setCookieConsent(accepted: boolean): void {
  if (typeof window === "undefined") return

  localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? "accepted" : "declined")
}

export function hasCookieConsent(): boolean {
  return getCookieConsent() !== null
}
