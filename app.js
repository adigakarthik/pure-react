const Person = (props) => {
  return React.createElement("div", {key:'per'}, [
    React.createElement("h1", {key:1}, props.name),
    React.createElement("p", {key:2}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {key:'app'}, [
    React.createElement("h1", { className: "title", key:'title' }, "React Is Rendered"),
    React.createElement(Person, {
      name: "Krishna Devaraya",
      occupation: "King",
      key:'p1',
    }),
    React.createElement(Person, {
      name: "Tenali Ramakrishna",
      occupation: "Wise Minister",
      key:'p2',
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
