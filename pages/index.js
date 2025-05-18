import { Fragment } from "react";

import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://b2257298:b2257298@cluster0.vqdr9.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        id: meetup._id.toString(),
        bonusimage: meetup.bonusimage || null,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
