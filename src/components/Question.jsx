import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Question = () => {
  const questionData = {
    heading: "Frequently Asked Questions",
    data: [
      {
        id: 1,
        query: "When does the course start and finish?",
        answer:
          "You can dive into the courses immediately! It is completely self-paced - you decide when you start and when you finish. You will have access to all courses as long as you have an active subscription.",
      },
      {
        id: 2,
        query: "How often am I charged?",
        answer:
          "Our monthly and yearly memberships are subscriptions - you therefore will be charged every month (monthly membership) or every year (yearly membership). You will be charged automatically unless you cancelled your subscription in your profile. If you cancel, you can still consume all materials until your current billing cycle (month or year) ends.",
      },
      {
        id: 3,
        query: "What if I am unhappy with the subscription?",
        answer:
          "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us via email in the first 30 days after your initial purchase and we will give you a full refund. Please note that subsequent renewal payments are not eligible for refunds.",
      },
      {
        id: 4,
        query: "Can I cancel anytime?",
        answer:
          "Yes! You can cancel your subscription anytime. If you do, you will not be charged again when the subscription would renew (i.e. after a month or a year). You will lose course access once your current billing cycle (month or year) ended.",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex items-center gap-3 pb-4">
        <FaQuestionCircle className="text-2xl" />
        <h2 className="text-xl font-semibold">{questionData?.heading}</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-[100%] md:w-[70%] sm:w-[80%] ">
        {questionData?.data?.map(({ id, query, answer }) => {
          const [isActive, setIsActive] = useState(false);
          return (
            <div
              key={id}
              className="rounded-md w-[100%] sm:w-[100%] p-4 border-2 ">
              <div
                onClick={() => setIsActive(!isActive)}
                className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-medium">{query}</h3>
                <span>{isActive ? "−" : "+"}</span>
              </div>
              {isActive && <p className="mt-2 ">{answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
