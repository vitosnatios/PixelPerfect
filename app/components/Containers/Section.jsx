import styles from './Section.module.css';

const Section = ({ children, color = '#fcfdff', ...props }) => (
  <section style={{ background: color }} {...props} className={styles.section}>
    {children}
  </section>
);

export default Section;
