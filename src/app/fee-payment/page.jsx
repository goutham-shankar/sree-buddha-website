import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "./page.css"
const page = () => {
  return (
    <div className="page">
      <div className="page_heading">Fees Payment</div>
      <div className="line"></div>
      <div className="content">
        <NAAC
          name="Fee Notification 2024-25"
          link="/assets/documents/fee-payment/fee.pdf"
        />
        <NAAC
          name="Fee Details B Tech academic years 2024-25"
          link="/assets/documents/fee-payment/page1.pdf"
        />
        <NAAC
          name="Fee Details B Tech 2023-24"
          link="/assets/documents/fee-payment/first-year-fees.pdf"
        />
        <a
          href="https://paydirect.eduqfix.com/app/kVzFwzVfXymPimroyelo5IhMsg3USLFAVjvL7rFV/7618/17623"
          className="link"
        >
          Student Online Fee Payment
        </a>
      </div>
    </div>
  );
};

export default page;
