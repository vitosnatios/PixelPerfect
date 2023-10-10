import styles from './Requirements.module.css';

const Requirements = () => {
  return (
    <section className={styles.requirements}>
      <h2>Requisitos:</h2>
      <ul className={styles.listRequeriments}>
        <li>Nome completo</li>
        <li>Forneça seu email principal para entramos em contato</li>
        <li>Descreva o ramo de sua empresa ou orgnaização.</li>
        <li>
          Aproveite o campo maior para descrever em detalhes o serviço esperado
          e o prazo esperado para conclusão do projeto.{' '}
        </li>
      </ul>
    </section>
  );
};

export default Requirements;
