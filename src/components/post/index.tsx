import styles from './styles.module.css';

type Props = {
  placeholder: string;
  value?: string | number;
  onChange: (str: string) => void;
  type: string;
  text?: React.ReactNode;
};

export const Post = ({ onChange, placeholder, value, type, text }: Props) => (
  <div className={styles.divPost}>
    <p className={styles.textPost}> {text}</p>
    <input
      className={styles.postPeople}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    ></input>
  </div>
);
