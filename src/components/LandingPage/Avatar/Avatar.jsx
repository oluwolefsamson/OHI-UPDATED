import React from "react";
import { AvatarCircles } from "../magicui/avatar-circles";

import CameraMan from "../../../assets/img/camera-man.jpg";
import Photography from "../../../assets/img/Photography.jpg";
import FaqImage from "../../../assets/img/FAQ.jpg";
import Hero1 from "../../../assets/images/HeroImg/hero1.jpeg";
import Hero3 from "../../../assets/images/HeroImg/hero3.jpeg";
import Hero5 from "../../../assets/images/HeroImg/hero5.jpeg";

const avatars = [
  {
    imageUrl: CameraMan,
    profileUrl: "/#about",
  },
  {
    imageUrl: Photography,
    profileUrl: "/#about",
  },
  {
    imageUrl: FaqImage,
    profileUrl: "/#about",
  },
  {
    imageUrl: Hero1,
    profileUrl: "/#about",
  },
  {
    imageUrl: Hero3,
    profileUrl: "/#about",
  },
  {
    imageUrl: Hero5,
    profileUrl: "/#about",
  },
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={100} avatarUrls={avatars} />;
}
