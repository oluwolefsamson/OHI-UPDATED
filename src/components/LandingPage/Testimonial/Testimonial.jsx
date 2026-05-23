import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import userAvatar from "../../assets/images/user-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {[
          {
            name: "UN Partner",
            body: "OHI turns technical program results into stories that stakeholders can understand, trust and act on.",
          },
          {
            name: "Government Ministry",
            body: "Their mission coverage and strategic visibility work helps public initiatives reach the audiences that matter.",
          },
          {
            name: "Foundation Lead",
            body: "OHI gives our projects the visibility they deserve and the credibility they need to attract support.",
          },
          {
            name: "Private Sector Partner",
            body: "They are strong at translating complex initiatives into persuasive, investment-ready visuals.",
          },
          {
            name: "Community Voice",
            body: "The team brings authenticity and respect to every story they tell, which makes the message resonate.",
          },
        ].map((item) => (
          <SwiperSlide key={item.name}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                "{item.body}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
