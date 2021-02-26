import styles from '../styles/components/Profile.module.css';

export default function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
      <div>
        <strong>Diego</strong>
        <p>
          <img src="icons/level.svg" />
          Level 1
          </p>
      </div>
    </div>
  );
}