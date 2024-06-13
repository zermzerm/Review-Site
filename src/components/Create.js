import { useNavigate } from 'react-router-dom';
import fetchData from './api.js';
import styles from './styles.module.css';

export default function Create() {
  const navigate = useNavigate();
  const createData = async (movie, options) => {
    await fetchData('movie', options);
    navigate('/');
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <p>작성하기</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const movieCategory = e.target.category.value;
            const title = e.target.title.value;
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ movieCategory, title }),
              cache: 'no-store',
            };
            createData('movie', options);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <input type="text" name="category" placeholder="category" />
          </p>
          <p>
            <input type="submit" value="crete" />
          </p>
        </form>
      </div>
    </div>
  );
}
