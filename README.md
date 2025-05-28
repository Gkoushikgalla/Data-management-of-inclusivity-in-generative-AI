# Data Management of Inclusivity in Generative AI

This project provides a platform to **detect bias, generate synthetic data, and improve inclusivity** in datasets for generative AI. Users can upload CSV datasets, process them through an automated pipeline, and download improved, more inclusive datasets.

## Features

- **CSV Upload:** Drag & drop or browse to upload datasets.
- **Automated Processing Pipeline:**  
  1. **Data Cleaning:** Fix missing values, case sensitivity, and standardize formats.
  2. **Bias Detection:** Analyze for demographic and attribute bias.
  3. **Synthetic Data Generation:** Create balanced synthetic data.
  4. **Data Augmentation:** Add diverse examples for underrepresented groups.
  5. **Inclusivity Scoring:** Evaluate dataset inclusivity.
  6. **Feedback Loop:** Apply improvements based on bias and inclusivity scores.
- **Download:** Get the processed, improved dataset.
- **Feedback Modal:** Rate and suggest improvements after download.

## Complete Flow

1. **Upload Dataset:**  
   - Go to the home page.
   - Upload one or more CSV files (max 10MB each).

2. **Start Processing:**  
   - Click "Start Processing" to begin the pipeline.
   - Each step is visualized with progress and icons.

3. **Processing Steps:**  
   - The pipeline runs through cleaning, bias detection, synthetic data generation, augmentation, scoring, and feedback loop.
   - Improvements are displayed after the feedback loop.

4. **Download Improved Dataset:**  
   - Once processing completes, download the processed CSV file.

5. **Provide Feedback:**  
   - A modal appears for you to rate your satisfaction and suggest improvements.

6. **Process New Datasets:**  
   - Option to reset and upload new files.

## Tech Stack

- **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

## Local Development

```sh
cd project 
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/components/` – UI components (upload, download, pipeline, feedback)
- `src/pages/` – Main page
- `src/utils/` – Data processing logic and helpers

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

*Identify and mitigate bias in your datasets with our AI-powered data fairness platform!*
