import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import ProcessingPipeline from '../components/ProcessingPipeline';
import FileDownload from '../components/FileDownload';
import FeedbackModal from '../components/FeedbackModal';
import { processDataset } from '../utils/dataProcessing';
import toast from 'react-hot-toast';

const Home: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [processingComplete, setProcessingComplete] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  
  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    setCompletedSteps([]);
    setCurrentStep(null);
    setProcessingComplete(false);
  };

  const startProcessing = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setCurrentStep(0);
    
    try {
      await processDataset({
        onStepStart: (step: number) => {
          setCurrentStep(step);
        },
        onStepComplete: (step: number) => {
          setCompletedSteps(prev => [...prev, step]);
        },
        onComplete: () => {
          setProcessingComplete(true);
          setIsProcessing(false);
          setCurrentStep(null);
          setShowFeedback(true);
        }
      });
    } catch (error) {
      console.error('Error processing dataset:', error);
      setIsProcessing(false);
    }
  };

  const resetProcess = () => {
    setFiles([]);
    setCompletedSteps([]);
    setCurrentStep(null);
    setProcessingComplete(false);
  };

  const handleFeedbackSubmit = (rating: number, suggestion: string) => {
    toast.success('Thank you for your feedback!');
    // In a real application, this would send the feedback to a server
    console.log('Feedback:', { rating, suggestion });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Data management of inclusivity in generative AI</h1>
        <p className="text-gray-600">
          Upload your datasets, detect bias, generate synthetic data, and download improved, 
          more inclusive datasets with our automated pipeline.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <FileUpload onFileUpload={handleFileUpload} files={files} isProcessing={isProcessing} />
        
        {files.length > 0 && (
          <div className="mt-8">
            <ProcessingPipeline 
              currentStep={currentStep} 
              completedSteps={completedSteps} 
              isProcessing={isProcessing}
            />
            
            <div className="mt-8 flex justify-center">
              {!isProcessing && !processingComplete && (
                <button
                  onClick={startProcessing}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors font-medium flex items-center"
                >
                  Start Processing
                </button>
              )}
              
              {processingComplete && (
                <div className="flex flex-col md:flex-row gap-4">
                  <FileDownload fileName={files[0].name} />
                  <button
                    onClick={resetProcess}
                    className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg shadow-sm hover:bg-slate-300 transition-colors font-medium"
                  >
                    Process New Datasets
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showFeedback && (
        <FeedbackModal
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default Home;