'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoForm';
import { IMAGES } from '../utils/images';
import { useI18n } from '../i18n/I18nContext';

function CheckIcon() {
    return (
        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );
}

export default function APACCampaign() {
    const { t } = useI18n();
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <Navigation currentPage="campaign" onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-700" />
                <div className="relative max-w-4xl mx-auto px-4 lg:px-8 py-16 lg:py-24 text-center">
                    <p className="text-purple-200 text-xs tracking-[3px] uppercase font-semibold mb-5">
                        {t('campaign.tagline')}
                    </p>
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-serif-display">
                        {t('campaign.headline')}
                    </h1>
                    <p className="text-purple-200 text-lg lg:text-xl font-medium">
                        {t('campaign.subheadline')}
                    </p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-12 lg:py-16">
                <div className="max-w-3xl mx-auto px-4 lg:px-8">
                    <p
                        className="text-base lg:text-lg text-foreground/80 leading-relaxed [&_strong]:text-primary [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: t('campaign.intro') }}
                    />
                </div>
            </section>

            {/* Video Section */}
            <section className="pb-12 lg:pb-16">
                <div className="max-w-3xl mx-auto px-4 lg:px-8">
                    <a
                        href="https://youtu.be/vN6lipwRd0g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-purple-500/15 border border-purple-100">
                            <Image
                                src={IMAGES.CAMPAIGN_VIDEO_PLACEHOLDER}
                                alt={t('campaign.videoAlt')}
                                width={634}
                                height={353}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-12 lg:py-16">
                <div className="max-w-3xl mx-auto px-4 lg:px-8">
                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 lg:p-10">
                        <h2 className="text-xl lg:text-2xl font-bold text-primary text-center mb-8">
                            {t('campaign.whyPartner')}
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-3">
                                <CheckIcon />
                                <div>
                                    <p className="font-semibold text-foreground">{t('campaign.benefit1Title')}</p>
                                    <p
                                        className="text-sm text-foreground/60 mt-1 [&_strong]:text-primary [&_strong]:font-semibold"
                                        dangerouslySetInnerHTML={{ __html: t('campaign.benefit1Desc') }}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckIcon />
                                <div>
                                    <p className="font-semibold text-foreground">{t('campaign.benefit2Title')}</p>
                                    <p
                                        className="text-sm text-foreground/60 mt-1 [&_strong]:text-primary [&_strong]:font-semibold"
                                        dangerouslySetInnerHTML={{ __html: t('campaign.benefit2Desc') }}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckIcon />
                                <div>
                                    <p className="font-semibold text-foreground">{t('campaign.benefit3Title')}</p>
                                    <p
                                        className="text-sm text-foreground/60 mt-1 [&_strong]:text-primary [&_strong]:font-semibold"
                                        dangerouslySetInnerHTML={{ __html: t('campaign.benefit3Desc') }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaign Period Badge */}
            <section className="pb-12 lg:pb-16">
                <div className="flex justify-center">
                    <span className="inline-block bg-violet-500 text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full">
                        {t('campaign.period')}
                    </span>
                </div>
            </section>

            {/* Reward Cards */}
            <section className="pb-12 lg:pb-16">
                <div className="max-w-3xl mx-auto px-4 lg:px-8 space-y-5">
                    {/* Trailblazer Partners */}
                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 lg:p-10 text-white">
                        <h3 className="text-xl lg:text-2xl font-bold mb-4">
                            {t('campaign.trailblazerTitle')}
                        </h3>
                        <p
                            className="text-purple-200 mb-4 [&_strong]:text-white"
                            dangerouslySetInnerHTML={{ __html: t('campaign.trailblazerUnlock') }}
                        />
                        <ul className="space-y-2 text-purple-200 text-sm lg:text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-300 mt-1">•</span>
                                {t('campaign.trailblazerBenefit1')}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-300 mt-1">•</span>
                                {t('campaign.trailblazerBenefit2')}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-300 mt-1">•</span>
                                {t('campaign.trailblazerBenefit3')}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-300 mt-1">•</span>
                                {t('campaign.trailblazerBenefit4')}
                            </li>
                        </ul>
                        <div className="border-t border-white/20 mt-6 pt-6">
                            <h4 className="text-lg font-bold mb-2">
                                {t('campaign.topPartnerTitle')}
                            </h4>
                            <p
                                className="text-purple-200 [&_strong]:text-amber-300"
                                dangerouslySetInnerHTML={{ __html: t('campaign.topPartnerDesc') }}
                            />
                        </div>
                    </div>

                    {/* AE Incentives */}
                    <div className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl p-8 lg:p-10 text-white">
                        <h3 className="text-xl lg:text-2xl font-bold mb-5">
                            {t('campaign.aeTitle')}
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-amber-300 text-lg mt-0.5">🎧</span>
                                <p
                                    className="text-purple-100 [&_strong]:text-white [&_strong:last-child]:text-amber-300"
                                    dangerouslySetInnerHTML={{ __html: t('campaign.aeTrailblazer') }}
                                />
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-amber-300 text-lg mt-0.5">📱</span>
                                <p
                                    className="text-purple-100 [&_strong]:text-white [&_strong:last-child]:text-amber-300"
                                    dangerouslySetInnerHTML={{ __html: t('campaign.aeTop') }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-purple-800 to-purple-950 py-16 lg:py-20">
                <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-serif-display">
                        {t('campaign.ctaTitle')}
                    </h2>
                    <p className="text-purple-300 mb-8 max-w-lg mx-auto leading-relaxed">
                        {t('campaign.ctaDesc')}
                    </p>
                    <a
                        href="mailto:admin@agentall.ai?subject=Asia%20Pacific%20Acceleration%20Campaign"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full text-sm lg:text-base tracking-wider transition-colors"
                    >
                        {t('campaign.ctaButton')}
                    </a>
                </div>
            </section>

            {/* Sign-off */}
            <section className="py-10">
                <div className="text-center">
                    <p className="text-primary text-lg font-bold">{t('campaign.happySelling')}</p>
                    <p className="text-foreground/50 text-sm mt-2 font-medium">{t('campaign.teamName')}</p>
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
