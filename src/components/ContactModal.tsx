"use client"

import React, { useState } from "react"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner';

const ContactModal = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const res = await fetch("https://formsubmit.co/ajax/zakaria.braham@outlook.com", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            })

            const data = await res.json()

            if (data.success === "true" || data.success === true) {
                toast.success("✅ Message sent!")
                form.reset()

                // Simple client-side redirect (React)
                setTimeout(() => {
                    window.location.href = "/" // or any route you want
                }, 1000)
            } else {
                toast.error("❌ Something went wrong.")
            }
        } catch (err) {
            toast.error("❌ Submission failed.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="py-1.5 px-4 hover:bg-[#7611a6]/10 cursor-pointer capitalize bg-white border border-[#7611a6] text-[#7611a6] rounded-3xl">Send me a message</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl rounded-3xl p-8">
                <DialogHeader>
                    <DialogTitle>Get in Touch</DialogTitle>
                    <DialogDescription>
                        Leave your number and message, and I’ll contact you soon.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_autoresponse" value="Thank you! I’ll get back to you soon." />

                    <div>
                        <Input type="text" name="name" placeholder=" Name" required />
                    </div>
                       <div>
                        <Input
                            type="email"
                            name="email"
                            placeholder=" Email "
                            required
                            pattern="[0-9+ ]{6,}"
                            title="Enter a valid email"
                        />
                    </div>
                    <div>
                        <Textarea name="message" placeholder="Type something" required />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading} className="y-1.5 px-8 hover:bg-[#7611a6]/70 cursor-pointer bg-[#7611a6] rounded-3xl">
                            {loading ? "Sending..." : "Send"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ContactModal
