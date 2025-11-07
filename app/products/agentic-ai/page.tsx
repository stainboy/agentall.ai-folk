'use client';

import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import DemoForm from '../../components/DemoForm';
import GradientDivider from '../../components/GradientDivider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandshake,
    faComments,
    faChartBar,
    faFileAlt,
    faClipboard,
    faCalendarAlt
} from '@fortawesome/free-regular-svg-icons';
import {
    faWarehouse,
    faFileLines,
    faSearch,
    faBrain,
    faFileInvoice,
    faEnvelope,
    faReceipt
} from '@fortawesome/free-solid-svg-icons';
import { getImagePath } from '@/app/utils/images';
import Image from 'next/image';

// Pie Chart Data
const PIE_CHART_DATA = [
    {
        id: 1,
        label: 'Sales Automation',
        percentage: 14.29,
        color: '#6b5be1',
        icon: faReceipt,
        bullets: [
            'Customer Email Monitoring',
            'Sales Order Creation and Update',
            'Sales Order Approval'
        ]
    },
    {
        id: 2,
        label: 'Inventory Automation',
        percentage: 14.29,
        color: '#ec4899',
        icon: faWarehouse,
        bullets: [
            'Goods Issue Planning and Pick Lists Creation',
            'Creation of Outbound Delivery',
            'Creation of Goods Receipt',
            'Goods Receipt Monitoring and Reminding'
        ]
    },
    {
        id: 3,
        label: 'Query & Insights',
        percentage: 14.29,
        color: '#f97316',
        icon: faSearch,
        bullets: [
            'Nature Language Query of Data and Transactions',
            'Dynamic Report and Dashboard Creation',
            'Graphic Visualization Creation',
            'Data Insights and Recommendations'
        ]
    },
    {
        id: 4,
        label: 'Document Processing',
        percentage: 14.29,
        color: '#8b5cf6',
        icon: faFileLines,
        bullets: [
            'Unstructured Document (PDF, Image, DOC, XLS etc.) Extraction',
            'Data Mapping and Validation',
            'Creation of Business Transactions'
        ]
    },
    {
        id: 5,
        label: 'Knowledge Management',
        percentage: 14.29,
        color: '#10b981',
        icon: faBrain,
        bullets: [
            'Enterprise Knowledge Management',
            'Nature Language Query and Retrieval of Knowledge Documents'
        ]
    },
    {
        id: 6,
        label: 'Finance Automation',
        percentage: 14.29,
        color: '#06b6d4',
        icon: faFileInvoice,
        bullets: [
            'E-invoice Integration',
            'Supplier Invoice Processing',
            'Customer Invoice Processing',
            'PO/GR/IN Reconciliation'
        ]
    },
    {
        id: 7,
        label: 'Purchasing Automation',
        percentage: 14.29,
        color: '#f59e0b',
        icon: faHandshake,
        bullets: [
            'Supplier Email Monitoring',
            'Purchase Order Creation and Update',
            'Purchase Requisition Creation and Update',
            'Supplier Analysis and Recommendation'
        ]
    }
];

