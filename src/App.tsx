import { PracticeSummary } from './types';
import { PracticeSummaryCard } from './components/PracticeSummaryCard/PracticeSummaryCard';
import styles from './App.module.css';

// Mock data with diverse values
const mockPractices: PracticeSummary[] = [
  {
    id: '1',
    name: 'Bright Smile Dental',
    city: 'Toronto',
    country: 'Canada',
    newPatientsThisMonth: 45,
    appointmentRequests: 250,
    conversionRate: 18.0,
    monthlyTrend: [35, 38, 32, 40, 42, 45],
    marketingSpend: 12500,
  },
  {
    id: '2',
    name: 'Elite Dental Care',
    city: 'Vancouver',
    country: 'Canada',
    newPatientsThisMonth: 28,
    appointmentRequests: 180,
    conversionRate: 15.6,
    monthlyTrend: [20, 22, 18, 25, 26, 28],
    marketingSpend: 8500,
  },
  {
    id: '3',
    name: 'Coastal Family Dentistry',
    city: 'Calgary',
    country: 'Canada',
    newPatientsThisMonth: 52,
    appointmentRequests: 240,
    conversionRate: 21.7,
    monthlyTrend: [40, 42, 38, 45, 48, 52],
    marketingSpend: 15200,
  },
];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.leftSection}>
            <div className={styles.logoContainer}>
              <img 
                src="/assets/logo-dentistfind.png" 
                alt="DentistFind Logo" 
                className={styles.logo}
              />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.headerText}>
              <h1 className={styles.title}>Practice Summary</h1>
              <p className={styles.subtitle}>Dashboard</p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.headerActions}>
              <div className={styles.breadcrumb}>
                <span className={styles.breadcrumbItem}>Dashboard</span>
                <span className={styles.breadcrumbSeparator}>/</span>
                <span className={styles.breadcrumbItemActive}>Practices</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {mockPractices.map((practice) => (
            <PracticeSummaryCard key={practice.id} practice={practice} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
