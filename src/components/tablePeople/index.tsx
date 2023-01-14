import styles from './styles.module.css';
type Props = {
  posts: {
    name: string;
    LastName: string;
    date: string;
    Email: string;
    CPF: string;
  }[];
};

export const TablePeople = ({ posts }: Props) => {
  const post = Object.values(posts);

  console.log(typeof post);
  return (
    <table className={styles.tablePeople}>
      <thead>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Data</th>
        <th>Email</th>
        <th>CPF</th>
      </thead>
      {post.map((el, postIndex) => (
        <tr key={postIndex}>
          {Object.values(el).map((item) => (
            <td key={item}>{item}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};
