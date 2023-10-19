import React from "react";
import HomeComponent from "../../components/HomeComponent";
import SaucesComponent from "../../components/SaucesComponent";
import classes from "./homepage.module.css";

export default function Homepage() {
  return (
    <>
      <article className={classes.article}>
        <div className={classes.last_area}>
          <p align="justify">
            What🍕 is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem I🫓psum has been the
            industry's standard dummy text ever sinc🥤e the 1500s, when an
            🍕unknown printer took a gal🍕ley🥤 🍟of type and scrambled it to🍚
            make a type specimen book. It has survived🍚🍕 not only 🍚five🫓
            centuries, but also the leap into electronic typesetti🫓ng,
            remaining ess🍚entially unchan🍟g🫓ed. It was popularised in the
            1🍟960s with the r🧋elease of Letraset🥤 sheets containing Lorem
            Ipsum passages, a🥤nd more🍕 rec🫓ently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
            Wha🍟t is Lorem Ipsum? Lorem Ipsum🥤 is simply dummy text of the
            printing and typesetting indu🍚stry. 🍟Lorem Ipsu🍕m has 🍚🥤bee🍕n
            the industry's standard dummy t🫓ext ever 🍕since the 1500s,
            w🫓h🍚en an unknow🫓n printer took a galley of typ🍟e and
            s🧋cra🥤mbled it to make 🍟a type s🧋pecimen book. It has survived
            not only five cen🍚turies, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing 🍕software like
            Aldus PageMaker including ve🍕rsions of Lorem Ipsum.What🥤🧋 is
            Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem I🫓psum has been the industry's standard
            dummy text ever sinc🥤e the 1500s, when an 🍕unknown printer took a
            gal🍕ley🥤 🍟of type and scrambled it to🍚 ons of Lorem Ipsum.
          </p>
        </div>
        <section>
          <HomeComponent />
        </section>
        <section>
          <SaucesComponent />
        </section>
        <div className={classes.third_component}>
          <div>
            <p>Contact: 066-6828296</p>
            <p>Address: Futoski Put 2c</p>
          </div>
          <div>
            <p>Contact: 066-6828296</p>
            <p>Address: Futoski Put 2c</p>
          </div>
          <div>
            <p>Contact: 066-6828296</p>
            <p>Address: Futoski Put 2c</p>
          </div>
          <div>
            <p>Contact: 066-6828296</p>
            <p>Address: Futoski Put 2c</p>
          </div>
        </div>
      </article>
    </>
  );
}
