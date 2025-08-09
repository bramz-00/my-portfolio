import { useTranslation } from "react-i18next"
import { Switch } from "@/components/atoms/switch"
import { Label } from "@/components/atoms/label"
import { useState, useEffect } from "react"

export function LanguageSwitcher() {
  const { i18n } = useTranslation() 
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en")

  useEffect(() => {
    i18n.changeLanguage(isEnglish ? "en" : "fr")
  }, [isEnglish, i18n])

  return (
    <div className="flex items-center space-x-2 ">
      <Label htmlFor="lang-switch" className="w-4">{isEnglish ? "EN" : "FR"}</Label>
      <Switch
        id="lang-switch"
        className="cursor-pointer"
        checked={isEnglish}
        onCheckedChange={(checked) => setIsEnglish(checked)}
      />
    </div>
  )
}
