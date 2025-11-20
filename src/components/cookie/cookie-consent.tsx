"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Cookie, Settings, Shield, BarChart3, Zap } from "lucide-react"
import { getCookiePreferences, setCookiePreferences } from "./cookie-actions"


interface CookiePreferences {
    necessary: boolean
    functional: boolean
    analytics: boolean
    marketing: boolean
}

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false,
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const checkConsent = async () => {
            const savedPreferences = await getCookiePreferences()
            if (!savedPreferences) {
                setShowBanner(true)
            } else {
                setPreferences(savedPreferences)
            }
        }
        checkConsent()
    }, [])

    const handleAcceptAll = async () => {
        setIsLoading(true)
        const allAccepted = {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true,
        }
        await setCookiePreferences(allAccepted)
        setPreferences(allAccepted)
        setShowBanner(false)
        setIsLoading(false)
    }

    const handleRejectAll = async () => {
        setIsLoading(true)
        const onlyNecessary = {
            necessary: false,
            functional: false,
            analytics: false,
            marketing: false,
        }
        await setCookiePreferences(onlyNecessary)
        setPreferences(onlyNecessary)
        setShowBanner(false)
        setIsLoading(false)
    }

    const handleSavePreferences = async () => {
        setIsLoading(true)
        await setCookiePreferences(preferences)
        setShowBanner(false)
        setShowSettings(false)
        setIsLoading(false)
    }

    const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: key === "necessary" ? true : value, // Necessary cookies cannot be disabled
        }))
    }

    if (!showBanner) return null

    return (
        <>
            {/* Cookie Banner */}
            <div  className="fixed bottom-0 border   left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
                <div className="container mx-auto max-w-6xl">
                    <Card className="border-0 shadow-none">
                        <CardContent className="">
                            <div className="flex items-start gap-4">
                                <Cookie className="h-8   w-8 text-orange-500 flex-shrink-0 mt-1" />
                                <div className="flex-1">
                                    <CardTitle className="text-xl lg:text-2xl mb-2">We use cookies</CardTitle>
                                    <CardDescription className="lg:text-xl text-sm  mb-4">
                                        {/* We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                                        traffic. By clicking "Accept All", you consent to our use of cookies. You can customize your
                                        preferences or learn more in our{" "} */}
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Privacy Policy
                                        </a>
                                        .
                                    </CardDescription>
                                    <div className="flex flex-wrap  gap-3">
                                        <Button onClick={handleAcceptAll} disabled={isLoading} className="cursor-pointer">
                                            Accept All
                                        </Button>
                                        <Button variant="outline" onClick={handleRejectAll} className="cursor-pointer" disabled={isLoading}>
                                            Reject All
                                        </Button>
                                        <Button variant="outline" className="cursor-pointer" onClick={() => setShowSettings(true)} disabled={isLoading}>
                                            <Settings className="h-4 w-4 mr-2" />
                                            Customize
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Settings Dialog */}
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Settings className="h-5 w-5" />
                            Cookie Preferences
                        </DialogTitle>
                        <DialogDescription>
                            Choose which cookies you want to allow. You can change these settings at any time.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                        {/* Necessary Cookies */}
                        <div className="flex items-start justify-between gap-4 p-4 border rounded-lg bg-gray-50">
                            <div className="flex items-start gap-3 flex-1">
                                <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <Label className="text-base font-medium">Strictly Necessary</Label>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies are essential for the website to function properly. They enable core functionality
                                        such as security, network management, and accessibility.
                                    </p>
                                </div>
                            </div>
                            <Switch checked={preferences.necessary} disabled={true} className="mt-1" />
                        </div>

                        {/* Functional Cookies */}
                        <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                            <div className="flex items-start gap-3 flex-1">
                                <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <Label className="text-base font-medium">Functional</Label>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies enable enhanced functionality and personalization, such as remembering your
                                        preferences and settings.
                                    </p>
                                </div>
                            </div>
                            <Switch
                                checked={preferences.functional}
                                onCheckedChange={(checked) => handlePreferenceChange("functional", checked)}
                                className="mt-1"
                            />
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                            <div className="flex items-start gap-3 flex-1">
                                <BarChart3 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                <div>
                                    <Label className="text-base font-medium">Analytics</Label>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting
                                        information anonymously.
                                    </p>
                                </div>
                            </div>
                            <Switch
                                checked={preferences.analytics}
                                onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                                className="mt-1"
                            />
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                            <div className="flex items-start gap-3 flex-1">
                                <Cookie className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                                <div>
                                    <Label className="text-base font-medium">Marketing</Label>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies are used to deliver personalized advertisements and measure the effectiveness of
                                        advertising campaigns.
                                    </p>
                                </div>
                            </div>
                            <Switch
                                checked={preferences.marketing}
                                onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                                className="mt-1"
                            />
                        </div>
                    </div>

                    <DialogFooter className="gap-2">
                        <Button variant="outline" onClick={() => setShowSettings(false)} disabled={isLoading}>
                            Cancel
                        </Button>
                        <Button onClick={handleSavePreferences} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                            Save Preferences
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
