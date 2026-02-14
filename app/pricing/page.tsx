'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoForm';
import { useI18n } from '../i18n/I18nContext';

export default function Pricing() {
    const { t } = useI18n();
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Navigation currentPage="pricing" onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-0 relative bg-white">
                {/* 左侧粉色弥散背景 */}
                <div className="absolute inset-0 drift-left z-0"></div>
                {/* 右侧橙色弥散背景 */}
                <div className="absolute inset-0 drift-right z-0"></div>
                <div className="max-w-7xl mx-auto py-24 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-center gap-16">
                        {/* B1 Agent Subscription Card */}
                        <div className="flex-1 max-w-lg space-y-9 py-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                            </div>
                            <h2 className="text-5xl font-serif-display text-black">
                                {t('pricing.agenticAiTitle')}
                            </h2>
                            <div className="w-30 h-px bg-pink-500 solid-border"></div>
                            <p className="text-lg text-black h-14 flex items-start">
                                {t('pricing.standard')}
                            </p>

                            {/* Main Pricing Card */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 border border-pink-300/30 card-shadow-small transition-all duration-500 hover:bg-white/90 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer group">
                                <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                    <div className="space-y-4">
                                        <h3 className="text-lg text-black">
                                            {t('pricing.users')}<br />
                                            {t('pricing.tokens')}<br />
                                            <span className="text-pink-500">{t('pricing.period')}</span>
                                        </h3>
                                        {/* <p className="text-lg text-black">B1 Agent Subscription</p> */}
                                    </div>
                                    <div className="text-right w-32">
                                        <div className="text-4xl lg:text-5xl font-serif-display text-pink-500 relative inline-block group-hover:before:animate-highlight-pink-1">3,000</div>
                                        <div className="text-2xl lg:text-3xl font-serif-display text-pink-500 relative inline-block group-hover:before:animate-highlight-pink-2">Euro</div>
                                    </div>
                                </div>
                                {/* 底部线条动画 */}
                                <div className="w-0 group-hover:w-full h-0.5 bg-pink-500 transition-all duration-500 mt-4"></div>
                            </div>

                            {/* Additional Usage Section */}
                            <div className="space-y-3">
                                <h3 className="text-lg text-gray-600">{t('pricing.additionalUsage')}</h3>

                                {/* Additional User */}
                                <div className="bg-white/50 backdrop-blur-sm p-3 border border-gray-200/50 hover:bg-white/70 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-700 relative inline-block group-hover:before:animate-highlight-pink-1">{t('pricing.additionalUser')}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-medium text-gray-700">30 {t('pricing.price')}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Agent */}
                                <div className="bg-white/50 backdrop-blur-sm p-3 border border-gray-200/50 hover:bg-white/70 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-700 relative inline-block group-hover:before:animate-highlight-pink-1">{t('pricing.additionalAgent')}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-medium text-gray-700">30 {t('pricing.price')}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Tokens */}
                                <div className="bg-white/50 backdrop-blur-sm p-3 border border-gray-200/50 hover:bg-white/70 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-700 relative inline-block group-hover:before:animate-highlight-pink-1">{t('pricing.additionalTokens')}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-medium text-gray-700">30 {t('pricing.price')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise AI Agent Build Platform Card */}
                        <div className="flex-1 max-w-lg space-y-9 py-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-serif-display text-black">
                                {t('pricing.platformTitle')}
                            </h2>
                            <div className="w-30 h-px bg-orange-500 solid-border"></div>
                            <p className="text-lg text-black h-14 flex items-start">
                                {t('pricing.platformSubtitle')}
                            </p>

                            {/* Enterprise Pricing Card */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 border border-orange-300/30 card-shadow-small transition-all duration-500 hover:bg-white/90 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer group">
                                <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                    <div className="space-y-4">
                                        <h3 className="text-lg text-black">
                                            {t('pricing.users')}<br />
                                            <span className="text-sm text-gray-600 mt-[16px]"># limit to B1 agent subscription</span><br />
                                            <span className="text-orange-500">{t('pricing.period')}</span>
                                        </h3>
                                        {/* <p className="text-lg text-black">B1 Agent Subscription</p> */}
                                    </div>
                                    <div className="text-right w-32">
                                        <div className="text-4xl lg:text-5xl font-serif-display text-orange-500 relative inline-block group-hover:before:animate-highlight-orange-1">2,000</div>
                                        <div className="text-2xl lg:text-3xl font-serif-display text-orange-500 relative inline-block group-hover:before:animate-highlight-orange-2">Euro</div>
                                    </div>
                                </div>
                                {/* 底部线条动画 */}
                                <div className="w-0 group-hover:w-full h-0.5 bg-orange-500 transition-all duration-500 mt-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Demo Form Modal */}
            <DemoForm
                isOpen={isDemoFormOpen}
                onClose={() => setIsDemoFormOpen(false)}
            />
        </div>
    );
}
