'use client';

import { useState } from 'react';

interface DemoFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
    const [formData, setFormData] = useState({
        businessEmail: '',
        firstName: '',
        lastName: '',
        companyName: '',
        sapUsers: '',
        partnerName: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.businessEmail) {
            newErrors.businessEmail = 'Business email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
            newErrors.businessEmail = 'Please enter a valid email address';
        }

        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.companyName) {
            newErrors.companyName = 'Company name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Create email content
        const emailSubject = 'Demo Request - AgentAll AI for SAP Business One';
        const emailBody = `
Dear AgentAll AI Team,

I would like to request a demo of AgentAll AI for SAP Business One. Please find my details below:

Contact Information:
• Business Email: ${formData.businessEmail}
• First Name: ${formData.firstName}
• Last Name: ${formData.lastName}
• Company Name: ${formData.companyName}

SAP Business One Details:
• SAP Business One Users: ${formData.sapUsers || 'Not specified'}
• SAP Business One Partner Name: ${formData.partnerName || 'Not specified'}

I look forward to hearing from you soon.

Best regards,
${formData.firstName} ${formData.lastName}
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:service@agentall.ai?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Close the modal
        onClose();
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-2 lg:p-4">
            <div className="bg-white card-shadow-white max-w-lg w-full max-h-[90vh] flex flex-col">
                {/* Header - 固定 */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-xl lg:text-2xl font-serif-display text-foreground">
                        Get a Demo
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form - 可滚动 */}
                <div className="flex-1 overflow-y-auto">
                    <form id="demo-form" onSubmit={handleSubmit} className="p-4 lg:p-6 space-y-4 lg:space-y-6">
                        {/* Business Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Business Email *
                            </label>
                            <p className="text-xs text-gray-500 mb-2">
                                Please use a business email to be connected with our sales team
                            </p>
                            <input
                                type="email"
                                value={formData.businessEmail}
                                onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                                placeholder="Enter your work email"
                                className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 border transition-colors ${errors.businessEmail
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:border-primary'
                                    } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                            />
                            {errors.businessEmail && (
                                <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>
                            )}
                        </div>

                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    placeholder="Enter your first name"
                                    className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 border transition-colors ${errors.firstName
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-gray-300 focus:border-primary'
                                        } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    placeholder="Enter your last name"
                                    className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 border transition-colors ${errors.lastName
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-gray-300 focus:border-primary'
                                        } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                value={formData.companyName}
                                onChange={(e) => handleInputChange('companyName', e.target.value)}
                                placeholder="Enter your company's name"
                                className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 border transition-colors ${errors.companyName
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:border-primary'
                                    } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                            />
                            {errors.companyName && (
                                <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                            )}
                        </div>

                        {/* SAP Business One Users */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                SAP Business One Users (Optional)
                            </label>
                            <select
                                value={formData.sapUsers}
                                onChange={(e) => handleInputChange('sapUsers', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <option value="">Select SAP Business One users</option>
                                <option value="<10">&lt;10</option>
                                <option value="10-50">10-50</option>
                                <option value=">50">&gt;50</option>
                            </select>
                        </div>

                        {/* Partner Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your SAP Business One Partner Name (Optional)
                            </label>
                            <input
                                type="text"
                                value={formData.partnerName}
                                onChange={(e) => handleInputChange('partnerName', e.target.value)}
                                placeholder="Enter your partner name"
                                className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                    </form>
                </div>

                {/* Footer - 固定 */}
                <div className="p-6 border-t border-gray-200 flex-shrink-0">
                    {/* Legal Disclaimer */}
                    <p className="text-xs text-gray-600 mb-4">
                        By submitting this form, you agree to AgentAll AI&apos;s{' '}
                        <a href="#" className="text-primary underline hover:text-primary/80">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-primary underline hover:text-primary/80">
                            Privacy Policy
                        </a>
                        .
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        form="demo-form"
                        className="w-full bg-primary text-white py-2.5 lg:py-3 px-6 font-medium hover:bg-primary/90 transition-colors"
                    >
                        Get a Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