// Tabs Data
const TABS_DATA = [
    {
        id: 'document-extraction',
        title: 'Document Extraction',
        video: '/videos/1_Process_Automation.mp4',
        layout: 'vertical',
        features: [
            'Extraction of data in <strong>any Language</strong> from <strong>any document format</strong>: PDF, excel, image, scanned paper etc',
            '<strong>Automatic mapping</strong> and <strong>document creation</strong> in SAP Business One: sales order, goods receipt, supplier invoice etc',
            'Able to <strong>handle complex files</strong> even beyond DTW limits',
            'Able to <strong>flexibly configure mapping rules</strong> and adapt for various document formats'
        ],
        kpis: [
            {
                label: ['Harmonize User Experience', 'Improve Customer Satisfaction'], value: null
            },
            {
                label: '<strong>1 to 2 minutes</strong> for automatic document resolution',
                value: ['1-2', 'Minute'],
                color: '#6b5be1'
            },
            {
                label: 'Increase in efficiency by more than <strong>10 times</strong> compared to manual efforts',
                value: ['10x', 'Up'],
                color: '#6b5be1'
            },

        ],
        highlights: [
            'Auto-parsing improves accuracy and avoids manual errors.',
            'No training required to process various document format, reducing maintenance costs.',
        ]
    },
    {
        id: 'process-automation',
        title: 'Process Automation',
        video: '/videos/2_1_Analytics&Recommendation.mp4',
        layout: 'vertical',
        features: [
            '<strong>7x24</strong> monitoring of business data and proactively push notification or <strong>trigger actions automatically</strong>',
            'Automatic <strong>360 deep research</strong> into business data to recommend optimizing plans',
            '<strong>Role based authorization control</strong> and data access to ensure security',
            '<strong>Flexible customization</strong> of agents and workflow to adapt for your own needs'
        ],
        kpis: [
            {
                label: ['Productivity Gain', 'Performance Optimization'], value: null
            },
            {
                label: 'Manual efforts saved by automatic process triggered by agents',
                value: ['50%'],
                color: '#6b5be1'
            },
            {
                label: 'Overall performance improvement from data driven decisions recommended by agents',
                value: ['10%'],
                color: '#6b5be1'
            },

        ],
        highlights: [
            'Automated business process to release employees from repetitive manual transactions and gain productivity',
            'Best practice based deep research to optimize business performance like never before',
        ]
    },
    {
        id: 'nlq',
        title: 'ChatBI',
        video: '/videos/2_2_Analytics&Recommendation.mp4',
        layout: 'vertical',
        features: [
            'AI Agent creates reports with visualization dynamically in <strong>20–35s</strong> vs. <strong>2–4h</strong> manually, freeing implementation resources',
            '<strong>No SQL/HANA knowledge needed</strong>—business users query data via natural language',
            'Reasoning and deep research to <strong>provide insights, root cause analysis and recommendation plans</strong> from business data'
        ],
        kpis: [
            {
                label: ['Multiply Effectiveness', 'Time Saving and Cost Reduction'], value: null
            },
            {
                label: 'To generate visualized reports dynamically',
                value: ['30', 'Seconds'],
                color: '#6b5be1'
            },
            {
                label: 'Increase in efficiency by more than <strong>10 times</strong> compared to manual efforts',
                value: ['10x', 'Up'],
                color: '#6b5be1'
            },

        ],
        highlights: [
            'Query your business data anywhere anytime for better transparency and control',
            'Make impact with your business data and let it flow to become growth driver',
        ]
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Integration',
        video: '/videos/5_WhatsApp.mp4',
        features: [
            'AI agents as contacts allowing nature language interaction',
            'Process automation and ChatBI functionalities supported',
            'Identity recognition and role-based access control to ensure security'
        ],
        kpis: [
            {
                label: ['Harmonize User Experience', 'Improve Customer Satisfaction'], value: null
            },
            {
                label: '1 to 2 minutes for automatic customer creation from text input',
                value: ['1-2', 'Minute'],
                color: '#6b5be1'
            },
            {
                label: 'To query data and generate visualized reports dynamically on mobile',
                value: ['30', 'Seconds'],
                color: '#6b5be1'
            },

        ],
        highlights: [
            'Harmonize user experience on demand to make life easier for business users',
            'Accelerated response to customer needs and improve customer satisfaction',
        ]
    },
    // {
    //     id: 'ekm',
    //     title: 'Enterprise Knowledge Management',
    //     layout: 'vertical',
    //     features: [
    //         'Extraction of Data in Any Language from Any Document Format: PDF, excel, image, scanned paper etc',
    //         'Automatic Mapping and Creation of Structured Document in SAP Business One: sales order, goods receipt, supplier invoice etc',
    //         'Able to handle complex files even beyond DTW limits',
    //         'Able to flexibly configure mapping rules and adapt for various document format'
    //     ],
    //     kpis: [
    //         { label: 'Knowledge Reuse', value: '3x', color: '#f97316' },
    //         { label: 'Learning Time', value: '-60%', color: '#ec4899' }
    //     ],
    //     highlights: [
    //         'Auto-parsing improves accuracy and avoids manual errors.',
    //         'No training required to process various document format, reducing maintenance costs.',
    //     ]
    // }
];

