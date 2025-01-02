"use client";
import { useGoalsPageModal } from "./GoalsPage.model";
import GoalsPageView from "./GoalsPageView";

function GoalsPage() {
  const {props} = useGoalsPageModal();

  return (
    <GoalsPageView props={props} />
  );
}

export default GoalsPage;
