# react-simple-blog

📝 A simple blog in React

## Objectives

What you will learn in this exercise

- Structure your app into separate components
- Create and reuse components

## Instructions 

We will be builing a simple app for a blog in React. See the demo of the final app. 

Your task is to build a `Blog` component which displays a list of posts. Each post should contain a title, author, and date. 

## Creating a component

```
function MyFirstComponent() {
  return (
    <h1>This is my first component</h1>
  )
}
```

## Passing `props` to a component

A component has `props` that can be passed down to it by a parent. 

In this example, a `Parent` component has a `Child` component with `name` and `age` as its `props`.

```
function Child(props) {
  return (
    <h1>Hello, my name is {props.name}</h1>
  )
}

function Parent() {
  return (
    <div>
      <Child name="Alice" />
    </div>
  )
}

```

## Component reuse

Since components are reusable, we can add as many components to our app as we want.

Here's one way you can add multiple components

```
function App() {
  return (
    <React.Fragment>
      <Hello name="Alice" />
      <Hello name="Bob" />
      <Hello name="Cindy" />
    </React.Fragment>
  )
}
```

Another way is to first define an array and then use `map()` to create a new array of React elements

```
function App() {
  const names = ['Alice', 'Bob', 'Cindy']

  return (
    <React.Fragment>
      {names.map(name => {
        return <Hello name={name} />
      })}
    </React.Fragment>
  )
}
```

## Publish your app to GitHub Pages

Publish your app by going into settings in your GitHub repository. Under the header GitHub Pages, select the master branch as your source.

Your app should be published here https://<username>.github.io/<repo-name>
