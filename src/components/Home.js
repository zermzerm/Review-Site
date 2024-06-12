import { useEffect, useState } from 'react';
import fetchData from './api.js';
import styles from './styles.module.css';

export default function Home() {
  const [order, setOrder] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const handleOrderBy = () => {
    setOrder(!order);
  };

  useEffect(() => {
    const loadData = async () => {
      const category = await fetchData('category');
      const movie = await fetchData('movie');
      setCategoryData(category);
      setMovieData(movie);
    };
    loadData();
  }, []);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <ul className={styles.category}>
          {categoryData.map((el) => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
        <div className={styles.orderby}>
          <div>정렬</div>
          <div
            onClick={() => {
              handleOrderBy();
            }}
          >
            리스트
          </div>
          <div
            onClick={() => {
              handleOrderBy();
            }}
          >
            카드
          </div>
        </div>
        <div
          className={`${styles.contentWrapper} 
            ${order ? styles.contentWrapperCard : styles.contentWrapperList}`}
        >
          {movieData.map((el) => (
            <div>{el.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
