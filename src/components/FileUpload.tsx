import React, { useRef, useState } from 'react';
import { Upload, File as FileIcon, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
  files: File[];
  isProcessing: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, files, isProcessing }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  
  const validateAndUploadFiles = (selectedFiles: FileList | File[]) => {
    const validFiles: File[] = [];
    const errors: string[] = [];
    
    Array.from(selectedFiles).forEach(file => {
      // Check if file is a CSV
      if (!file.name.endsWith('.csv')) {
        errors.push(`${file.name} is not a CSV file`);
        return;
      }
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        errors.push(`${file.name} exceeds 10MB limit`);
        return;
      }
      
      validFiles.push(file);
    });
    
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
    }
    
    if (validFiles.length > 0) {
      onFileUpload(validFiles);
      toast.success(`${validFiles.length} file(s) uploaded successfully`);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      validateAndUploadFiles(e.target.files);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files?.length) {
      validateAndUploadFiles(e.dataTransfer.files);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Datasets</h2>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".csv"
          multiple
        />
        <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Drag & drop your CSV files or click to browse
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          Supported format: CSV (max 10MB per file)
        </p>
        <div className="inline-flex items-center text-sm text-gray-500">
          <AlertCircle className="h-4 w-4 mr-1" />
          <span>Your data remains private and secure</span>
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="mt-6 space-y-4">
          {files.map((file, index) => (
            <div key={`${file.name}-${index}`} className="border rounded-lg p-4">
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-blue-100 rounded-lg">
                  <FileIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{file.name}</h3>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(2)} KB • CSV
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;