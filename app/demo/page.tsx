'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import DemoForm from '../components/DemoForm';
import { useI18n } from '../i18n/I18nContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faRobot, faComments, faFileAlt, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';

interface DemoFeature {
    id: string;
    icon: typeof faChartLine;
    title: string;
    description: string;
    status: 'active' | 'coming' | 'beta';
}

export default function Demo() {
    const { t } = useI18n();
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState<string>('analytics');

    const demoFeatures: DemoFeature[] = [
        {
            id: 'analytics',
            icon: faChartLine,
            title: 'Analytics Dashboard',
            description: 'Real-time business analytics with AI-powered insights and recommendations',
            status: 'active'
        },
        {
            id: 'automation',
            icon: faRobot,
            title: 'Process Automation',
            description: 'Automate sales orders, inventory management, and document processing',
            status: 'active'
        },
        {
            id: 'chat',
            icon: faComments,
            title: 'Natural Language Query',
            description: 'Query your SAP Business One data using natural language',
            status: 'active'
        },
        {
            id: 'documents',
            icon: faFileAlt,
            title: 'Document Processing',
            description: 'Extract data from PDFs, images, and documents automatically',
            status: 'beta'
        },
        {
            id: 'config',
            icon: faCog,
            title: 'Agent Configuration',
            description: 'Customize AI agents and workflows for your business needs',
            status: 'coming'
        },
        {
            id: 'search',
            icon: faSearch,
            title: 'Knowledge Search',
            description: 'Intelligent search across your enterprise knowledge base',
            status: 'beta'
        }
    ];

    const getStatusBadge = (status: DemoFeature['status']) => {
        const styles = {
            active: 'bg-[#6366f1] text-white',
            beta: 'bg-orange-500 text-white',
            coming: 'bg-gray-400 text-white'
        };
        const labels = {
            active: 'Live',
            beta: 'Beta',
            coming: 'Coming Soon'
        };
        return (
            <span className={`px-2 py-1 text-xs font-medium rounded ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    return (
        <div className="min-h-screen">
            <Navigation currentPage="demo" onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <Logo size={60} showText={true} />
                    </div>

                    <div className="flex justify-center mb-6">
                        <div className="w-3 h-3 bg-[#6366f1] rounded-full"></div>
                    </div>

                    <h1 className="section-title text-foreground mb-6">
                        Experience the Future of<br />
                        <span className="text-[#6366f1]">SAP Business One</span>
                    </h1>

                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                        Explore our interactive demo environment. See how agentic AI transforms 
                        your SAP Business One operations with intelligent automation and insights.
                    </p>

                    <button
                        onClick={() => setIsDemoFormOpen(true)}
                        className="bg-[#6366f1] text-white px-8 py-4 font-medium hover:bg-[#6366f1]/90 transition-colors"
                    >
                        Request Full Demo Access
                    </button>
                </div>
            </section>

            {/* Demo Features Grid */}
            <section className="py-16 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title text-foreground mb-4">
                            Demo Environment
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-30 h-px bg-[#6366f1]"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {demoFeatures.map((feature) => (
                            <div
                                key={feature.id}
                                onClick={() => setActiveFeature(feature.id)}
                                className={`bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                                    activeFeature === feature.id 
                                        ? 'ring-2 ring-[#6366f1] shadow-lg' 
                                        : 'shadow-md hover:ring-1 hover:ring-[#6366f1]/50'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon 
                                            icon={feature.icon} 
                                            className="text-[#6366f1] text-xl"
                                        />
                                    </div>
                                    {getStatusBadge(feature.status)}
                                </div>
                                <h3 className="text-xl font-serif-display text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-foreground/70">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active Demo Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="bg-white shadow-xl p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <Logo size={40} showText={false} />
                            <div>
                                <h2 className="text-2xl font-serif-display text-foreground">
                                    {demoFeatures.find(f => f.id === activeFeature)?.title}
                                </h2>
                                <p className="text-foreground/70">
                                    Interactive Demo Environment
                                </p>
                            </div>
                        </div>

                        {/* Demo Preview Area */}
                        <div className="bg-gray-50 border-2 border-dashed border-[#6366f1]/30 rounded-lg p-12 text-center">
                            <div className="w-16 h-16 bg-[#6366f1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon 
                                    icon={demoFeatures.find(f => f.id === activeFeature)?.icon || faChartLine}
                                    className="text-[#6366f1] text-2xl"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {demoFeatures.find(f => f.id === activeFeature)?.title} Preview
                            </h3>
                            <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                                This is a preview of the {demoFeatures.find(f => f.id === activeFeature)?.title.toLowerCase()} feature. 
                                Request full access to explore all capabilities.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={() => setIsDemoFormOpen(true)}
                                    className="bg-[#6366f1] text-white px-6 py-3 font-medium hover:bg-[#6366f1]/90 transition-colors"
                                >
                                    Get Full Access
                                </button>
                                <button className="border-2 border-[#6366f1] text-[#6366f1] px-6 py-3 font-medium hover:bg-[#6366f1]/5 transition-colors">
                                    Watch Video
                                </button>
                            </div>
                        </div>

                        {/* Feature Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-serif-display text-[#6366f1]">10x</div>
                                <div className="text-sm text-foreground/70">Efficiency Gain</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-serif-display text-[#6366f1]">24/7</div>
                                <div className="text-sm text-foreground/70">Automation</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-serif-display text-[#6366f1]">50%</div>
                                <div className="text-sm text-foreground/70">Time Saved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#6366f1]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <Logo size={50} showText={false} className="justify-center mb-6" />
                    <h2 className="text-3xl lg:text-4xl font-serif-display text-white mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Get a personalized demo tailored to your SAP Business One environment 
                        and see how agentic AI can revolutionize your operations.
                    </p>
                    <button
                        onClick={() => setIsDemoFormOpen(true)}
                        className="bg-white text-[#6366f1] px-8 py-4 font-medium hover:bg-white/90 transition-colors"
                    >
                        Schedule Your Demo
                    </button>
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
