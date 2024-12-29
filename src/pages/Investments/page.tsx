"use client";
import { useInvestmentPageModel } from "./InvestmentPage.model";
import InvestmentPageView from "./InvestmentPageView";

function InvestmentsPage() {
  const { props } = useInvestmentPageModel();

  return <InvestmentPageView props={props} />;
}

export default InvestmentsPage;
