import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from './api.js';
import styles from './styles.module.css';

export default function Content() {
  const [content, setContent] = useState([]);
  const { id } = useParams();

  const loadData = async () => {
    const content = await fetchData(`movie/${id}`);
    setContent(content);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <p>{content.title}</p>
        <div>
          <p>평점</p>
          <p>좋아요</p>
        </div>
        <div>내용</div>
        <div>
          <div>댓글</div>
          <div>평점</div>
        </div>
      </div>
    </div>
  );
}
