import ListOfNecessities from '../ListOfNecessities/ListOfNecessities';
import styles from './InstructionDetails.module.css';

const InstructionDetails = ({ details }) => {
  return (
    <>
      <div className={styles.necessity}>
        <ListOfNecessities object={details} necessitiesName="ingredients" />
        <ListOfNecessities object={details} necessitiesName="equipment" />
      </div>
      <p className={styles.step}>{`${details.number}) ${details.step}`}</p>
    </>
  );
};

export default InstructionDetails;
