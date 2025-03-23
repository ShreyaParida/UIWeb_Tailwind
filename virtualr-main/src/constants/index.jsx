import { BotMessageSquare, SpaceIcon } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href:"#ft" },
  { label: "Workflow", href: "#wf" },
  { label: "Pricing", href: "#pc" },
  { label: "Testimonials", href: "#tm" },
  { label: "HeroSection", href: "#hs" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "User-Friendly Dashboard",
    description:
      "A personalized dashboard for users to track their enrolled courses, progress, and certifications.",
  },
  {
    icon: <Fingerprint />,
    text: "Secure Payment Gateway",
    description:
      "Multiple payment options with secure transactions for seamless course purchases.",
  },
  {
    icon: <ShieldHalf />,
    text: "Course Previews & Reviews",
    description:
      "Short previews and student reviews to help users make informed enrollment decisions.",
  },
  {
    icon: <BatteryCharging />,
    text: "Progress Tracking & Certificates",
    description:
      "Interactive progress tracking with certificates upon course completion.",
  },
  {
    icon: <PlugZap />,
    text: "Live Classes & Q&A Sessions",
    description:
      "Integration of live sessions and discussion forums for real-time engagement.",
  },
  {
    icon: <GlobeLock />,
    text: "Discounts & Affiliate Program",
    description:
      "Special discounts, referral rewards, and affiliate options to boost sales.",
  },
];

export const checklistItems = [
  {
    title: "Course Quality & Content",
    description:
      "Ensure courses are well-structured, up-to-date, and provide value.",
  },
  {
    title: "User Experience & Accessibility",
    description:
      "The platform should be easy to navigate, mobile-friendly, and accessible to all users.",
  },
  {
    title: "Payment & Pricing Transparency",
    description:
      "Clear pricing, multiple payment options, and secure transactions.",
  },
  {
    title: "Support & Community Engagement",
    description:
      "Responsive customer support, discussion forums, and mentorship options.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
