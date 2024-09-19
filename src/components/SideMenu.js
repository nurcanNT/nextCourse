import styles from './SideMenu.modules.css';
import Link from 'next/link';

export default function SideMenu() {
  return (
    <nav className={styles.sidemenu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
