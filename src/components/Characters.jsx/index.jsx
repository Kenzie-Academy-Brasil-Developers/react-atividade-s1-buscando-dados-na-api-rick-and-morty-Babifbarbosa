import "./style.css";
import ChaCard from "../CharCard.jsx";

const Characters = ({ characterList }) => {
  return (
    <div className="mostrarcard">
      <div className="titulo">
        <h1>Meus personagens</h1>
      </div>
      <div className="cards">
        {characterList.map((item) => {
          return <ChaCard key={item.id} itemcard={item} />;
        })}
      </div>
    </div>
  );
};
export default Characters;
