import supplierImg01 from "../img/WFP-03520.jpg";
import supplierImg02 from "../img/WFP-03523.jpg";
import supplierImg03 from "../img/WFP-03524.jpg";

export const suppliers = [
  {
    id: "01",
    name: "Development Agencies",
    location: "NGOs, UN agencies and impact-focused institutions",
    avgPricePerTon: "Visibility",
    priceTrend: {
      trend: "Trusted storytelling",
      percentageChange: "Strategic communication",
      predicted: "Credible reporting",
    },
    photo: supplierImg01,
    cropsAvailable: [
      { crop: "Program documentaries", available: "Impact-led", price: 0 },
      { crop: "Reporting films", available: "Stakeholder-ready", price: 0 },
    ],
    marketInsights: {
      demand: "Clear evidence of change, transparency and human-centered narratives.",
      supply: "OHI provides content that supports program visibility and accountability.",
      forecast: "Partnerships deepen when stories are documented with clarity and purpose.",
    },
    about:
      "We support development institutions with documentaries, visibility content and reporting films that communicate real project outcomes.",
    avgRating: 5,
    totalReviews: "100+",
  },
  {
    id: "02",
    name: "Government Ministries",
    location: "Policy, public programs and national initiatives",
    avgPricePerTon: "Credibility",
    priceTrend: {
      trend: "Public trust building",
      percentageChange: "Citizen engagement",
      predicted: "Policy visibility",
    },
    photo: supplierImg02,
    cropsAvailable: [
      { crop: "Mission coverage", available: "Nationwide", price: 0 },
      { crop: "Campaign content", available: "Multi-channel", price: 0 },
    ],
    marketInsights: {
      demand: "Narratives that explain policy, show progress and strengthen public confidence.",
      supply: "We deliver strategic visuals that align with official communication goals.",
      forecast: "Strong storytelling improves reach, understanding and adoption of initiatives.",
    },
    about:
      "We help ministries and public bodies communicate programs, missions and milestones with clarity, professionalism and consistency.",
    avgRating: 5,
    totalReviews: "100+",
  },
  {
    id: "03",
    name: "Private-Sector Social Impact",
    location: "DFIs, foundations and corporate partners",
    avgPricePerTon: "Impact",
    priceTrend: {
      trend: "Investment storytelling",
      percentageChange: "Visibility and confidence",
      predicted: "Partnership growth",
    },
    photo: supplierImg03,
    cropsAvailable: [
      { crop: "Investment films", available: "Tailored", price: 0 },
      { crop: "Beneficiary stories", available: "Authentic", price: 0 },
    ],
    marketInsights: {
      demand: "Content that makes projects more investable and partnerships more visible.",
      supply: "OHI turns complex initiatives into compelling stories that drive action.",
      forecast: "Strategic visibility improves credibility, traction and stakeholder alignment.",
    },
    about:
      "We work with DFIs, foundations and socially responsible companies to create stories that support growth, reputation and measurable impact.",
    avgRating: 5,
    totalReviews: "95%",
  },
];
