import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";

const CouponCard = ({ showCoupon }) => {
  return (
    <>
      {showCoupon && (
        <AttentionSeeker effect="tada">
          <div className="h-72 w-96 md:h-[30rem] md:w-[40rem] flex flex-col justify-center items-center gap-5 bg-[#FFE5EC] mb-32 rounded-xl font-amatic relative border-white border-2">
            <img
              src="src\assets\animals\pinkflower.png"
              alt="sakura"
              className="absolute -top-8 -left-10 w-28"
            />
            <img
              src="src\assets\animals\pinkflower.png"
              alt="sakura"
              className="absolute -bottom-8 -right-8 w-24"
            />
            <img
              src="src\assets\animals\white.png"
              alt="sakura"
              className="absolute -bottom-6 -left-4 w-24"
            />
            <h1 className="font-extrabold text-7xl">1 Cuddle Coupon</h1>
            <h3 className="text-4xl">Recipient: Sherry Zhou</h3>
          </div>
        </AttentionSeeker>
      )}
    </>
  );
};

export default CouponCard;
