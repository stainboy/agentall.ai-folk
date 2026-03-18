'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoForm';
import { useI18n } from '../i18n/I18nContext';

export default function Company() {
    const { t } = useI18n();
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
    
    return (
        <div className="min-h-screen">
            <Navigation currentPage="company" onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Page Title Section */}
            <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center space-y-6 lg:space-y-9">
                        <div className="group cursor-pointer space-y-9">
                            <div className="flex justify-center">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </div>
                            <h1 className="section-title text-foreground">
                                {t('company.title')}
                            </h1>
                            <p className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                                {t('company.subtitle')}
                            </p>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center space-y-6 lg:space-y-9 mb-12 lg:mb-16">
                        <div className="group cursor-pointer space-y-9">
                            <div className="flex justify-center">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </div>
                            <h2 className="section-title text-foreground">
                                {t('company.aboutUsTitle')}
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6 text-base lg:text-lg text-foreground/80 leading-relaxed">
                        <p>
                            {t('company.aboutUsText1')}
                        </p>
                        <p>
                            {t('company.aboutUsText2')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center space-y-6 lg:space-y-9 mb-12 lg:mb-16">
                        <div className="group cursor-pointer space-y-9">
                            <div className="flex justify-center">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </div>
                            <h2 className="section-title text-foreground">
                                {t('company.visionTitle')}
                            </h2>
                            <h3 className="text-xl lg:text-2xl text-primary max-w-4xl mx-auto font-black">
                                {t('company.visionSubtitle')}
                            </h3>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6 text-base lg:text-lg text-foreground/80 leading-relaxed">
                        <p>
                            {t('company.visionContent')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Data Centers Section */}
            <section className="py-12 lg:py-24 mb-[6rem]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center space-y-6 lg:space-y-9 mb-12 lg:mb-16">
                        <div className="group cursor-pointer space-y-9">
                            <div className="flex justify-center">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </div>
                            <h2 className="section-title text-foreground">
                                {t('company.dataCentersTitle')}
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6 text-base lg:text-lg text-foreground/80 leading-relaxed">
                        <p>
                            {t('company.dataCentersText')}
                        </p>
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

