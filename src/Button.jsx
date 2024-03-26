function Button() {
  let count = 0;

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(name + " clicked " + count);
  //   } else {
  //     console.log(name + " YOU are not allowed to click ");
  //   }
  // };

  //  it will give you all of the  method in the console
  // const handleClick = (e) =>console.log(e);

  const handleClick = (e) => {
    count++;
    e.target.textContent = "YOU Clicked me " + count;
  };

  // const handleClick = (e) => {
  //   // it will remove the button if you clicked it
  //   e.target.style.display = "none";
  // };
  return (
    //  it will give you all of the  method in the console
    <button className="button" onClick={(e) => handleClick(e)}>
      Click me
    </button>
  );
}
export default Button;

//https://youtu.be/CgkZ7MvWUAA?t=5575
