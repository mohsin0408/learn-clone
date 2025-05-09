import React from "react";
import Button from "./Button";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const MemberShipCard = ({ obj, index }) => {
  const priceString = obj.price;
  const numericPrice = Number(priceString.replace(/[^0-9.]/g, ""));

  const handleEnroll = async (obj) => {
    try {
      let price = 0;

      if (obj?.heading === "Academind Pro Membership") {
        price = numericPrice;
      } else if (obj?.heading === "Annual Membership") {
        price = 249;
      } else if (obj?.heading === "Monthly Membership") {
        price = 25;
      } else {
        price = numericPrice;
      }

      const response = await axios.post(
        "https://optimist-dev-backend.onrender.com/api/payment/create-checkout-session",
        {
          course: {
            title: obj?.heading,
            description: obj.desc,
            price,
          },
        }
      );

      const { sessionId } = response.data;
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    } catch (error) {
      console.error("Checkout session error:", error);
    }
  };

  return (
    <div
      key={index}
      className="flex flex-col py-2 px-4 sm:p-4 lg:p-8 text-center border border-black w-full h-[447px] sm:w-[48%] md:w-[34%] bg-[#2e2b3b] border-none shadow-xl rounded-xl justify-between">
      <span className="pt-5 text-4xl font-bold text-center text-white">
        {obj?.heading}
      </span>
      <p className="pb-5 text-4xl font-bold text-center text-white">
        Membership
      </p>
      <span className="mb-3 text-base text-white">{obj?.desc}</span>
      <span className="text-[#ffc675] lg:text-5xl md:text-3xl text-5xl font-bold leading-[85px] border-t border-[#ccc]">
        {obj?.price}
      </span>
      <span className="mb-3 text-xs text-white">{obj?.info}</span>
      <span>
        <Button
          text={obj?.btnText}
          obj={obj}
          rounded="md"
          px="32px"
          py="8px"
          clickHandler={() => handleEnroll(obj)}
        />
      </span>
    </div>
  );
};

export default MemberShipCard;
