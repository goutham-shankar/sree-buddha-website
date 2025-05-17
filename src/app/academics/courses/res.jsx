import { useState } from 'react';

const ContactForm = () => {
    // Define the undergraduatePrograms array that was referenced but not defined
    const undergraduatePrograms = [
        { title: "Mechanical Engineering" },
        { title: "Electrical Engineering" },
        { title: "Computer Science" },
        { title: "Civil Engineering" },
        { title: "Information Technology" }
        // Add more programs as needed
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        interest: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Map the form fields to the API expected structure
        // Using the existing field names but mapping interest to program
        const data = {
            data: {
                Name: formData.name,
                Email: formData.email,
                Country: formData.country,
                Interest: formData.interest,
                Message: formData.message,
            }
        };

        console.log('Sending data:', JSON.stringify(data));

        try {
            // Fixed the double slash in the URL
            const response = await fetch('https://sbce.ac.in/api//api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                setStatus({ type: 'success', message: 'Form submitted successfully!' });
                console.log('API Response:', result);
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    country: '',
                    interest: '',
                    message: '',
                });
            } else {
                const errorText = await response.text();
                console.error('Response error:', errorText);
                throw new Error(`Failed to submit form: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', message: 'An error occurred while submitting the form. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="apply" className="py-16 bg-yellow-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-yellow-100 mb-8">
                                Our international admissions team is ready to assist you with any
                                questions you may have about studying at SBCE. Reach out to us
                                for personalized guidance.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                                        <a href="mailto:principal@sbce.ac.in" className="text-yellow-200 hover:text-white transition-colors">
                                            principal@sbce.ac.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                        <a href="tel:+919446014317" className="text-yellow-200 hover:text-white transition-colors">
                                            +91 9446014317
                                            +91 85903 32548
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Address</h3>
                                        <p className="text-yellow-200">
                                            Sree Buddha College of Engineering<br />
                                            Pattoor, P.O, Nooranad, Padanilam<br />
                                            Kerala, 690529, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg p-6 text-gray-900">
                            <h3 className="text-xl font-bold mb-4">Send us a Message</h3>

                            {/* Status Message Display */}
                            {status && (
                                <div
                                    className={`p-4 mb-4 rounded ${status.type === 'success'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        placeholder="Enter your full name"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        placeholder="Enter your email address"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        required
                                        disabled={loading}
                                    >
                                        <option value="">Select your country</option>
                                        <option value="UAE">United Arab Emirates</option>
                                        <option value="KSA">Saudi Arabia</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="India">India</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Program Selection (Interest) */}
                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                                        Program of Interest
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        required
                                        disabled={loading}
                                    >
                                        <option value="">Select a program</option>
                                        {undergraduatePrograms.map((program, index) => (
                                            <option key={index} value={program.title}>
                                                {program.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        placeholder="Enter your message"
                                        required
                                        disabled={loading}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className={`w-full px-6 py-3 bg-yellow-900 text-white font-medium rounded-md hover:bg-yellow-800 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;