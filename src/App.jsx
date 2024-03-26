import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
function App() {
  const fruits = [
    { id: 1, name: "bananas", calories: 95 },
    { id: 2, name: "apples", calories: 45 },
    { id: 3, name: "orange", calories: 104 },
    { id: 4, name: "strawberry", calories: 66 },
    { id: 5, name: "Avocado", calories: 22 },
  ];
  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 200 },
    { id: 3, name: "corn", calories: 222 },
    { id: 4, name: "carrots", calories: 90 },
    { id: 5, name: "broccoli", calories: 33 },
  ];
  return (
    <>
      <Counter />
      <MyComponent />
      <Student name="Mushari" age={1} isStudent={true} />
      <Student name="meesh" age={2} isStudent={false} />
      <Button />
      <UserGreeting isLoggedIn={false} name="mushari" />
      <List items={fruits} category="Fruits" lowCal={false} />

      {fruits.length > 0 ? (
        <List items={fruits} category="Fruits" lowCal={true} />
      ) : null}
      <List items={vegetables} category="vegetables" lowCal={false} />

      <Header />
      <Button />
      <Card />
      <Card />
      <Card />
      <Food />
      <Button />
      <Card />
      <Footer />
    </>
  );
}

export default App;
