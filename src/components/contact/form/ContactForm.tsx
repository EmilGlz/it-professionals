'use client'
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData)
        const response = await fetch('https://api.yourbackend.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } else {
            setSuccessMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="p-8 rounded-lg max-w-[866px] mx-auto text-white">
            <form onSubmit={handleSubmit}>
                <div className="flex space-x-4 mb-4">
                    <label className="flex-1">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full mt-2 p-2 rounded-[40px] border border-gray-700 bg-gray-800 text-white"
                        />
                    </label>
                    <label className="flex-1">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your E-mail"
                            required
                            className="w-full mt-2 p-2 rounded-[40px] border border-gray-700 bg-gray-800 text-white"
                        />
                    </label>
                </div>
                <div className="flex space-x-4 mb-4">
                    <label className="flex-1">
                        Subject
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Your subject"
                            required
                            className="w-full mt-2 p-2 rounded-[40px] border border-gray-700 bg-gray-800 text-white"
                        />
                    </label>
                    <label className="flex-1">
                        Phone
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                            required
                            className="w-full mt-2 p-2 rounded-[40px] border border-gray-700 bg-gray-800 text-white"
                        />
                    </label>
                </div>
                <label className="block mb-4">
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message here"
                        required
                        className="w-full mt-2 p-2 rounded-[20px] border border-gray-700 bg-gray-800 text-white h-32"
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Submit
                </button>
            </form>
            {successMessage && (
                <p className="mt-4 text-green-400">{successMessage}</p>
            )}
        </div>
    );
};

export default ContactForm;
