// pages/index.tsx
"use client"
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { useState } from "react";

// what is your age
// do you have a job
// what is your monthly income
// how much do you want to invest

export default function Page() {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [selectedIncome, setSelectedIncome] = useState<string>("");
  const [selectedInvestment, setSelectedInvestment] = useState<number>(1000);



  const handleCardClick = (index: number) => {
    let newitem=items.find((item) => item.index === index);
    newitem ? setSelectedGoal(newitem.title): setSelectedGoal("");
    // console.log(newitem);
    // Perform any action based on the clicked card index
  };

  const handleAgeChange = (value: string) => {
    setSelectedAge(value);
    console.log(selectedAge)
  };

  const handleJobChange = (value: string) => {
    setSelectedJob(value);
    console.log(selectedJob)
  }

  const handleIncomeChange = (value: string) => {
    setSelectedIncome(value);
    console.log(selectedIncome)
  }

  const handleSelectedInvestment = (value: number[]) => {
    setSelectedInvestment(value[0]);
    console.log(selectedInvestment)
  }
  const handleSubmit = () => {
    const data = {
      Goal: selectedGoal,
      Age: Number(selectedAge),
      Job: selectedJob,
      Income: selectedIncome,
      Investment: selectedInvestment,
    };
  
    let riskLevel = "medium risk"; // Default risk level
  
    // Determine risk level based on goal
    switch (data.Goal) {
      case "Retirement":
        riskLevel = "low to medium risk";
        break;
      case "Childs education":
      case "Marriage":
        riskLevel = "low risk";
        break;
      case "Travel":
      case "House":
      case "Car":
        riskLevel = "medium risk";
        break;
      default:
        break;
    }
  
    // Adjust risk level based on age
    if (data.Age < 30) {
      if (data.Goal === "Travel" || data.Goal === "Car") {
        riskLevel = "high risk";
      } else if (data.Goal === "House") {
        riskLevel = "medium to high risk";
      }
    } else if (data.Age >= 30 && data.Age < 50) {
      if (data.Goal === "Travel" || data.Goal === "Car") {
        riskLevel = "medium to high risk";
      }
    } else if (data.Age >= 50) {
      riskLevel = "low risk";
    }
  
    // Adjust risk level based on job status
    if (data.Job === "no") {
      riskLevel = "low risk";
    } else if (data.Job === "part-time") {
      if (riskLevel !== "low risk") {
        riskLevel = "low to medium risk";
      }
    }
  
    // Adjust risk level based on income
    switch (data.Income) {
      case "Less than 1Lpa":
        riskLevel = "low risk";
        break;
      case "Less than 10Lpa":
        if (riskLevel !== "low risk") {
          riskLevel = "low to medium risk";
        }
        break;
      case "More than 50Lpa":
        if (data.Age < 30 && (data.Goal === "Travel" || data.Goal === "Car")) {
          riskLevel = "high risk";
        } else if (riskLevel !== "low risk") {
          riskLevel = "medium risk";
        }
        break;
      default:
        break;
    }
  
    console.log(`The investment plan should be: ${riskLevel}`);
  };
  
  const items = [
    {
      imgSrc: "/childs_education.png",
      title: "Child's education",
      description: "Description for card 1",
      index:0
    },
    {
      imgSrc: "/marriage.png",
      title: "Marriage",
      description: "Description for card 1",
      index:1
    },
    {
      imgSrc: "/travel.png",
      title: "Travel",
      description: "Description for card 1",
      index:2
    },
    {
      imgSrc: "/retirement.png",
      title: "Retirement",
      description: "Description for card 1",
      index:3
    },
    {
      imgSrc: "/house.png",
      title: "House",
      description: "Description for card 1",
      index:4
    },
    {
      imgSrc: "/car.png",
      title: "Car",
      description: "Description for card 1",
      index:5
    },
    // Add more items as needed
  ];

  const selectItems = Array.from({ length: 88 }, (_, i) => i + 13);

  return (
    <main className="mx-24">
      <h1 className="text-center mt-10 text-[2.3rem] text-shadow-md font-bold ">
        Select Your Goal:
      </h1>
      <HoverEffect items={items} onCardClick={handleCardClick} className="mb-4" />
      {/* the form */}
      <div className="flex my-20 flex-col items-center h-[100vh]">
        <div className="text-[2.5rem] font-extrabold my-10">Tell us about Yourself: </div>
        {/* below is div for age */}
        <div>
          <label htmlFor="age-select" className="block mb-3 text-[1.8rem] font-medium text-gray-700">
            What is your Age
          </label>
          <Select onValueChange={handleAgeChange}>
            {/* value is the selected value, form provides this */}
            <SelectTrigger id="age-select" className="w-[180px] mb-12">
              <SelectValue placeholder="Your Age" />
            </SelectTrigger>
            <SelectContent>
              {selectItems.map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* below is div for employment */}
        <div>
          <label htmlFor="employment" className="block mb-2 text-[1.8rem] font-medium text-gray-700">
            Are you Currently Employed?
          </label>
          <RadioGroup
            defaultValue="yes"
            value={selectedJob}
            onValueChange={handleJobChange}
            id="employment"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label className="text-[1.1rem]" htmlFor="yes">yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label className="text-[1.1rem]" htmlFor="no">no</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="part-time" id="part-time" />
              <Label className="text-[1.1rem]" htmlFor="part-time">part-time</Label>
            </div>
          </RadioGroup>
        </div>
        {/* below is the div for annual income */}
        <div>
          <label htmlFor="income" className="block mb-2 text-[1.8rem] mt-12  font-medium text-gray-700">
            What is your annual income?
          </label>
          <Select onValueChange={handleIncomeChange}>
            {/* value is the selected value, form provides this */}
            <SelectTrigger id="income" className="w-[180px] mb-8">
              <SelectValue placeholder="Your annual income" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Less than 1Lpa" key="1">Less than 1Lpa</SelectItem>
              <SelectItem value="Less than 10Lpa" key="2">Less than 10Lpa</SelectItem>
              <SelectItem value="More than 10Lpa" key="3">More than 10Lpa</SelectItem>
              <SelectItem value="More than 50Lpa" key="4">More than 50Lpa</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <label htmlFor="investment-amount" className="block mt-12 mb-2 text-[1.8rem] font-medium text-gray-700">
          How much do you want to invest
        </label>
        {/* next div for selecting amount to invest */}
        <Slider onValueChange={handleSelectedInvestment} id="investment-amount" defaultValue={[1000]} className="bg-black w-[50vw]  rounded-lg border-red-700" max={10000000} step={1000} min={1000} />
        <div>
          <div className="flex w-[55vw] justify-between"><span>1000</span><span>{selectedInvestment}</span><span>100,00,00,0</span></div>
        </div>
      </div>
      <button onClick={handleSubmit} type='submit'>submit</button>
    </main>
  );

  


}
