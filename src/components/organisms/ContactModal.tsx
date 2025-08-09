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
} from "@/components/atoms/dialog"
import { Input } from "@/components/atoms/input"
import { Textarea } from "@/components/atoms/textarea"
import { Button } from "@/components/atoms/button"
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
                toast.success("Your message has been sent successfully. Thank you!")
                form.reset()
            } else {
                toast.error("Something went wrong.")
            }
        } catch (err) {
            toast.error("Submission failed.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="py-1.5 px-4 hover:bg-primary/10 cursor-pointer capitalize bg-white border border-primary text-primary rounded-3xl">Send me a message</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl max-h-[90dvh] overflow-y-auto rounded-3xl p-8">
                <DialogHeader>
                    <DialogTitle>Get in Touch</DialogTitle>
                    <DialogDescription>
                        Leave your number and message, and I’ll contact you soon.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 scroll-pb-32">
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
                            placeholder="Email"
                            required
                            pattern="[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\.[a-z]{2,}$"
                            title="Enter a valid email"
                        />
                    </div>
                    <div>
                        <Textarea name="message" placeholder="Type something" required />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading} className="y-1.5 px-8 hover:bg-primary/70 cursor-pointer bg-primary rounded-3xl">
                            {loading ? "Sending..." : "Shoot"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ContactModal
