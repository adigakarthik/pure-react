const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React Is Rendered"),
    React.createElement(Person, {
      name: "Krishna Devaraya",
      occupation: "King",
    }),
    React.createElement(Person, {
      name: "Tenali Ramakrishna",
      occupation: "Wise Minister",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
