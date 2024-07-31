// pages/index.tsx
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

export default function page() {
  const items = [
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSBQZ1WYwnaqnBFVhKA6RLs-0MVH8wfWmpA&s",
      title: "Child's education",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSBQZ1WYwnaqnBFVhKA6RLs-0MVH8wfWmpA&s",
      title: "Marriage",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSBQZ1WYwnaqnBFVhKA6RLs-0MVH8wfWmpA&s",
      title: "Travel",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSBQZ1WYwnaqnBFVhKA6RLs-0MVH8wfWmpA&s",
      title: "Retirement",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSBQZ1WYwnaqnBFVhKA6RLs-0MVH8wfWmpA&s",
      title: "House",
      description: "Description for card 1",
    },
    
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSBQZ1WYwnaqnBFVhKA6RLs-0MVH8wfWmpA&s",
      title: "Car",
      description: "Description for card 1",
    },
    
    // Add more items as needed
  ];

  return (
    <main className="mx-24">

      <h1 className="text-center mt-8 text-2xl font-bold ">Our Features</h1>
      <HoverEffect items={items} className="mb-4" />
      <div className="h-full"></div>
    </main>
  );
}
