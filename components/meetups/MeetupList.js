import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetups = [] }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          bonusimage={meetup.bonusimage}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
