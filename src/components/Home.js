import { useState } from 'react';
import styles from './styles.module.css';

export default function Home() {
  const [order, setOrder] = useState(false);
  const handleOrderBy = () => {
    setOrder(!order);
  };
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <ul className={styles.category}>
          <li>액션</li>
          <li>범죄</li>
          <li>SF</li>
          <li>코미디</li>
          <li>공포</li>
          <li>스포츠</li>
          <li>판타지</li>
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
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
          <div>컨텐츠</div>
        </div>
      </div>
    </div>
  );
}
