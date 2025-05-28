import React from 'react';
import { CheckCircle2, DivideIcon as LucideIcon } from 'lucide-react';

interface ProcessingStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  isCompleted: boolean;
  isUpcoming: boolean;
  isProcessing: boolean;
  improvements?: string[];
}

const ProcessingStep: React.FC<ProcessingStepProps> = ({
  title,
  description,
  icon: Icon,
  isActive,
  isCompleted,
  isUpcoming,
  isProcessing,
  improvements = [],
}) => {
  return (
    <div className={`relative flex items-start transition-opacity ${isUpcoming && isProcessing ? 'opacity-50' : 'opacity-100'}`}>
      <div className="mr-4 relative z-10">
        {isCompleted ? (
          <div className="h-11 w-11 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="h-7 w-7 text-green-600" />
          </div>
        ) : (
          <div
            className={`h-11 w-11 rounded-full flex items-center justify-center ${
              isActive 
                ? 'bg-blue-100 animate-pulse' 
                : 'bg-gray-100'
            }`}
          >
            <Icon className={`h-6 w-6 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className={`font-medium ${
          isActive ? 'text-blue-700' : isCompleted ? 'text-green-700' : 'text-gray-800'
        }`}>
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        
        {isActive && (
          <div className="mt-2">
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full animate-progress"></div>
            </div>
          </div>
        )}

        {isCompleted && improvements.length > 0 && (
          <div className="mt-3 space-y-1">
            {improvements.map((improvement, index) => (
              <div key={index} className="flex items-center text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                <span>{improvement}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessingStep;