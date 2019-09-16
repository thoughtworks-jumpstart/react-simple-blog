function Post(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.date}</p>
    </section>
  );
}