/**
 * Generates a filename for the processed version of the uploaded file
 * 
 * @param originalFilename The name of the original uploaded file
 * @returns A new filename with "_processed" appended
 */
export const generateProcessedFilename = (originalFilename: string): string => {
  if (!originalFilename) return 'processed_data.csv';
  
  const nameParts = originalFilename.split('.');
  const extension = nameParts.pop() || 'csv';
  const baseName = nameParts.join('.');
  
  return `${baseName}_processed.${extension}`;
};

/**
 * In a real application, this file would contain additional functions for:
 * - Reading CSV files
 * - Parsing CSV data into structured format
 * - Validating file contents
 * - Converting processed data back to CSV
 */