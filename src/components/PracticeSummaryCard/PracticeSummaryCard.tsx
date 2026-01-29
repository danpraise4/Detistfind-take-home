import React from 'react';
import { PracticeSummary, StatusType } from '../../types';
import { StatusIndicator } from '../StatusIndicator/StatusIndicator';
import { TrendVisualization } from '../TrendVisualization/TrendVisualization';
import { Recommendations } from '../Recommendations/Recommendations';
import styles from './PracticeSummaryCard.module.css';

interface PracticeSummaryCardProps {
  practice: PracticeSummary;
}

export const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({
  practice,
}) => {
  const getStatus = (conversionRate: number): StatusType => {
    if (conversionRate >= 20) return 'high-performer';
    if (conversionRate < 10) return 'at-risk';
    return 'stable';
  };

  const status = getStatus(practice.conversionRate);

  return (
    <div className={styles.card} data-status={status}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.practiceName}>{practice.name}</h2>
        <p className={styles.location}>
          {practice.city}, {practice.country}
        </p>
      </div>

      {/* Status Indicator */}
      <div className={styles.statusContainer}>
        <StatusIndicator status={status} />
      </div>

      {/* Key Metrics */}
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>New Patients</span>
          <span className={styles.metricValue}>{practice.newPatientsThisMonth}</span>
          <span className={styles.metricUnit}>this month</span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Appointment Requests</span>
          <span className={styles.metricValue}>{practice.appointmentRequests}</span>
          <span className={styles.metricUnit}>this month</span>
        </div>

        <div className={styles.metric}>
          <span className={styles.metricLabel}>Conversion Rate</span>
          <span className={styles.metricValue}>{practice.conversionRate}%</span>
          <span className={styles.metricUnit}>this month</span>
        </div>

        {practice.marketingSpend !== undefined && (
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Marketing Spend</span>
            <span className={styles.metricValue}>${practice.marketingSpend.toLocaleString()}</span>
            <span className={styles.metricUnit}>this month</span>
          </div>
        )}
      </div>

      {/* Trend Visualization */}
      <div className={styles.trendSection}>
        <h3 className={styles.trendTitle}>6-Month Trend</h3>
        <TrendVisualization data={practice.monthlyTrend} />
      </div>

      {/* Recommendations */}
      <Recommendations conversionRate={practice.conversionRate} />
    </div>
  );
};
