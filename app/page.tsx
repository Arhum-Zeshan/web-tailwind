"use client";
import { Badge } from "@/components/ui/badge";
import Demo from "./components/Demo";
import Timer from "./components/Timer";
import BlackHeader from "./components/BlackHeader";
import Task from "./components/Task";
import { OffRoadClassifiedFamily } from "./components/OffRoadClassified";
import {MapFunctionNumber, MapFunctionString} from "./components/MapFunction";
import {FilterNumber, FilterObject} from "./components/filter";
import ObjactPass from "./components/ObjactPass";

export default function Home() {
  return (
    <main className="container flex flex-col  justify-center items-center mx-auto pb-4 p-50">
      
      <Task
        bgColor="#ffff00"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur incidunt repellat delectus iusto amet odit fugiat fuga nesciunt! Omnis dignissimos earum reprehenderit eius vel, velit perspiciatis enim ad similique!
"
        Name="Arhum Zeeshan"
        location="abcdF"
      />
      <OffRoadClassifiedFamily/>
      <MapFunctionNumber/>
      <MapFunctionString/>
      <FilterNumber/>
      <FilterObject/>
      <ObjactPass/>
    </main>
  );
}
