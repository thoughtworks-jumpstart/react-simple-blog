function Post(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.date}</p>
    </section>
  );
}

function Blog() {
  const posts = [
    {
      id: "ba4e7dc3-b684-4353-bd53-e273c30b8ec8",
      title: "10 health benefits of eating watermelons",
      author: "Derek Bankson",
      date: "2019-09-25"
    },
    {
      id: "b5106698-18d3-4272-a1a3-15c891ae26df",
      title: "Why programmers like pizzas so much",
      author: "Aaron Johson",
      date: "2019-09-24"
    },
    {
      id: "6c3ec1fa-9435-4a7d-a0cc-265e0cdbc930",
      title: "Karate lessons for React developers",
      author: "Melanie Pulice",
      date: "2019-09-23"
    }
  ];

  return (
    <React.Fragment>
      <h1>My First Blog</h1>
      {posts.map(post => (
        <Post title={post.title} author={post.author} date={post.date} />
      ))}
    </React.Fragment>
  );
}

const app = document.querySelector("#app");
ReactDOM.render(<Blog />, app);
