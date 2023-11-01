import React from "react";
//add first 5 to dashboard
const photoNames = [
  "engagment_photo.jpg",
  "Tomatoes_2022.jpg",
  "Kayaking.JPEG",
  "Wizard-Dan-vs-dragons.JPG",
  "kali.jpg",
  "profile-picture.jpeg",
  "renfair2.JPG",
  "yogi_and_I.PNG",
  "Finished-wizard-robes.jpg",
  "My-set-up.JPEG",
  "elf_sheila.jpg",
  "Spiffy-Dan.JPG",
  "Wizard-at-the-faire.JPEG",
  "Pumpkin-picking-20203.JPEG",
  "barbarian_dan.jpg",
    "Wooden-bridge.JPG",
    "Making-pottery.JPG",
    "Puppy-Kali-socks.JPG",
    "Spooky-Kali.JPEG",
  ];
  
  const photoData = photoNames.map((photoName) => {
    const [name, extension] = photoName.split(".");
    return { src: `/Photos/${photoName}`, alt: name };
  });
  
 
export default photoData