import Section from '../Containers/Section';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <Section
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
      className={styles.section}
    >
      <img className={styles.image} src='/assets/main-page-image.jpeg' />
      <div className={styles.content}>
        <h1>Perfect Pixel</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur
          odit unde! Tempore repudiandae voluptate, incidunt, ex quibusdam
          dolores ipsam quo et velit quod praesentium vitae beatae iste sapiente
          reprehenderit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil
          ex corrupti rerum expedita at, harum repellendus et voluptates libero.
          Pariatur ex aut qui nihil eos deleniti eum amet laborum!
        </p>
      </div>
    </Section>
  );
};

export default MainPage;
