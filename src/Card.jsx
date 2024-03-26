import img from "/robotImage.png";
function Card() {
  return (
    <div className="card">
      <img className="card-img" src={img} alt="img"></img>
      <h2 className="card-title">Mushari Card</h2>
      <p className="card-text">
        Hello my name is mushari and this is my first vito website
      </p>
    </div>
  );
}
export default Card;
