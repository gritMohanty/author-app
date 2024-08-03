"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import DefaultCharacterTemplate from "./DefaultCharacterTemplate";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { CohereClient } from "cohere-ai";
import { useEffect } from "react";

export default function CharacterMode({ storyId }) {
  const cohere = new CohereClient({
    token: "NIN619wem8L4DEU7gAJNTJA37tkg2spTAivOZDmf",
  });

  const fetchDetails = async () => {
    const chat = await cohere.chat({
      model: "command",
      message:
        "What can be the next 50 words after this - Aeons after humanity's fall, a solitary robot named Cadence roams the decaying metal cities, meticulously collecting remnants of music. In a world devoid of sound, Cadence yearns to understand the melodies etched onto ancient data discs. He believes they hold a forgotten power and embarks on a journey to unearth a complete symphony, rumored to have the ability to awaken the slumbering world. He faces malfunctioning machines, corrupted data streams, and his own dwindling energy reserves, all in pursuit of bringing the symphony back to life and restoring harmony to the wasteland",
    });

    console.log(chat, "genai");
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="flex flex-col items-end w-full">
      <div className="flex flex-row gap-6 items-center justify-center w-full">
        <Link href={`/storylines/${storyId}`}>
          <MoveLeft />
        </Link>

        <Menubar className="w-full justify-center">
          <MenubarMenu>
            <MenubarTrigger>Basic Details</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Basic Information</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>Name</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Age</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Gender</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Physical Appearance
                  </MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Background</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>Birthplace</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Family</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Upbringing</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Education</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Career</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Cultural Background</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Ethnicity</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Traditions</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Financial Situation</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Wealth</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Economic History</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Health</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Physical Health</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Mental Health</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Personality and Traits</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Personality</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Traits</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Likes</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Dislikes</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Strengths</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Weaknesses</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Psychological Profile</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>Fears</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Motivations</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Values</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Secrets</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Quirks</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Emotional Range</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Emotional Triggers</MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Emotional Expression
                  </MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Humor</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Sense of Humor</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Use of Humor</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Conflict Style</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>
                    Response to Conflict
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Conflict Resolution</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Social and Relationships</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Social Aspects</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Relationships
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Social Skills
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Role in Society
                  </MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Past Relationships</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Ex-partners</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Friendships</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Influences</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Role Models</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Influential Events</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Legacy</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Impact</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Reputation</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Voice and Dialogue</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Speech Patterns</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Language</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Development and Conflicts</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Developmental Arc</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Starting Point
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Growth</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Challenges</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Resolutions</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Internal Conflict</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Moral Dilemmas</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Emotional Struggles</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Identity</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>External Conflict</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Opponents</MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Situational Challenges
                  </MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Aspirations and Dreams</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Short-term Goals</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Long-term Goals</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Regrets and Failures</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Past Mistakes</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Lessons Learned</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Skills and Attributes</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Talents and Skills</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Special Abilities
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Training</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Habits and Routines</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Daily Routine
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Habits</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Beliefs and Religion</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Spirituality</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Philosophies</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Adaptability</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Flexibility</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Stubbornness</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Decision-Making Style</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>
                    Rational vs. Emotional
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Decisiveness</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Narrative Role</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Narrative Role</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Protagonist or Antagonist
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Foil</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Moral Code</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Ethics</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Boundaries</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Impact of Setting</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Environment</MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Geographical Influence
                  </MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Narrative Function</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Purpose in Story
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Character Arc</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Symbolism and Themes</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem>Representations</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Thematic Relevance</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <DefaultCharacterTemplate />
    </div>
  );
}
