import DesktopMenu from './desktop-menu/desktop';
import MobileMenu from './mobile-menu/mobile';
import styles from './page.module.css'
export default function Header() {
    return <div>
        <section className={styles.header}>
            <div className={styles.logo}>
                <h1>
                    get<span>linked</span>
                </h1>
            </div>
            <div className={styles.menu}>
                <MobileMenu />
                <DesktopMenu />
            </div>
      </section>
  </div>;
}
