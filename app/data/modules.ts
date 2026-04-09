import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'flavor-lab',
    title: 'Flavor Lab',
    description: 'Where sensory science meets cultural resonance.',
    problemSolved: 'Generic flavor profiles causing low stickiness.',
    targetUser: 'Product Innovators',
    badge: 'R&D',
  },
  {
    id: 'sku-strategy',
    title: 'SKU Strategy',
    description: 'Precision mapping of format, dose, and frequency.',
    problemSolved: 'Over-extended product lines with high churn.',
    targetUser: 'Brand Founders',
    badge: 'Strategy',
  },
  {
    id: 'growth-os',
    title: 'Growth OS',
    description: 'The algorithmic path to resilient customer LTV.',
    problemSolved: 'Unreliable CAC/LTV ratios.',
    targetUser: 'Growth Leads',
    badge: 'Marketing',
  },
  {
    id: 'channel-os',
    title: 'Channel OS',
    description: 'Fitting products into the right physical and digital shelves.',
    problemSolved: 'Poor channel-product fit.',
    targetUser: 'Sales Operations',
    badge: 'Commerce',
  },
  {
    id: 'economics-console',
    title: 'Economics Console',
    description: 'Real-time visibility into the unit-level truth.',
    problemSolved: 'Hidden costs eroding margins.',
    targetUser: 'CFOs / Operators',
    badge: 'Finance',
  },
  {
    id: 'packaging-trust-lab',
    title: 'Packaging & Trust Lab',
    description: 'Designing for immediate visual authority.',
    problemSolved: 'Low trust during the first 3-second shelf encounter.',
    targetUser: 'Creative Directors',
    badge: 'Design',
  },
];
