"use server"

import { cookies } from "next/headers"

interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export async function setCookiePreferences(preferences: CookiePreferences) {
  const cookieStore = await cookies()

  // Set the main consent cookie
  cookieStore.set("cookie-consent", JSON.stringify(preferences), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  })

  // Set individual preference cookies for easy access
  cookieStore.set("cookies-necessary", preferences.necessary.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  })

  cookieStore.set("cookies-functional", preferences.functional.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  })

  cookieStore.set("cookies-analytics", preferences.analytics.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  })

  cookieStore.set("cookies-marketing", preferences.marketing.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  })
}

export async function getCookiePreferences(): Promise<CookiePreferences | null> {
  const cookieStore = await cookies()
  const consentCookie = cookieStore.get("cookie-consent")

  if (!consentCookie) {
    return null
  }

  try {
    return JSON.parse(consentCookie.value) as CookiePreferences
  } catch {
    return null
  }
}

export async function clearCookiePreferences() {
  const cookieStore = await cookies()

  cookieStore.delete("cookie-consent")
  cookieStore.delete("cookies-necessary")
  cookieStore.delete("cookies-functional")
  cookieStore.delete("cookies-analytics")
  cookieStore.delete("cookies-marketing")
}
