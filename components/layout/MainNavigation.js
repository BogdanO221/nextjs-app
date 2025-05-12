import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Narodne Vesti</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Sve vesti </Link>
          </li>
          <li>
            <Link href="/new-meetup">Dodaj novu vest</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
