import { StatusType } from '../../types';
import styles from './StatusIndicator.module.css';

interface StatusIndicatorProps {
  status: StatusType;
}

const statusLabels: Record<StatusType, string> = {
  'high-performer': 'High Performer',
  'at-risk': 'At Risk',
  'stable': 'Stable',
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div className={styles.container} data-status={status}>
      <span className={styles.dot}></span>
      <span className={styles.label}>{statusLabels[status]}</span>
    </div>
  );
};
