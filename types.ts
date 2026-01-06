import React from 'react';

export interface InsightResponse {
  insight: string;
  category: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}