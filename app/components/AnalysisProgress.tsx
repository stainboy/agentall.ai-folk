'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

interface AnalysisStep {
    id: string;
    label: string;
    status: 'pending' | 'processing' | 'completed' | 'error';
    progress?: number;
    detail?: string;
}

interface AnalysisProgressProps {
    isActive: boolean;
    onComplete?: () => void;
    onCancel?: () => void;
    analysisType?: 'conversation' | 'document' | 'data';
}

const ANALYSIS_STEPS: Record<string, Omit<AnalysisStep, 'status' | 'progress'>[]> = {
    conversation: [
        { id: 'init', label: 'Initializing Analysis', detail: 'Setting up analysis environment...' },
        { id: 'parse', label: 'Parsing Conversation Data', detail: 'Extracting conversation threads...' },
        { id: 'analyze', label: 'Analyzing Content', detail: 'Processing natural language...' },
        { id: 'insights', label: 'Generating Insights', detail: 'Identifying patterns and trends...' },
        { id: 'charts', label: 'Creating Visualizations', detail: 'Building charts and graphs...' },
        { id: 'complete', label: 'Analysis Complete', detail: 'Results ready for review' }
    ],
    document: [
        { id: 'init', label: 'Initializing Document Processing', detail: 'Setting up extraction environment...' },
        { id: 'extract', label: 'Extracting Data', detail: 'Parsing document content...' },
        { id: 'validate', label: 'Validating Information', detail: 'Checking data accuracy...' },
        { id: 'map', label: 'Mapping to SAP', detail: 'Aligning with SAP Business One schema...' },
        { id: 'complete', label: 'Processing Complete', detail: 'Document ready for import' }
    ],
    data: [
        { id: 'init', label: 'Initializing Query', detail: 'Connecting to data source...' },
        { id: 'fetch', label: 'Fetching Data', detail: 'Retrieving records...' },
        { id: 'process', label: 'Processing Results', detail: 'Analyzing query results...' },
        { id: 'visualize', label: 'Creating Dashboard', detail: 'Generating visualizations...' },
        { id: 'complete', label: 'Dashboard Ready', detail: 'Results available for viewing' }
    ]
};

export default function AnalysisProgress({ 
    isActive, 
    onComplete, 
    onCancel,
    analysisType = 'conversation' 
}: AnalysisProgressProps) {
    const [steps, setSteps] = useState<AnalysisStep[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [overallProgress, setOverallProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Initialize steps
    useEffect(() => {
        const stepTemplates = ANALYSIS_STEPS[analysisType] || ANALYSIS_STEPS.conversation;
        const initialSteps = stepTemplates.map((step, index) => ({
            ...step,
            status: index === 0 ? 'processing' : 'pending' as AnalysisStep['status'],
            progress: index === 0 ? 0 : undefined
        }));
        setSteps(initialSteps);
        setCurrentStepIndex(0);
        setOverallProgress(0);
    }, [analysisType, isActive]);

    // Simulate progress
    useEffect(() => {
        if (!isActive || isPaused || steps.length === 0) return;

        const interval = setInterval(() => {
            setSteps(currentSteps => {
                const newSteps = [...currentSteps];
                const currentStep = newSteps[currentStepIndex];
                
                if (currentStep.status === 'processing') {
                    // Update current step progress
                    const newProgress = (currentStep.progress || 0) + Math.random() * 15;
                    
                    if (newProgress >= 100) {
                        // Complete current step
                        currentStep.progress = 100;
                        currentStep.status = 'completed';
                        
                        // Move to next step or complete
                        if (currentStepIndex < newSteps.length - 1) {
                            const nextIndex = currentStepIndex + 1;
                            newSteps[nextIndex].status = 'processing';
                            newSteps[nextIndex].progress = 0;
                            setCurrentStepIndex(nextIndex);
                            
                            // Update overall progress
                            const progressPercent = ((nextIndex) / newSteps.length) * 100;
                            setOverallProgress(progressPercent);
                        } else {
                            // All steps complete
                            setOverallProgress(100);
                            onComplete?.();
                        }
                    } else {
                        currentStep.progress = newProgress;
                        // Update overall progress
                        const stepProgress = newProgress / 100;
                        const progressPercent = ((currentStepIndex + stepProgress) / newSteps.length) * 100;
                        setOverallProgress(progressPercent);
                    }
                }
                
                return newSteps;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [isActive, isPaused, currentStepIndex, steps.length, onComplete]);

    if (!isActive) return null;

    const getStatusIcon = (status: AnalysisStep['status']) => {
        switch (status) {
            case 'completed':
                return (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
            case 'processing':
                return (
                    <svg className="w-5 h-5 text-[#6366f1] animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            default:
                return (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                );
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full shadow-2xl">
                {/* Header */}
                <div className="bg-[#6366f1] p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <Logo size={32} showText={false} />
                        </div>
                        <div>
                            <h2 className="text-xl font-serif-display text-white">
                                AI Analysis in Progress
                            </h2>
                            <p className="text-white/80 text-sm">
                                Processing your request...
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onCancel}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Progress Overview */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Overall Progress</span>
                        <span className="text-sm font-medium text-[#6366f1]">{Math.round(overallProgress)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[#6366f1] transition-all duration-300 ease-out"
                            style={{ width: `${overallProgress}%` }}
                        />
                    </div>
                </div>

                {/* Steps List */}
                <div className="p-6 max-h-[400px] overflow-y-auto">
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <div 
                                key={step.id}
                                className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
                                    step.status === 'processing' 
                                        ? 'bg-[#6366f1]/5 border border-[#6366f1]/20' 
                                        : step.status === 'completed'
                                        ? 'bg-green-50 border border-green-100'
                                        : 'bg-gray-50'
                                }`}
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    {getStatusIcon(step.status)}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className={`font-medium ${
                                            step.status === 'processing' ? 'text-[#6366f1]' : 'text-foreground'
                                        }`}>
                                            {step.label}
                                        </h3>
                                        {step.progress !== undefined && step.status === 'processing' && (
                                            <span className="text-sm text-[#6366f1]">
                                                {Math.round(step.progress)}%
                                            </span>
                                        )}
                                    </div>
                                    
                                    {step.detail && (
                                        <p className="text-sm text-foreground/60 mb-2">
                                            {step.detail}
                                        </p>
                                    )}
                                    
                                    {step.status === 'processing' && step.progress !== undefined && (
                                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-[#6366f1] transition-all duration-300"
                                                style={{ width: `${step.progress}%` }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                        {isPaused ? 'Resume' : 'Pause'}
                    </button>
                    
                    <div className="flex gap-3">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors"
                        >
                            Cancel
                        </button>
                        
                        {overallProgress === 100 && (
                            <button
                                onClick={() => onComplete?.()}
                                className="bg-[#6366f1] text-white px-6 py-2 font-medium hover:bg-[#6366f1]/90 transition-colors"
                            >
                                View Results
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
