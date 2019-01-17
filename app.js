
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });

  };


render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
      };

 return (
       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.props} </li>
    );
  };
};

let GroceryList = (props) => (
  <div>
  <h2>My Grocery List</h2>
    <ul>
    {props.todos.map(todo =>
      <GroceryListItem key= {todo} todo= {todo} />
    )}
  </ul>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));