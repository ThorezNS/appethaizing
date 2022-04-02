import styles from './Icon.module.css';

const Icon = ({ name, recipe }) => {
  return <div className={recipe[name] ? styles[name] : ''}></div>;
};

export default Icon;
