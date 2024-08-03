import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function DefaultCharacterTemplate() {
  return (
    <div className="flex mt-4 flex-col gap-4 w-full">
      <Card className="p-4">
        <CardTitle>Build your character</CardTitle>
        <CardDescription className="mt-4 mb-6 flex flex-row justify-between">
          You can select different attributes from menu and fill them up for
          tailoring the character
          <Button className="mt-4 ">Save</Button>
        </CardDescription>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="basicDetails">
              <AccordionTrigger>Basic Details</AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardHeader>
                    <CardDescription>
                      Capture the essential biographical information and
                      background of the character.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Age</Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Gender</Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Physical Appearance</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Birthplace</Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Family</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Education</Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Career</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="perAndTra">
              <AccordionTrigger>Personality and Traits</AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardHeader>
                    <CardDescription>
                      Define the character's key personality traits,
                      motivations, and emotional makeup.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Likes</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Dislikes</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Strength</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Weakness</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Fears</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Motivation</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="socialAndRel">
              <AccordionTrigger>Social and Relationships</AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardHeader>
                    <CardDescription>
                      Outline the character's social connections and role within
                      their community.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Relationships</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Social Skills</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Role in Society</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="devAndCon">
              <AccordionTrigger>Development and Conflicts</AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardHeader>
                    <CardDescription>
                      Detail the character's journey, growth, and the conflicts
                      they face.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Starting Point</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Growth</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Challenges</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Resolutions</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="skills">
              <AccordionTrigger>Skills and Attributes</AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardHeader>
                    <CardDescription>
                      Highlight the character's unique abilities, habits, and
                      daily routines.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Special Abilities</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Daily Routine</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Habits</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="narrative">
              <AccordionTrigger>Narrative Role</AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardHeader>
                    <CardDescription>
                      Clarify the character's purpose and function within the
                      story.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">
                            Protagonist or Antagonist
                          </Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Purpose in Story</Label>
                          <Textarea
                            id="name"
                            placeholder="Name of your project"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
