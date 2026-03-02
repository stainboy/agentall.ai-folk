'use client';

import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faFilePowerpoint, faFilePdf, faDownload, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export type ExportFormat = 'excel' | 'ppt' | 'pdf';

interface ExportOption {
    id: ExportFormat;
    label: string;
    icon: typeof faFileExcel;
    color: string;
    bgColor: string;
    description: string;
}

const EXPORT_OPTIONS: ExportOption[] = [
    {
        id: 'excel',
        label: 'Excel',
        icon: faFileExcel,
        color: '#217346',
        bgColor: '#e8f5e9',
        description: 'Export data as spreadsheet with charts'
    },
    {
        id: 'ppt',
        label: 'PowerPoint',
        icon: faFilePowerpoint,
        color: '#d24726',
        bgColor: '#fce4ec',
        description: 'Create presentation with visualizations'
    },
    {
        id: 'pdf',
        label: 'PDF',
        icon: faFilePdf,
        color: '#f40f02',
        bgColor: '#ffebee',
        description: 'Generate PDF report with all insights'
    }
];

interface ExportData {
    title?: string;
    content?: string;
    charts?: string[];
    tables?: Array<Record<string, string | number>>;
}

interface ExportButtonProps {
    data?: ExportData;
    variant?: 'primary' | 'secondary' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onExportStart?: () => void;
    onExportComplete?: (format: ExportFormat) => void;
    onExportError?: (error: Error) => void;
}

