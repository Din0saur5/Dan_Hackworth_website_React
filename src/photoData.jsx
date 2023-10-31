import React from "react";
//add a starred function to add to dashboard 
const photoNames = [
    "barbarian_dan.jpg",
    "elf_sheila.jpg",
    "engagment_photo.jpg",
    "kali.jpg",
    "profile-picture.jpeg",
    "renfair2.JPG",
    "yogi_and_I.PNG",
    "Finished-wizard-robes.jpg",
    "My-set-up.JPEG",
    "Wizard-Dan-vs-dragons.JPG",
    "Spiffy-Dan.JPG",
    "Wizard-at-the-faire.JPEG",
    "Pumpkin-picking-20203.JPEG",
    "Tomatoes_2022.jpg",
    "Kayaking.JPEG",
    "Wooden-bridge.JPG",
    "Making-pottery.JPG",
    "Puppy-Kali-socks.JPG",
    "Spooky-Kali.JPEG",
  ];
  
  const photoData = photoNames.map((photoName) => {
    const [name, extension] = photoName.split(".");
    return { src: `/Photos/${photoName}`, alt: name };
  });
  
  console.log(photoData);
export default photoData