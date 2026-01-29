import styles from './Recommendations.module.css';

interface RecommendationsProps {
  conversionRate: number;
}

const getRecommendations = (conversionRate: number): string[] => {
  const recommendations: string[] = [];

  if (conversionRate < 10) {
    recommendations.push('Consider increasing ad budget on top-performing channels.');
    recommendations.push('Optimize mobile landing page layout to improve conversion.');
  } else if (conversionRate >= 20) {
    recommendations.push('Scale successful marketing campaigns to maximize ROI.');
    recommendations.push('Consider expanding service offerings based on patient demand.');
  } else {
    recommendations.push('A/B test different ad creatives to improve conversion rates.');
    recommendations.push('Review and optimize the patient booking flow for better UX.');
  }

  return recommendations;
};

export const Recommendations: React.FC<RecommendationsProps> = ({ conversionRate }) => {
  const recommendations = getRecommendations(conversionRate);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recommendations</h3>
      <ul className={styles.list}>
        {recommendations.map((rec, index) => (
          <li key={index} className={styles.item}>
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
};
