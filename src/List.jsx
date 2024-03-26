function List( props ) {
  //   const array = ["bananas", "apples", "orange", "strawberry"];
  //   array.sort();
  //   const listItems = array.map((fruits) => <li>{fruits}</li>);
  //   const fruits = [
  //     { id: 1, name: "bananas", calories: 95 },
  //     { id: 2, name: "apples", calories: 45 },
  //     { id: 3, name: "orange", calories: 104 },
  //     { id: 4, name: "strawberry", calories: 66 },
  //     { id: 5, name: "Avocado", calories: 22 },
  //   ];
  //   Warning: Each child in a list should have a unique "key" prop.
  // it will gave you this error in the consol if you used object list ,and that is why i used key inside the li ... if you are using mongo it will be the id for each row
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical order
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical order
  //   fruits.sort((a, b) => a.calories - b.calories); // numerical order
  //   fruits.sort((a, b) => b.calories - a.calories); // reverse numerical order
  if (props.lowCal) {
    const lowCalories = props.items.filter(
      (lowCalorie) => lowCalorie.calories < 100
    );
    const listItems = lowCalories.map((lowCalorie) => (
      <li key={lowCalorie.id}>
        {lowCalorie.name}:&nbsp; <b>{lowCalorie.calories}</b>
      </li>
    ));

    return (
      <>
        <div className="list">
          <h3 className="category">{props.category}</h3>
          <ol>{listItems}</ol>
        </div>
      </>
    );
  } else {
    const listItems = props.items.map((item) => (
      <li key={item.id}>
        {item.name}:&nbsp; <b>{item.calories}</b>
      </li>
    ));
    return (
      <>
        <div className="list">
          <h3 className="category">{props.category}</h3>
          <ol>{listItems}</ol>
        </div>
      </>
    );
  }
}

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
