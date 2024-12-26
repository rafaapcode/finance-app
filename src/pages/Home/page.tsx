"use client";
import { useHomePageModel } from "./HomePage.model";
import HomePageView from "./HomePageView";

function HomePage() {
  const {props} = useHomePageModel();

  return (
    <HomePageView props={props}/>
  );
}
export default HomePage;
