import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import api from "@/api/axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("sending");

        try {
            await api.post("/contact", formData);

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
            <p className="text-4xl font-bold tracking-tight">
                Contact
            </p>

            <div className="w-full max-w-2xl rounded-xl border border-gray-200 p-8 shadow-sm">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                >
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>

                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="cursor-pointer bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                    >
                        {status === "sending" ? "Sending..." : "Submit"}
                    </Button>

                    {status === "success" && (
                        <p className="text-center text-green-600">
                            Message sent successfully!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-center text-red-600">
                            Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;