export function ExportButton({
    data,
    variant = 'secondary',
    size = 'md',
    className = '',
    onExportStart,
    onExportComplete,
    onExportError
}: ExportButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [exportProgress, setExportProgress] = useState(0);
    const [currentFormat, setCurrentFormat] = useState<ExportFormat | null>(null);
    const [exportStatus, setExportStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleExport = async (format: ExportFormat) => {
        setIsOpen(false);
        setIsExporting(true);
        setCurrentFormat(format);
        setExportProgress(0);
        setExportStatus('idle');

        onExportStart?.();

        try {
            // Simulate export progress
            const progressInterval = setInterval(() => {
                setExportProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return 90;
                    }
                    return prev + Math.random() * 15;
                });
            }, 200);

            // Simulate export processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            clearInterval(progressInterval);
            setExportProgress(100);

            // Generate and download file
            await generateFile(format, data);

            setExportStatus('success');
            onExportComplete?.(format);

            // Reset after showing success
            setTimeout(() => {
                setIsExporting(false);
                setExportProgress(0);
                setCurrentFormat(null);
                setExportStatus('idle');
            }, 2000);

        } catch (error) {
            setExportStatus('error');
            onExportError?.(error as Error);
            
            setTimeout(() => {
                setIsExporting(false);
                setExportProgress(0);
                setCurrentFormat(null);
                setExportStatus('idle');
            }, 2000);
        }
    };

    const generateFile = async (format: ExportFormat, data?: ExportData) => {
        const timestamp = new Date().toISOString().slice(0, 10);
        const title = data?.title || 'agentall-analysis';

        switch (format) {
            case 'excel':
                await generateExcel(title, timestamp, data);
                break;
            case 'ppt':
                await generatePowerPoint(title, timestamp, data);
                break;
            case 'pdf':
                await generatePDF(title, timestamp, data);
                break;
        }
    };

    const generateExcel = async (title: string, timestamp: string, data?: ExportData) => {
        // Create CSV content for Excel
        let csvContent = 'data:text/csv;charset=utf-8,';
        
        // Header
        csvContent += `AgentAll AI - ${title}\n`;
        csvContent += `Generated on: ${timestamp}\n\n`;
        
        // Content
        if (data?.tables && data.tables.length > 0) {
            const headers = Object.keys(data.tables[0]);
            csvContent += headers.join(',') + '\n';
            
            data.tables.forEach(row => {
                const values = headers.map(h => {
                    const value = row[h];
                    // Escape values with commas or quotes
                    if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
                        return `"${value.replace(/"/g, '""')}"`;
                    }
                    return value;
                });
                csvContent += values.join(',') + '\n';
            });
        } else {
            csvContent += 'Metric,Value\n';
            csvContent += 'Efficiency Improvement,10x\n';
            csvContent += 'Productivity Gain,+50%\n';
            csvContent += 'Profits Optimization,+10%\n';
        }

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `${title}-${timestamp}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const generatePowerPoint = async (title: string, timestamp: string, data?: ExportData) => {
        // Create HTML content that can be saved as a simple presentation
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                    .slide { 
                        page-break-after: always; 
                        min-height: 100vh; 
                        padding: 40px;
                        box-sizing: border-box;
                    }
                    .slide:last-child { page-break-after: avoid; }
                    h1 { color: #6366f1; font-size: 36px; }
                    h2 { color: #262052; font-size: 28px; }
                    .metric { 
                        display: inline-block; 
                        margin: 20px; 
                        padding: 20px; 
                        background: #f9f8ff; 
                        border-radius: 8px;
                    }
                    .metric-value { 
                        font-size: 48px; 
                        color: #6366f1; 
                        font-weight: bold;
                    }
                    .metric-label { 
                        font-size: 16px; 
                        color: #666; 
                        margin-top: 8px;
                    }
                    .logo { 
                        width: 60px; 
                        height: 60px; 
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="slide">
                    <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#A855F7"/>
                                <stop offset="100%" stopColor="#6366F1"/>
                            </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad)" strokeWidth="8"/>
                        <circle cx="100" cy="100" r="25" fill="url(#grad)"/>
                        <text x="100" y="110" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#FFFFFF">A</text>
                    </svg>
                    <h1>${title}</h1>
                    <p>Generated by AgentAll AI on ${timestamp}</p>
                    <p>${data?.content || 'AI-powered analysis for SAP Business One'}</p>
                </div>
                
                <div class="slide">
                    <h2>Key Metrics</h2>
                    <div class="metric">
                        <div class="metric-value">10x</div>
                        <div class="metric-label">Efficiency Improvement</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">+50%</div>
                        <div class="metric-label">Productivity Gain</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">+10%</div>
                        <div class="metric-label">Profits Optimization</div>
                    </div>
                </div>
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${title}-${timestamp}.html`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const generatePDF = async (title: string, timestamp: string, data?: ExportData) => {
        // Create a simple HTML representation that can be printed to PDF
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    @media print {
                        body { 
                            font-family: 'Segoe UI', Arial, sans-serif; 
                            line-height: 1.6;
                            color: #262052;
                        }
                        .header {
                            background: linear-gradient(135deg, #6366f1, #8b5cf6);
                            color: white;
                            padding: 40px;
                            margin: -20px -20px 40px -20px;
                        }
                        .logo {
                            width: 50px;
                            height: 50px;
                            margin-bottom: 20px;
                        }
                        h1 { 
                            font-size: 32px; 
                            margin: 0 0 10px 0;
                            font-weight: 400;
                        }
                        h2 {
                            color: #6366f1;
                            font-size: 24px;
                            margin-top: 30px;
                            border-bottom: 2px solid #6366f1;
                            padding-bottom: 10px;
                        }
                        .metric-grid {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 20px;
                            margin: 30px 0;
                        }
                        .metric-card {
                            background: #f9f8ff;
                            padding: 20px;
                            border-radius: 8px;
                            text-align: center;
                        }
                        .metric-value {
                            font-size: 36px;
                            color: #6366f1;
                            font-weight: bold;
                        }
                        .metric-label {
                            color: #666;
                            margin-top: 8px;
                        }
                        .content-section {
                            margin: 30px 0;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 20px 0;
                        }
                        th, td {
                            padding: 12px;
                            text-align: left;
                            border-bottom: 1px solid #ddd;
                        }
                        th {
                            background: #6366f1;
                            color: white;
                        }
                        tr:nth-child(even) {
                            background: #f9f8ff;
                        }
                        .footer {
                            margin-top: 60px;
                            padding-top: 20px;
                            border-top: 1px solid #ddd;
                            color: #666;
                            font-size: 14px;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#A855F7"/>
                                <stop offset="100%" stop-color="#6366F1"/>
                            </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad)" stroke-width="8"/>
                        <circle cx="100" cy="100" r="25" fill="url(#grad)"/>
                        <text x="100" y="110" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFFFFF">A</text>
                    </svg>
                    <h1>${title}</h1>
                    <p>Generated by AgentAll AI</p>
                    <p>${timestamp}</p>
                </div>

                <div class="content-section">
                    <p>${data?.content || 'This report provides comprehensive analysis of your SAP Business One operations, powered by AgentAll AI agentic automation platform.'}</p>
                </div>

                <h2>Key Performance Metrics</h2>
                <div class="metric-grid">
                    <div class="metric-card">
                        <div class="metric-value">10x</div>
                        <div class="metric-label">Efficiency Improvement</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">+50%</div>
                        <div class="metric-label">Productivity Gain</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">+10%</div>
                        <div class="metric-label">Profits Optimization</div>
                    </div>
                </div>

                <div class="footer">
                    <p>© 2025 EROAD TECH PTE. LTD. All rights reserved.</p>
                    <p>Powered by AgentAll AI - Purpose-built agentic AI for SAP Business One</p>
                </div>

                <script>
                    window.onload = function() {
                        window.print();
                    };
                </script>
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        // Open in new window for printing to PDF
        const printWindow = window.open(url, '_blank');
        if (printWindow) {
            printWindow.onload = function() {
                // printWindow.print(); // Auto-print is commented out to let user control
            };
        }

        // Also offer direct download
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${title}-${timestamp}.html`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
        primary: 'bg-[#6366f1] text-white hover:bg-[#6366f1]/90',
        secondary: 'border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/5',
        icon: 'p-2 text-[#6366f1] hover:bg-[#6366f1]/10 rounded-full'
    };

    return (
        <>
            <div className="relative inline-block" ref={dropdownRef}>
                <button
                    onClick={() => !isExporting && setIsOpen(!isOpen)}
                    disabled={isExporting}
                    className={`
                        flex items-center gap-2 font-medium transition-colors
                        ${variantClasses[variant]}
                        ${variant === 'icon' ? '' : sizeClasses[size]}
                        ${className}
                        ${isExporting ? 'opacity-70 cursor-not-allowed' : ''}
                    `}
                >
                    {isExporting ? (
                        <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            {variant !== 'icon' && <span>Exporting... {Math.round(exportProgress)}%</span>}
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faDownload} />
                            {variant !== 'icon' && <span>Export</span>}
                        </>
                    )}
                </button>

                {/* Dropdown Menu */}
                {isOpen && !isExporting && (
                    <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl border border-gray-200 z-50">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <Logo size={32} showText={false} />
                                <div>
                                    <p className="font-medium text-foreground">Export Analysis</p>
                                    <p className="text-sm text-foreground/60">Choose format</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-2">
                            {EXPORT_OPTIONS.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleExport(option.id)}
                                    className="w-full flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors text-left group"
                                >
                                    <div 
                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                                        style={{ backgroundColor: option.bgColor }}
                                    >
                                        <FontAwesomeIcon 
                                            icon={option.icon} 
                                            style={{ color: option.color }}
                                            className="text-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-foreground group-hover:text-[#6366f1] transition-colors">
                                            {option.label}
                                        </p>
                                        <p className="text-sm text-foreground/60">
                                            {option.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Export Progress Modal */}
            {isExporting && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10001] flex items-center justify-center p-4">
                    <div className="bg-white max-w-md w-full p-6 shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <Logo size={40} showText={false} />
                            <div>
                                <h3 className="font-serif-display text-xl text-foreground">
                                    Exporting...
                                </h3>
                                <p className="text-foreground/60">
                                    {currentFormat && EXPORT_OPTIONS.find(o => o.id === currentFormat)?.label}
                                </p>
                            </div>
                        </div>

                        {exportStatus === 'idle' && (
                            <>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                                    <div 
                                        className="h-full bg-[#6366f1] transition-all duration-300"
                                        style={{ width: `${exportProgress}%` }}
                                    />
                                </div>
                                <p className="text-center text-foreground/70">
                                    {Math.round(exportProgress)}% complete
                                </p>
                            </>
                        )}

                        {exportStatus === 'success' && (
                            <div className="text-center py-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 text-2xl" />
                                </div>
                                <p className="text-green-600 font-medium">Export completed successfully!</p>
                            </div>
                        )}

                        {exportStatus === 'error' && (
                            <div className="text-center py-4">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FontAwesomeIcon icon={faXmark} className="text-red-500 text-2xl" />
                                </div>
                                <p className="text-red-600 font-medium">Export failed. Please try again.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ExportButton;
