"use client";

import { BucketList } from "@/features/home/ui/BucketList";
import { Introduce } from "@/features/home/ui/Introduce/Introduce";
import WorkExperience from "@/features/home/ui/WorkExperience/WorkExperience";
import Spacing from "@/shared/components/Spacing/Spacing";

export default function Home() {
  return (
    <div>
      <Introduce />
      <Spacing size="16px"/>
      <WorkExperience />
      {/* <h1>나의 꿈</h1> */}
      {/* <BucketList /> */}
    </div>
  );
}
