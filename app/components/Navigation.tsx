'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '../i18n/types';

interface NavigationProps {
    currentPage?: string;
    onDemoClick?: () => void;
}

export default function Navigation({ currentPage, onDemoClick }: NavigationProps) {
    const { t, language, setLanguage } = useI18n();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showProductsPanel, setShowProductsPanel] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            setHideTimeout(null);
        }
        setShowProductsPanel(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowProductsPanel(false);
        }, 200); // 200ms延迟
        setHideTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // 滚动超过50px时显示背景
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, [hideTimeout]);

    return (
        <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 w-full border-b ${isScrolled
            ? 'bg-white/80 backdrop-blur-sm border-gray-200'
            : 'bg-transparent border-transparent'
            }`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
            <div className="mx-auto px-4 lg:px-8 py-3 lg:py-4">
                <div className="flex justify-between items-center lg:grid lg:grid-cols-3">
                    {/* 左侧 - Logo */}
                    <div className="flex items-center justify-start">
                        <Link href="/" className="flex items-center cursor-pointer">
                            <Logo size={32} showText={true} />
                        </Link>
                    </div>

                    {/* 中间 - 导航链接 */}
                    <div className="hidden lg:flex items-center justify-center space-x-8">
                        {/* Products dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'products' ? 'text-primary font-semibold' : 'text-black'}`}>
                                {t('nav.products')}
                            </div>

                            {/* Dropdown Panel */}
                            {showProductsPanel && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/60 backdrop-blur-sm shadow-xl border border-gray-200 py-4 min-w-[600px] animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-2 gap-4 px-4">
                                        <Link
                                            href="/products/agentic-ai"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="font-medium">{t('nav.agenticAiTitle')}</div>
                                            <div className="text-sm text-gray-500 mt-1">{t('nav.agenticAiDesc')}</div>
                                        </Link>
                                        <Link
                                            href="/products/platform"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="font-medium">{t('nav.platformTitle')}</div>
                                            <div className="text-sm text-gray-500 mt-1">{t('nav.platformDesc')}</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/resources"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'resources' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            {t('nav.resources')}
                        </Link>
                        <Link
                            href="/company"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'company' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            {t('nav.company')}
                        </Link>
                        <Link
                            href="/pricing"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'pricing' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            {t('nav.pricing')}
                        </Link>
                        <Link
                            href="/demo"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'demo' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            Demo
                        </Link>
                    </div>

{/* 右侧 - 登录和按钮 */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                className="text-sm text-gray-600 hover:text-primary px-2 py-1"
                                onClick={() => {
                                    const currentIndex = SUPPORTED_LANGUAGES.indexOf(language);
                                    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
                                    setLanguage(SUPPORTED_LANGUAGES[nextIndex]);
                                }}
                            >
                                {LANGUAGE_NAMES[language]}
                            </button>
                        </div>

                        {/* Demo 按钮 */}
                        <button
                            onClick={onDemoClick}
                            className="bg-primary text-white px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base hover:bg-primary/90 transition-colors cursor-pointer"
                        >
                            {t('nav.getDemo')}
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端全屏菜单 */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-white z-[9998] lg:hidden pt-20">
                    <div className="flex flex-col items-center space-y-6 p-8">
                        <Link href="/" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Products
                        </Link>
                        <Link href="/" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Resources
                        </Link>
                        <Link href="/company" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Company
                        </Link>
                        <Link href="/pricing" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Pricing
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}