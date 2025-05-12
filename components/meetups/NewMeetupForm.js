import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const bonusimageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredBonusImage = bonusimageInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };
    if (enteredBonusImage.bonusimage) {
      meetupData.bonusimage = selectedMeetup.bonusimage;
    }

    props.onAddMeetup(meetupData);
  }

  return (
    <div className={classes.addform}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Naslov</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Naslovna fotografija</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
          <label htmlFor="image">Dodatna slika</label>
          <input type="url" id="bonusimage" ref={bonusimageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Dodaj vest</button>
        </div>
      </form>
    </div>
  );
}

export default NewMeetupForm;
