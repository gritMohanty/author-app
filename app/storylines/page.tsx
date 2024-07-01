import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";
const STORY_LINES = [
  {
    id: 0,
    title: "The Cartographer of Dreams",
    description:
      "In a world where dreams hold the key to forgotten knowledge, Elara, a gifted but ostracized cartographer, embarks on a perilous quest. Tasked with charting a legendary dreamscape rumored to contain a map to lost magic, she navigates treacherous landscapes of emotions and memories. Along the way, she encounters enigmatic beings, faces corrupted dreamweavers seeking to control the flow of knowledge, and uncovers a hidden truth about her own past that could shatter the foundations of her reality",
  },
  {
    id: 1,
    title: "The Symphony of Rust",
    description:
      "Aeons after humanity's fall, a solitary robot named Cadence roams the decaying metal cities, meticulously collecting remnants of music. In a world devoid of sound, Cadence yearns to understand the melodies etched onto ancient data discs. He believes they hold a forgotten power and embarks on a journey to unearth a complete symphony, rumored to have the ability to awaken the slumbering world. He faces malfunctioning machines, corrupted data streams, and his own dwindling energy reserves, all in pursuit of bringing the symphony back to life and restoring harmony to the wasteland",
  },
  {
    id: 2,
    title: "The Children of the Sunken City",
    description:
      "Amara, a talented artist raised within the opulent walls of the Citadel, a floating city ruled by the enigmatic Order, believes her life is perfect. But cracks begin to show when she discovers hidden messages in her art lessons, cryptic clues hinting at a world beyond the Citadel's shimmering dome. Forbidden knowledge ignites a fire within her, and she embarks on a daring escape attempt, risking everything to learn the truth about the world below and the Order's true motives. Outside the Citadel, she finds a desolate landscape struggling to survive, leading her to question everything she thought she knew about her sheltered existence",
  },
];
const Storylines = () => {
  return (
    <section className="m-8">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-lg">Storylines</h3>
        <Button label={"Author a story"} />
      </div>

      {STORY_LINES.map((item) => (
        <Link href={`storylines/${item.id}`}>
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Description>{item.description}</Card.Description>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default Storylines;
