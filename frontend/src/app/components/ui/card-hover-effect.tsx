"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    imgSrc: string;  // Updated to include an image source URL
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onClick={() => setSelectedIndex(idx)}
        >
          <AnimatePresence>
            {selectedIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-orange-800 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card isSelected={selectedIndex === idx}>
            <CardImage src={item.imgSrc} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isSelected
}: {
  className?: string;
  children: React.ReactNode;
  isSelected: boolean;  // Added isSelected prop
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 shadow-lg overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        isSelected ? "border-4 border-orange-800" : "border border-transparent",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({
  src,
}: {
  src: string;  // Added src prop for image
}) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <img src={src} alt="Card Image" className="w-[200px] h-auto object-cover rounded-lg" />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
