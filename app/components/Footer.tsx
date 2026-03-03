import Logo from './Logo';
import { useI18n } from '../i18n/I18nContext';

export default function Footer() {
    const { t } = useI18n();
    
    return (
        <footer className="bg-foreground text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Logo size={40} showText={true} className="text-white" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('footer.companyTagline')}
                        </p>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm cursor-pointer">
                                {t('footer.linkedIn')}
                            </button>
                            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm cursor-pointer">
                                {t('footer.twitter')}
                            </button>
                            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm cursor-pointer">
                                {t('footer.github')}
                            </button>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">{t('footer.product')}</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.agenticAi')}</button></li>
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.enterprisePlatform')}</button></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">{t('footer.resourcesTitle')}</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.documentation')}</button></li>
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.userManual')}</button></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">{t('footer.companyTitle')}</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="https://agentall.ai/" target="_blank" rel="noopener noreferrer" className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.home')}</a></li>
                            <li><a href="/company" className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.aboutUs')}</a></li>
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.ourMission')}</button></li>
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.ourTeam')}</button></li>
                            <li><button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer text-left">{t('footer.linkedWorld')}</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-400">
                            {t('footer.copyright')}
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer">{t('footer.privacy')}</button>
                            <button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer">{t('footer.terms')}</button>
                            <button className="relative inline-block hover:before:animate-highlight-footer cursor-pointer">{t('footer.cookies')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
