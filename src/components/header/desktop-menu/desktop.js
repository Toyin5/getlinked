import RegisterButton from '@/components/register-button/button';
import styles from './desktop.module.css'
export default function DesktopMenu() {
  return (
    <div className={styles.DesktopMenu}>
      <div className={styles.menuList_links}>
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contacts</li>
            <li>
             <RegisterButton />
            </li>
          </ul>
          </div>
    </div>
  );
}
