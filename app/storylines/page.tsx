"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

const Storylines = () => {
  const [storylines, setStorylines] = useState([]);
  useEffect(() => {
    fetchStorylines();
  }, []);
  const fetchStorylines = async () => {
    try {
      const response = await fetch("/storylines/api");

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid content type. Expected application/json.");
      }

      const data = await response.json();
      console.log(data);
      setStorylines(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="m-8">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-lg">Storylines</h3>
        <Link href="/storylines/create">
          <Button variant="default">Author a new story</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        {storylines?.story?.map((item) => (
          <Link href={`storylines/${item.id}`} key={item.id}>
            <Card>
              <CardHeader>
                <CardTitle>{item.story_name}</CardTitle>
                <CardDescription>{item.story_description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Storylines;
