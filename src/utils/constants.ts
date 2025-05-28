import { Check as CleanCheck, FileSearch, Brain, PlusCircle, BarChart, RefreshCw } from 'lucide-react';
import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ProcessingStepType {
  title: string;
  description: string;
  icon: LucideIcon;
  durationMs: number;
}

export const PROCESSING_STEPS: ProcessingStepType[] = [
  {
    title: 'Data Cleaning',
    description: 'Fixing missing values, addressing case sensitivity issues, and standardizing data formats.',
    icon: CleanCheck,
    durationMs: 2000,
  },
  {
    title: 'Bias Detection',
    description: 'Analyzing data for potential biases in gender, ethnicity, age, and other sensitive attributes.',
    icon: FileSearch,
    durationMs: 3500,
  },
  {
    title: 'Synthetic Data Generation',
    description: 'Creating balanced synthetic data to complement real data and address representation gaps.',
    icon: Brain,
    durationMs: 4000,
  },
  {
    title: 'Data Augmentation',
    description: 'Adding diverse examples to increase representation of underrepresented groups.',
    icon: PlusCircle,
    durationMs: 3000,
  },
  {
    title: 'Inclusivity Scoring',
    description: 'Evaluating the dataset for overall inclusivity and representation across key dimensions.',
    icon: BarChart,
    durationMs: 2500,
  },
  {
    title: 'Feedback Loop',
    description: 'Applying automated improvements based on bias detection and inclusivity scoring.',
    icon: RefreshCw,
    durationMs: 3000,
  },
];