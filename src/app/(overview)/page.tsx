"use client"
import { useState } from "react";
import { Select, Option, Separator } from "@/components/ui/select/select";

export default function OverviewPage() {
  const [fruit, setFruit] = useState<string | undefined>(undefined);
  return (
    <>
      <h1>Overview</h1>
      <Select placeholder="Select a fruit" value={fruit} onChange={setFruit}>
        <Option value="1">Apple</Option>
        <Separator />
        <Option value="2">Ananas</Option>
        <Separator />
        <Option value="3">Banana</Option>
      </Select>
    </>
  );
}
