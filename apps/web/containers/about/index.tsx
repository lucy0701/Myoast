import Image from 'next/image';
import styles from './index.module.css';

export default function About() {
  return (
    <main className={styles.wrap}>
      <div className={styles.contentWrap}>
        <div className={styles.info_1}>
          <h2>나를 알고, 더 나아가 상대를 알다</h2>
          <p>&quot;나는 어떤 사람일까?&quot;</p>
          <p>&quot;내가 왜 이렇게 느끼는 걸까?&quot;</p>
          <p>&quot;저 사람의 심리는 어떨까?&quot;</p>
          <p>
            MBTI는 이런 궁금증에 대한 해답을 제공하여 <br />
            많은 이들에게 흥미를 불러일으킵니다.
          </p>
          <p>
            그러나 매번 50, 60개의 문제를 풀어야 하는 <br />
            MBTI 검사는 꽤나 번거로울 수 있습니다.
          </p>
        </div>
        <div className={styles.info_2}>
          <h2>그래서 묘스트는 탄생했습니다.</h2>
          <p>
            MBTI 검사는 물론이고 다양한 심리테스트를 <br />
            <span>누구나 손쉽게 즐길 수 있도록 만들었습니다.</span>
          </p>
          <p>
            <span>Myoast</span>은 여러분이 즐길 수 있는 다양한 테스트를
            제공하여, 변화하는 우리 자신과 주변의 세계를 더 재미있게 탐험할 수
            있도록 도와줍니다.
          </p>
          <p>함께 즐겁고 의미 있는 여정을 떠나봐요! 🚀</p>
        </div>
        <Image
          src='/images/logoIcon.png'
          alt='logo'
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}
