class Blog extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    console.log("Blog component has been mounted");
    fetch(
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/posts"
    )
      .then(res => res.json())
      .then(data => {
        console.log("I have fetched the data");
        this.setState({ data });
      });
  }

  render() {
    return this.state.data.map(post => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        date={post.date}
      />
    ));
  }
}
