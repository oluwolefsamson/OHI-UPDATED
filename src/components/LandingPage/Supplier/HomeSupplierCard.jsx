import React from "react";

const HomeSupplierCard = ({ supplier }) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <img
          src={supplier.photo}
          alt={supplier.name}
          className="h-[280px] w-full object-cover sm:h-[300px]"
        />
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor backdrop-blur-sm">
          {supplier.avgPricePerTon}
        </div>
      </div>

      <div className="relative space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
              {supplier.location}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-headingColor">
              {supplier.name}
            </h3>
          </div>
          <p className="text-sm font-semibold text-textColor text-right">
            {supplier.totalReviews}
          </p>
        </div>

        <p className="text-sm leading-7 text-textColor">{supplier.about}</p>

        <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
              Trend
            </p>
            <p className="mt-2 text-sm text-headingColor">
              {supplier.priceTrend.trend}
            </p>
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
              Value
            </p>
            <p className="mt-2 text-sm text-headingColor">
              {supplier.priceTrend.predicted}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
              Visibility
            </p>
            <p className="mt-2 text-sm text-headingColor">
              {supplier.priceTrend.percentageChange}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F9A11B] text-black transition-transform duration-300 hover:translate-x-1"
            aria-label={`Contact about ${supplier.name}`}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSupplierCard;
