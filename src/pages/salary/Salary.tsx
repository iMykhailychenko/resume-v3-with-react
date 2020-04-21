import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import Sale from './sale/Sale';

import styles from './Salary.module.css';
import emoji from '../../images/emoji/salary.png';

const Salary = () => (
  <>
    <PageFirstBlock title="Ожидаемая зарплата" img={emoji} />

    <PageText>
      <p>
        В соответствии с последними данными сайта DOU, Junior Software Engineer,
        который знает язык программирования JavaScript, зарабатывает от 450$ до
        700$ в месяц. Объективная реальность такова, что приезжему человеку
        прожить в Киеве на зарплату меньше 600$ практически невозможно, так как
        кроме удовлетворения своих первичных потребностей, нужно платить деньги
        ещё и за аренду жилья.
      </p>

      <p>
        Поэтому, несмотря на то, что программирование для меня почти как хобби,
        я не смогу проживать в Киеве на протяжении долгого времени получая
        зарплату меньше 600$. В свою очередь, за эти деньги я готов максимально
        быстро погрузиться в работу, выкладываться на 110%, постоянно изучать
        что-то новое и помогать вашей компании расти.
      </p>
    </PageText>

    <section className={styles.section}>
      <p>
        В свою очередь, за эти деньги я готов максимально быстро погрузиться в
        работу, выкладываться на 110%, постоянно изучать что-то новое и помогать
        вашей компании расти.
      </p>

      <div className={styles.flex}>
        <Sale number={1200.0} prefix="before " />
        <Sale number={999.99} prefix="now " />
      </div>
    </section>

    <section className={styles.section}>
      <p>
        В свою очередь, за эти деньги я готов максимально быстро погрузиться в
        работу, выкладываться на 110%, постоянно изучать что-то новое и помогать
        вашей компании расти.
      </p>
    </section>

    <SplitLink path="/contacts" text="Контакты" />
  </>
);

export default Salary;
