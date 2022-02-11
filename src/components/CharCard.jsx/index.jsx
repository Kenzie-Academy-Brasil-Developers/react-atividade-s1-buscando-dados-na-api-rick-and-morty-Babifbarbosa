import "./style.css";
const ChaCard = ({ itemcard }) => {
  return (
    <div
      id="card"
      className={itemcard.status === "Alive" ? "cardverde" : "cardvermelho"}
    >
      <p className="namespersonagens"> {itemcard.name}</p>
      <span className="spanstatus">Status: {itemcard.status}</span>
      <img className="imgcard" src={itemcard.image} alt="personagens" />
     
    </div>
  );
};
export default ChaCard;
