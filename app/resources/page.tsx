'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoForm';
import Logo from '../components/Logo';
import { useI18n } from '../i18n/I18nContext';

export default function Resources() {
    const { t } = useI18n();
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
    
    const resourceItems = [
        {
            id: 'product-collaterals',
            label: t('resources.productCollaterals'),
            position: 'top-right',
            angle: 85,
            offset: 200,
            animationDelay: 0,
        },
        {
            id: 'user-manual',
            label: t('resources.userManual'),
            position: 'right',
            angle: 15,
            offset: 280,
            animationDelay: 0.2,
        },
        {
            id: 'configuration-guide',
            label: t('resources.configurationGuide'),
            position: 'bottom-right',
            angle: -15,
            offset: 280,
            animationDelay: 0.4,
        },
        {
            id: 'partner-portal',
            label: t('resources.partnerPortal'),
            position: 'bottom-left',
            angle: -115,
            offset: 180,
            animationDelay: 0.6,
        },
        {
            id: 'product-demo',
            label: t('resources.productDemo'),
            position: 'top-left',
            angle: 95,
            offset: 280,
            animationDelay: 0.8,
        },
    ];

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [verificationCode, setVerificationCode] = React.useState('');

    return (
        <div className="min-h-screen h-screen">
            <Navigation currentPage="resources" onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Resources Section */}
            <section className="min-h-screen py-24 lg:py-32 flex items-center justify-center relative">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Left Side - Mind Map */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center mb-8">
                                <h2 className="section-title-small text-foreground mb-2">
                                    {t('resources.title')}
                                </h2>
                                <p className="text-sm lg:text-base text-foreground/70">
                                    {t('resources.subtitle')}
                                </p>
                            </div>

                            {/* Mind Map Container */}
                            <div className="relative w-full max-w-2xl mx-auto h-120">
                                {/* Central Logo */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="bg-white rounded-full p-8 shadow-2xl transition-all duration-300 hover:scale-110">
                                        <Logo size={80} showText={false} />
                                    </div>
                                </div>

                                {/* Resource Items */}
                                {resourceItems.map((item, index) => {
                                    const radian = (item.angle * Math.PI) / 180;
                                    const x = Math.cos(radian) * item.offset;
                                    const y = Math.sin(radian) * item.offset;

                                    return (
                                        <React.Fragment key={item.id}>
                                            {/* Resource Card with Animation */}
                                            <div
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                                                style={{
                                                    animation: `float-${index} 8s ease-in-out infinite`,
                                                    animationDelay: `${item.animationDelay}s`,
                                                }}
                                            >
                                                <div
                                                    className="bg-white/80 backdrop-blur-sm px-6 py-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary"
                                                    style={{
                                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                                    }}
                                                >
                                                    <p className="text-base lg:text-lg text-foreground font-medium whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Mobile Layout */}
                            <div className="lg:hidden mt-8 w-full max-w-md space-y-3">
                                {resourceItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white/80 backdrop-blur-sm px-6 py-4 shadow-lg border-2 border-transparent"
                                    >
                                        <p className="text-base text-foreground font-medium text-center">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Login Form */}
                        <div className="flex flex-col items-center justify-center bg-white p-8 lg:p-12">
                            {/* Logo and Title */}
                            <div className="flex flex-col items-center mb-8">
                                <Logo size={40} showText={true} />
                            </div>

                            {/* Welcome Title */}
                            <h2 className="text-4xl font-serif-display text-foreground mb-8">
                                {t('resources.welcome')}
                            </h2>

                            {/* Login Form */}
                            <div className="w-full space-y-6">
                                {/* Phone Number Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('resources.phoneLabel')}
                                    </label>
                                    <div className="flex items-center border border-gray-300 px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                                        <svg
                                            className="w-5 h-5 text-gray-400 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <input
                                            type="tel"
                                            placeholder={t('resources.phonePlaceholder')}
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="flex-1 outline-none text-sm"
                                        />
                                        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                                            {t('resources.sendCode')}
                                        </button>
                                    </div>
                                </div>

                                {/* Verification Code Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('resources.codeLabel')}
                                    </label>
                                    <div className="flex items-center border border-gray-300 px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                                        <svg
                                            className="w-5 h-5 text-gray-400 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder={t('resources.codePlaceholder')}
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                            className="flex-1 outline-none text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Continue Button */}
                                <button className="w-full bg-primary text-white py-4 font-medium hover:bg-primary/90 transition-colors duration-300">
                                    {t('resources.continue')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <DemoForm
                isOpen={isDemoFormOpen}
                onClose={() => setIsDemoFormOpen(false)}
            />
        </div>
    );
}

