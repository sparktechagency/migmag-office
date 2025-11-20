"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings, Shield, Zap, BarChart3, Cookie } from "lucide-react"
// import { setCookiePreferences, getCookiePreferences } from "@/app/actions/cookie-actions"
import { useEffect } from "react"
import { getCookiePreferences, setCookiePreferences } from "./cookie-actions";


interface CookiePreferences {
    necessary: boolean
    functional: boolean
    analytics: boolean
    marketing: boolean
}

export default function CookieSettingsButton() {
    const [open, setOpen] = useState(false)
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false,
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadPreferences = async () => {
            const saved = await getCookiePreferences()
            if (saved) {
                setPreferences(saved)
            }
        }
        loadPreferences()
    }, [])

    const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: key === "necessary" ? true : value,
        }))
    }

    const handleSave = async () => {
        setIsLoading(true)
        await setCookiePreferences(preferences)
        setOpen(false)
        setIsLoading(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Cookie Settings
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Cookie Preferences
                    </DialogTitle>
                    <DialogDescription>Manage your cookie preferences. Changes will be saved automatically.</DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="flex items-start justify-between gap-4 p-4 border rounded-lg bg-gray-50">
                        <div className="flex items-start gap-3 flex-1">
                            <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                                <Label className="text-base font-medium">Strictly Necessary</Label>
                                <p className="text-sm text-gray-600 mt-1">Essential cookies that cannot be disabled.</p>
                            </div>
                        </div>
                        <Switch checked={true} disabled={true} className="mt-1" />
                    </div>

                    <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                        <div className="flex items-start gap-3 flex-1">
                            <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                                <Label className="text-base font-medium">Functional</Label>
                                <p className="text-sm text-gray-600 mt-1">Enhanced functionality and personalization.</p>
                            </div>
                        </div>
                        <Switch
                            checked={preferences.functional}
                            onCheckedChange={(checked) => handlePreferenceChange("functional", checked)}
                            className="mt-1"
                        />
                    </div>

                    <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                        <div className="flex items-start gap-3 flex-1">
                            <BarChart3 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                            <div>
                                <Label className="text-base font-medium">Analytics</Label>
                                <p className="text-sm text-gray-600 mt-1">Help us improve by analyzing usage patterns.</p>
                            </div>
                        </div>
                        <Switch
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                            className="mt-1"
                        />
                    </div>

                    <div className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                        <div className="flex items-start gap-3 flex-1">
                            <Cookie className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                            <div>
                                <Label className="text-base font-medium">Marketing</Label>
                                <p className="text-sm text-gray-600 mt-1">Personalized ads and marketing campaigns.</p>
                            </div>
                        </div>
                        <Switch
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                            className="mt-1"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={handleSave} disabled={isLoading}>
                        Save Preferences
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
