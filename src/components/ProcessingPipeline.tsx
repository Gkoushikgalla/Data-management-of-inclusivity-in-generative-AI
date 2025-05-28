import React, { useState, useEffect } from 'react';
import ProcessingStep from './ProcessingStep';
import { PROCESSING_STEPS } from '../utils/constants';

interface ProcessingPipelineProps {
  currentStep: number | null;
  completedSteps: number[];
  isProcessing: boolean;
}

const ProcessingPipeline: React.FC<ProcessingPipelineProps> = ({
  currentStep,
  completedSteps,
  isProcessing,
}) => {
  const [improvements, setImprovements] = useState<string[]>([]);

  useEffect(() => {
    if (completedSteps.includes(PROCESSING_STEPS.length - 1)) {
      setImprovements([
        'Applied balanced sampling to reduce demographic bias',
        'Generated additional synthetic data for underrepresented groups',
        'Optimized data distribution across categories',
        'Enhanced attribute balance in synthetic data'
      ]);
    }
  }, [completedSteps]);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Processing Pipeline</h2>
      
      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-[22px] top-8 w-0.5 h-[calc(100%-64px)] bg-gray-200 z-0"></div>
        
        <div className="space-y-6">
          {PROCESSING_STEPS.map((step, index) => {
            const isActive = currentStep === index;
            const isCompleted = completedSteps.includes(index);
            const isUpcoming = !isActive && !isCompleted;
            
            return (
              <ProcessingStep
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={isActive}
                isCompleted={isCompleted}
                isUpcoming={isUpcoming}
                isProcessing={isProcessing}
                improvements={index === PROCESSING_STEPS.length - 1 ? improvements : []}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessingPipeline;