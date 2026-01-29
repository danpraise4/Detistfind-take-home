import React from 'react';
import styles from './TrendVisualization.module.css';

interface TrendVisualizationProps {
  data: number[];
}

export const TrendVisualization: React.FC<TrendVisualizationProps> = ({ data }) => {
  const maxValue = Math.max(...data, 1); // Avoid division by zero

  return (
    <div className={styles.container}>
      <div className={styles.bars}>
        {data.map((value, index) => {
          const height = (value / maxValue) * 100;
          return (
            <div key={index} className={styles.barWrapper}>
              <div
                className={styles.bar}
                style={{ height: `${height}%` }}
                title={`Month ${index + 1}: ${value} patients`}
              />
              <span className={styles.monthLabel}>{index + 1}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.axisLabel}>Months</div>
    </div>
  );
};
