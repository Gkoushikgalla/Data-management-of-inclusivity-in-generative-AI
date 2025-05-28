import React from 'react';
import { Download } from 'lucide-react';
import { generateProcessedFilename } from '../utils/fileHandlers';

interface FileDownloadProps {
  fileName: string;
}

const FileDownload: React.FC<FileDownloadProps> = ({ fileName }) => {
  const processedFileName = generateProcessedFilename(fileName);
  
  const handleDownload = () => {
    // In a real application, this would be a link to the processed file
    // For this demo, we'll create a dummy CSV content
    const csvContent = "id,name,age,gender,ethnicity,location\n1,Alex Smith,34,Non-binary,Mixed,New York\n2,Jamie Lopez,28,Female,Latino,Miami\n3,Taylor Johnson,42,Male,Black,Chicago";
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = processedFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors font-medium flex items-center"
      >
        <Download className="h-5 w-5 mr-2" />
        Download Processed Dataset
      </button>
      <p className="text-sm text-gray-500 mt-2">
        Available as: {processedFileName}
      </p>
    </div>
  );
};

export default FileDownload;