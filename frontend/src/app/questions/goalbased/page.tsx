// pages/index.tsx
import { HoverEffect } from "@/app/components/ui/card-hover-effect";


export default function page() {
  const items = [
    {
      imgSrc: "/childs_education.png",
      title: "Child's education",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "/marriage.png",
      title: "Marriage",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "/travel.png",
      title: "Travel",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "/retirement.png",
      title: "Retirement",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "/house.png",
      title: "House",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "/car.png",
      title: "Car",
      description: "Description for card 1",
    },
    
    // Add more items as needed
  ];

  return (
    <main className="mx-24">

      <h1 className="text-center mt-10 text-2xl text-shadow-md font-bold ">Select Your Goal:</h1>
      <HoverEffect items={items} className="mb-4" />
      {/* the form */}
      <div className="h-full">

      </div>
      
    </main>
  );
}
