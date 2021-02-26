import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile () {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rafaelgatti.png" alt="Rafael Gatti" />
      <div>
        <strong>Rafael Gatti</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
          </p>
      </div>
    </div>
  );
}