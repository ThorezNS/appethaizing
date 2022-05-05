import styles from './ListOfNecessities.module.css';

const ListOfNecessities = ({ object, necessitiesName }) => {
  return (
    <>
      {object[necessitiesName].length ? (
        <div className={styles.container}>
          <p>{`${necessitiesName.toUpperCase()}:`}</p>
          {object[necessitiesName].map((necessity, index) => {
            return <p key={index}>{`- ${necessity.name}`}</p>;
          })}
        </div>
      ) : null}
    </>
  );
};

export default ListOfNecessities;
