import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from './api.js';
import styles from './styles.module.css';

export default function Home() {
  const [order, setOrder] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    const category = await fetchData('category');
    const movie = await fetchData('movie');
    setCategoryData(category);
    setMovieData(movie);
    setFilteredMovie(movie);
  };

  const handleOrderBy = () => {
    setOrder(!order);
  };

  const handleCategory = (category) => {
    const filterMovie = category
      ? movieData.filter((el) => el.movieCategory === category)
      : movieData;
    setFilteredMovie(filterMovie);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log(search);
      const searchedMovie =
        search !== ''
          ? filteredMovie.filter((el) => el.title.includes(search))
          : movieData;
      console.log(searchedMovie);
      setFilteredMovie(searchedMovie);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <div className={styles.category}>
          <div
            onClick={() => {
              handleCategory('');
            }}
          >
            전체
          </div>
          {categoryData.map((el) => (
            <div
              key={el.id}
              onClick={() => {
                handleCategory(el.category);
              }}
            >
              {el.category}
            </div>
          ))}
        </div>
        <div className={styles.orderby}>
          <div>필터</div>
          <div>정렬</div>
          <div>
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
        </div>

        <div className={styles.searchWrapper}>
          <input
            className={styles.search}
            value={search}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleSearch(e)}
          />
        </div>
        <div
          className={`${styles.contentWrapper} 
            ${order ? styles.contentWrapperCard : styles.contentWrapperList}`}
        >
          {filteredMovie.length !== 0 ? (
            filteredMovie.map((el) => (
              <Link to={`/movie/${el.id}`} key={el.id}>
                {el.title}
              </Link>
            ))
          ) : (
            <div className={styles.noContent}>데이터가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
