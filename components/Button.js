import styles from '../styles/button.module.css';

export default function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      style={{ backgroundColor: 'green' }}
      className={styles.error}
    >
      Destroy
    </button>
  );
}
