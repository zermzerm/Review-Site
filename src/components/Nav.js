import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/">My Review Site</Link>
      <Link to="/create" className={styles.navCreateButton}>
        작성
      </Link>
    </div>
  );
}