// Pie Chart Component
function PieChart() {
    const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
    const [currentAutoSlice, setCurrentAutoSlice] = useState<number>(1);

    // Auto rotation effect
    React.useEffect(() => {
        if (hoveredSlice === null) {
            const interval = setInterval(() => {
                setCurrentAutoSlice(prev => prev >= PIE_CHART_DATA.length ? 1 : prev + 1);
            }, 2000); // Change every 2 seconds

            return () => clearInterval(interval);
        }
    }, [hoveredSlice]);

    // 将 hex 颜色转换为 rgba
    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Calculate trapezoid slice path
    const createTrapezoidSlicePath = (startAngle: number, endAngle: number) => {
        const centerX = 450;
        const centerY = 450;
        const innerRadius = 135; // Inner radius (center circle radius + gap)
        const outerRadius = 394; // Outer radius

        const startRad = (startAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;

        // Outer arc points
        const outerX1 = centerX + outerRadius * Math.cos(startRad);
        const outerY1 = centerY + outerRadius * Math.sin(startRad);
        const outerX2 = centerX + outerRadius * Math.cos(endRad);
        const outerY2 = centerY + outerRadius * Math.sin(endRad);

        // Inner arc points
        const innerX1 = centerX + innerRadius * Math.cos(startRad);
        const innerY1 = centerY + innerRadius * Math.sin(startRad);
        const innerX2 = centerX + innerRadius * Math.cos(endRad);
        const innerY2 = centerY + innerRadius * Math.sin(endRad);

        const largeArc = endAngle - startAngle > 180 ? 1 : 0;

        return `M ${outerX1} ${outerY1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerX2} ${outerY2} L ${innerX2} ${innerY2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerX1} ${innerY1} Z`;
    };

    let currentAngle = 0;

    return (
        <div className="relative flex items-center justify-center" style={{ transform: 'scale(0.9)', transformOrigin: 'center' }}>
            <div className="flex items-center gap-16">
                {/* Left side: Pie Chart */}
                <div className="flex-shrink-0">
                    <svg width="900" height="900" viewBox="0 0 900 900" className="transform transition-transform duration-300">
                        {PIE_CHART_DATA.map((slice) => {
                            const gapAngle = 2; // 2 degrees gap between slices
                            const totalGaps = PIE_CHART_DATA.length * gapAngle * 2; // Total gap space needed
                            const availableAngle = 360 - totalGaps; // Available angle for slices
                            const startAngle = currentAngle + gapAngle;
                            const sliceAngle = (slice.percentage / 100) * availableAngle;
                            const endAngle = startAngle + sliceAngle;
                            currentAngle = endAngle + gapAngle;

                            const path = createTrapezoidSlicePath(startAngle, endAngle);
                            const isHovered = hoveredSlice === slice.id;
                            const isAutoHighlighted = hoveredSlice === null && currentAutoSlice === slice.id;

                            // Calculate label position (middle of trapezoid)
                            const labelAngle = (startAngle + endAngle) / 2;
                            // Special angle adjustment for Sales Order Processing to move left
                            const adjustedLabelAngle = slice.id === 1 ? labelAngle - 5 : labelAngle;
                            const labelRad = (adjustedLabelAngle - 90) * Math.PI / 180;
                            const baseLabelRadius = 265; // Position between inner and outer radius
                            // Special positioning for Production Planning and Inventory Control
                            const adjustedBaseRadius = (slice.id === 3 || slice.id === 5) ? baseLabelRadius + 19 : baseLabelRadius;
                            const labelRadius = (isHovered || isAutoHighlighted) ? adjustedBaseRadius * 1.05 : adjustedBaseRadius; // Move outward when hovered or auto highlighted
                            const labelX = 450 + labelRadius * Math.cos(labelRad);
                            const labelY = 450 + labelRadius * Math.sin(labelRad);

                            return (
                                <g key={slice.id}>
                                    <path
                                        d={path}
                                        fill={hexToRgba(slice.color, isHovered || isAutoHighlighted ? 0.3 : 0.2)}
                                        stroke={isHovered || isAutoHighlighted ? slice.color : hexToRgba(slice.color, 0.5)}
                                        strokeWidth="3"
                                        opacity={1}
                                        className="transition-all duration-300 cursor-pointer"
                                        onMouseEnter={() => setHoveredSlice(slice.id)}
                                        onMouseLeave={() => setHoveredSlice(null)}
                                        style={{
                                            transform: (isHovered || isAutoHighlighted) ? 'scale(1.05)' : 'scale(1)',
                                            transformOrigin: '450px 450px'
                                        }}
                                    />
                                    {/* Label text */}
                                    {slice.label === 'Sales Automation' || slice.label === 'Query & Insights' || slice.label === 'Document Processing' || slice.label === 'Knowledge Management' || slice.label === 'Finance Automation' || slice.label === 'Purchasing Automation' || slice.label === 'Inventory Automation' ? (
                                        // Two-line text for specific labels
                                        <>
                                            <text
                                                x={labelX}
                                                y={labelY + 35}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill={isHovered || isAutoHighlighted ? "#262052" : slice.color}
                                                fontSize="16"
                                                fontWeight="bold"
                                                className="pointer-events-none"
                                                opacity={hoveredSlice === null ? (isAutoHighlighted ? 1 : 0.5) : isHovered ? 1 : 0.5}
                                                style={{
                                                    transform: (isHovered || isAutoHighlighted) ? 'scale(1.1)' : 'scale(1)',
                                                    transformOrigin: `${labelX}px ${labelY + 35}px`,
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {slice.label === 'Sales Automation' ? 'Sales' :
                                                    slice.label === 'Query & Insights' ? 'Query &' :
                                                        slice.label === 'Document Processing' ? 'Document' :
                                                            slice.label === 'Knowledge Management' ? 'Knowledge' :
                                                                slice.label === 'Finance Automation' ? 'Finance' :
                                                                    slice.label === 'Purchasing Automation' ? 'Purchasing' :
                                                                        'Inventory'}
                                            </text>
                                            <text
                                                x={labelX}
                                                y={labelY + 55}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill={isHovered || isAutoHighlighted ? "#262052" : slice.color}
                                                fontSize="16"
                                                fontWeight="bold"
                                                className="pointer-events-none"
                                                opacity={hoveredSlice === null ? (isAutoHighlighted ? 1 : 0.5) : isHovered ? 1 : 0.5}
                                                style={{
                                                    transform: (isHovered || isAutoHighlighted) ? 'scale(1.1)' : 'scale(1)',
                                                    transformOrigin: `${labelX}px ${labelY + 55}px`,
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {slice.label === 'Sales Automation' ? 'Automation' :
                                                    slice.label === 'Query & Insights' ? 'Insights' :
                                                        slice.label === 'Document Processing' ? 'Processing' :
                                                            slice.label === 'Knowledge Management' ? 'Management' :
                                                                slice.label === 'Finance Automation' ? 'Automation' :
                                                                    slice.label === 'Purchasing Automation' ? 'Automation' :
                                                                        'Automation'}
                                            </text>
                                        </>
                                    ) : (
                                        // Single line text for shorter labels
                                        <text
                                            x={labelX}
                                            y={labelY + 45}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fill={isHovered || isAutoHighlighted ? "#262052" : slice.color}
                                            fontSize="16"
                                            fontWeight="bold"
                                            className="pointer-events-none"
                                            opacity={hoveredSlice === null ? (isAutoHighlighted ? 1 : 0.5) : isHovered ? 1 : 0.5}
                                            style={{
                                                transform: (isHovered || isAutoHighlighted) ? 'scale(1.1)' : 'scale(1)',
                                                transformOrigin: `${labelX}px ${labelY + 45}px`,
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {slice.label}
                                        </text>
                                    )}
                                </g>
                            );
                        })}

                        {/* Center circle */}
                        <circle
                            cx="450"
                            cy="450"
                            r="113"
                            fill="#6b5be1"
                            className="pointer-events-none"
                        />

                        {/* Center text */}
                        <text
                            x="450"
                            y="432"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="16"
                            fontWeight="bold"
                            className="pointer-events-none"
                        >
                            Agentic AI For
                        </text>
                        <text
                            x="450"
                            y="458"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="16"
                            fontWeight="600"
                            className="pointer-events-none"
                        >
                            SAP Business One
                        </text>
                    </svg>
                </div>

                {/* Right side: Hover Content */}
                <div className="flex-shrink-0 w-96">
                    <div className="bg-white card-shadow-white p-6 animate-in fade-in slide-in-from-left-2 duration-200">
                        {(() => {
                            const displaySlice = hoveredSlice !== null
                                ? PIE_CHART_DATA.find(s => s.id === hoveredSlice)
                                : PIE_CHART_DATA.find(s => s.id === currentAutoSlice);

                            if (!displaySlice) return null;

                            return (
                                <>
                                    <h4 className="section-title font-semibold mb-3" style={{ color: displaySlice.color }}>
                                        {displaySlice.label}
                                    </h4>
                                    <ul className="space-y-2">
                                        {displaySlice.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start text-base text-gray-700 break-words">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: displaySlice.color }}></span>
                                                <span className="break-words">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>

            {/* Icons positioned absolutely over SVG */}
            {PIE_CHART_DATA.map((slice) => {
                const gapAngle = 2;
                const totalGaps = PIE_CHART_DATA.length * gapAngle * 2;
                const availableAngle = 360 - totalGaps;
                let currentAngle = 0;

                // Find the slice's position
                for (let i = 0; i < slice.id - 1; i++) {
                    currentAngle += gapAngle + (PIE_CHART_DATA[i].percentage / 100) * availableAngle + gapAngle;
                }

                const startAngle = currentAngle + gapAngle;
                const sliceAngle = (slice.percentage / 100) * availableAngle;
                const endAngle = startAngle + sliceAngle;
                const labelAngle = (startAngle + endAngle) / 2;
                // Special angle adjustment for Sales Order Processing to move left
                const adjustedLabelAngle = slice.id === 1 ? labelAngle - 5 : labelAngle;
                const labelRad = (adjustedLabelAngle - 90) * Math.PI / 180;
                const isHovered = hoveredSlice === slice.id;
                const isAutoHighlighted = hoveredSlice === null && currentAutoSlice === slice.id;
                const baseLabelRadius = 265;
                // Special positioning for Production Planning and Inventory Control
                const adjustedBaseRadius = (slice.id === 3 || slice.id === 5) ? baseLabelRadius + 19 : baseLabelRadius;
                const labelRadius = (isHovered || isAutoHighlighted) ? adjustedBaseRadius * 1.05 : adjustedBaseRadius; // Move outward when hovered or auto highlighted
                const labelX = 450 + labelRadius * Math.cos(labelRad);
                const labelY = 450 + labelRadius * Math.sin(labelRad);

                return (
                    <div
                        key={`icon-${slice.id}`}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${labelX}px`,
                            top: `${labelY}px`,
                            width: '80px',
                            height: '80px',
                            transform: `translate(-50%, -50%) ${(isHovered || isAutoHighlighted) ? 'scale(1.2)' : 'scale(1)'}`,
                            transition: 'transform 0.3s ease',
                            opacity: hoveredSlice === null ? (isAutoHighlighted ? 1 : 0.5) : isHovered ? 1 : 0.5
                        }}
                    >
                        <FontAwesomeIcon
                            icon={slice.icon}
                            size="3x"
                            style={{ color: slice.color }}
                            className="w-full h-full"
                        />
                    </div>
                );
            })}

        </div>
    );
}

export default function AgenticAIProduct() {
    const [activeTab, setActiveTab] = useState('document-extraction');
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

    const activeTabData = TABS_DATA.find(tab => tab.id === activeTab);
    const activeTabIndex = TABS_DATA.findIndex(tab => tab.id === activeTab);

    return (
        <div className="min-h-screen">
            <Navigation onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Hero Section */}
            <section className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-5xl flex flex-col justify-between">
                <div className="w-full mx-auto pt-20 flex-1 flex flex-col justify-between">
                    <div className="max-w-7xl mx-auto px-8 pt-16 text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="text-sm text-primary uppercase tracking-wider font-bold">
                                Agentic AI for SAP Business One
                            </div>
                        </div>
                        <h1 className="hero-title gradient-text">
                            Purpose-built Agentic AI<br />
                            for SAP Business One
                            and its add-ons
                        </h1>
                        <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
                            Role based, seamlessly integrated, out-of-box adoption with enterprise security
                        </p>
                    </div>

                    {/* Pie chart section */}
                    <div className="flex flex-col items-center space-y-8 pt-8">
                        {/* <h2 className="section-title-small text-center text-foreground">
                            Built-in Process Automation Capabilities and Beyond
                        </h2> */}

                        <PieChart />
                    </div>
                </div>
            </section>

            {/* Gradient Divider */}
            <GradientDivider />

            {/* Tabs Section */}
            <section className="py-8 px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    {/* Tab navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="relative flex flex-col lg:flex-row bg-white border border-gray-200 p-2 w-full max-w-6xl">
                            {/* 滑动色块 - 桌面端 */}
                            <div
                                className="hidden lg:block absolute top-2 bottom-2 transition-all duration-300 ease-out animate-gradient"
                                style={{
                                    left: `calc(${activeTabIndex * 25}% + 8px)`,
                                    width: 'calc(25% - 16px)',
                                    background: 'linear-gradient(45deg, rgba(45, 27, 105, 0.8), rgba(76, 29, 149, 0.8), rgba(124, 58, 237, 0.6), rgba(124, 58, 237, 0.6), rgba(76, 29, 149, 0.8), rgba(45, 27, 105, 0.8))',
                                    backgroundSize: '400% 400%'
                                }}
                            />
                            {/* 滑动色块 - 移动端 */}
                            <div
                                className="lg:hidden absolute left-2 right-2 transition-all duration-300 ease-out animate-gradient"
                                style={{
                                    top: `calc(${activeTabIndex * 25}% + 8px)`,
                                    height: 'calc(25% - 16px)',
                                    background: 'linear-gradient(45deg, rgba(45, 27, 105, 0.8), rgba(76, 29, 149, 0.8), rgba(124, 58, 237, 0.6), rgba(124, 58, 237, 0.6), rgba(76, 29, 149, 0.8), rgba(45, 27, 105, 0.8))',
                                    backgroundSize: '400% 400%'
                                }}
                            />
                            {/* Tab 按钮 */}
                            {TABS_DATA.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative z-10 px-4 lg:px-6 py-3 transition-colors duration-300 flex-1 ${activeTab === tab.id ? 'text-white font-bold' : 'text-gray-700 font-medium hover:bg-purple-100'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab content */}
                    {activeTabData && (
                        <div className="space-y-8">
                            {activeTabData.layout === 'vertical' ? (
                                <div className={`flex flex-col items-center justify-center gap-8`}>
                                    {activeTabData.video && (
                                        <div className="relative max-w-3xl bg-gray-100 overflow-hidden">
                                            <video
                                                key={activeTab}
                                                className="w-full h-full min-h-120 object-contain"
                                                autoPlay
                                                loop
                                                muted
                                                controls
                                            >
                                                <source src={getImagePath(activeTabData.video)} type="video/mp4" />
                                                Your browser does not support video playback
                                            </video>
                                        </div>
                                    )}

                                    <div className='flex flex-row gap-8 w-full'>
                                        {/* Feature Highlights Card */}
                                        <div className="w-full bg-white p-6 card-shadow-white">
                                            <h3 className="text-2xl font-serif-display text-foreground mb-6">
                                                Feature Highlights
                                            </h3>
                                            <ul className="flex flex-col gap-2 text-left items-start list-none pl-6">
                                                {activeTabData.features.map((feature, idx) => (
                                                    <li key={idx} className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300" style={{ zIndex: 1 }}>
                                                        <span className="mr-2 absolute -left-6 top-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b5be1' }}></span>
                                                        <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Value Highlights Card */}
                                        <div className="w-full bg-white p-6 card-shadow-white">
                                            <h3 className="text-2xl font-serif-display text-foreground mb-6">
                                                Value Highlights
                                            </h3>
                                            <ul className="flex flex-col gap-2 list-none pl-6">
                                                {activeTabData.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300" style={{ zIndex: 1 }}>
                                                        <span className="mr-2 absolute -left-6 top-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b5be1' }}></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`grid gap-8 items-center ${activeTabData.video ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
                                    {/* Left side: Video - only show if video exists */}
                                    {activeTabData.video && (
                                        <div className="relative overflow-hidden">
                                            <video
                                                key={activeTab}
                                                className="w-full max-w-sm mx-auto h-full object-contain rounded-lg"
                                                autoPlay
                                                loop
                                                muted
                                                controls
                                            >
                                                <source src={getImagePath(activeTabData.video)} type="video/mp4" />
                                                Your browser does not support video playback
                                            </video>
                                        </div>
                                    )}

                                    {/* Right side: Feature Highlights + Value Highlights */}
                                    <div className="space-y-6">
                                        {/* Feature Highlights Card */}
                                        <div className="bg-white p-6 card-shadow-white">
                                            <h3 className="text-2xl font-serif-display text-foreground mb-6">
                                                Feature Highlights
                                            </h3>
                                            <ul className="flex flex-col gap-2 text-left items-start list-none pl-6">
                                                {activeTabData.features.map((feature, idx) => (
                                                    <li key={idx} className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300" style={{ zIndex: 1 }}>
                                                        <span className="mr-2 absolute -left-6 top-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b5be1' }}></span>
                                                        <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Value Highlights Card */}
                                        <div className="bg-white p-6 card-shadow-white">
                                            <h3 className="text-2xl font-serif-display text-foreground mb-6">
                                                Value Highlights
                                            </h3>
                                            <ul className="flex flex-col gap-2 list-none pl-6">
                                                {activeTabData.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300" style={{ zIndex: 1 }}>
                                                        <span className="mr-2 absolute -left-6 top-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b5be1' }}></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Second row: KPI Metrics */}
                            <div className="grid grid-cols-3 gap-6">
                                {activeTabData.kpis.map((kpi, idx) => {
                                    const isLabelArray = Array.isArray(kpi.label);

                                    return (
                                        <div
                                            key={idx}
                                            style={{ height: '200px' }}
                                        >
                                            {kpi.value ? (
                                                // Has value - Flip card
                                                <div className="group perspective-1000 h-full">
                                                    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                                        {/* Front side - Data metric */}
                                                        <div className="absolute inset-0 w-full h-full backface-hidden bg-white card-shadow-white flex items-center justify-center">
                                                            <div className="text-center">
                                                                <div
                                                                    className="text-5xl lg:text-6xl font-serif-display"
                                                                    style={{ color: kpi.color || '#6b5be1' }}
                                                                >
                                                                    {Array.isArray(kpi.value) ? (
                                                                        <div className="space-y-2">
                                                                            {kpi.value.map((item, itemIdx) => (
                                                                                <div key={itemIdx} className="text-4xl lg:text-5xl">
                                                                                    {item}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ) : (
                                                                        kpi.value
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Back side - Description */}
                                                        <div className="absolute inset-0 w-full h-full backface-hidden bg-white card-shadow-white rotate-y-180 flex items-center justify-center p-6">
                                                            <div
                                                                className="text-lg text-gray-600 leading-relaxed text-center"
                                                                dangerouslySetInnerHTML={{ __html: kpi.label }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : isLabelArray ? (
                                                // No value but label is array - Flip card with label[0] on front, label[1] on back
                                                <div className="group perspective-1000 h-full">
                                                    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                                        {/* Front side - label[0] */}
                                                        <div className="absolute inset-0 w-full h-full backface-hidden bg-white card-shadow-white flex items-center justify-center p-4">
                                                            <div className="text-3xl font-serif-display text-gray-600 leading-relaxed text-center">
                                                                {kpi.label[0]}
                                                            </div>
                                                        </div>

                                                        {/* Back side - label[1] */}
                                                        <div className="absolute inset-0 w-full h-full backface-hidden bg-white card-shadow-white rotate-y-180 flex items-center justify-center p-4">
                                                            <div className="text-3xl font-serif-display text-gray-600 leading-relaxed text-center">
                                                                {kpi.label[1]}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                // No value and label is string - Simple card with bounce animation
                                                <div className="bounce-hover bg-white card-shadow-white h-full flex items-center justify-center p-4">
                                                    <div
                                                        className="text-lg text-gray-600 leading-relaxed text-center"
                                                        dangerouslySetInnerHTML={{ __html: kpi.label }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Security Section */}
            <section className="py-20 px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <h3 className="section-title font-serif-display text-foreground mb-12 text-center">
                        Safe, Secure, Built for Business.
                    </h3>

                    {/* 3 columns with rectangular cards - Security features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1: Secure & Compliant */}
                        <div className='bg-white card-shadow-white flex flex-col'>
                            <div className='relative w-full aspect-[67/48]'>
                                <Image src={getImagePath("/images/agentic-ai/secure.png")} alt="Security" fill />
                            </div>
                            <div className="p-8">
                                <h4 className="text-4xl font-serif-display text-foreground mb-8 leading-tight">
                                    Secure &<br /> Compliant
                                </h4>
                                <div className="space-y-4 text-left">
                                    <p className="text-lg text-gray-600">
                                        Your data stays within SAP Business One
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        Role based authorization control
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        Data Privacy Protection Compliance
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Card 2: Accurate & Reliable */}
                        <div className='bg-white card-shadow-white flex flex-col'>
                            <div className='relative w-full aspect-[67/48]'>
                                <Image src={getImagePath("/images/agentic-ai/accurate.png")} alt="Accurate" fill />
                            </div>
                            <div className="p-8">
                                <h4 className="text-4xl font-serif-display text-foreground mb-8 leading-tight">
                                    Accurate &<br /> Reliable
                                </h4>
                                <div className="space-y-4 text-left">
                                    <p className="text-lg text-gray-600">
                                        Connect to on-premise or Cloud SAP Business One Database
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        Choose your preferrable LLM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Flexible and Extensible */}
                        <div className='bg-white card-shadow-white flex flex-col'>
                            <div className='relative w-full aspect-[67/48]'>
                                <Image src={getImagePath("/images/agentic-ai/extensible.png")} alt="Extensible" fill />
                            </div>
                            <div className="bg-white card-shadow-white p-8">
                                <h4 className="text-4xl font-serif-display text-foreground mb-8 leading-tight">
                                    Flexible &<br />Extensible
                                </h4>
                                <div className="space-y-4 text-left">
                                    <p className="text-lg text-gray-600">
                                        Out-of-box adoption
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        Customize and integrate with add-ons or 3rd party application with Enterprise AI Agent Build Platform
                                    </p>
                                </div>
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

