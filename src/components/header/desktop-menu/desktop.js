import styles from './desktop.module.css'
export default function DesktopMenu() {
  return (
    <div>
      <div className={styles.menu}>
        <ul>
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contacts</li>
          <li>
            <button className={styles.registerButton}>Register</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
