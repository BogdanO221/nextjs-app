import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.bonusimage && (
        <div className={classes.bonusImage}>
          <img src={props.bonusimage} alt="Dodatna slika" />
        </div>
      )}
    </section>
  );
}

export default MeetupDetail;
