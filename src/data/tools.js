import {
  Hash, CircleHelp, Dices, Palette, ShieldCheck, CaseSensitive,
  CalendarDays, ListChecks, Hand, Globe, FlaskConical, Ticket, Paintbrush
} from "lucide-react";

export const categories = ["All", "Numbers", "Games", "Creative", "Decisions", "Explore"];

export const tools = [
  { name: "Random Number", slug: "random-number", category: "Numbers", description: "Generate a number between two values.", icon: Hash },
  { name: "Coin Flip", slug: "coin-flip", category: "Games", description: "Flip a coin: heads or tails.", icon: CircleHelp },
  { name: "Dice Roll", slug: "dice-roll", category: "Games", description: "Roll one or more six-sided dice.", icon: Dices },
  { name: "Random Color", slug: "random-color", category: "Creative", description: "Discover a random color and HEX code.", icon: Palette },
  { name: "Password Generator", slug: "password-generator", category: "Creative", description: "Create a random password.", icon: ShieldCheck },
  { name: "Yes or No", slug: "yes-or-no", category: "Decisions", description: "Get a quick answer to a question.", icon: CircleHelp },
  { name: "Random Letter", slug: "random-letter", category: "Numbers", description: "Pick a random English letter.", icon: CaseSensitive },
  { name: "Random Date", slug: "random-date", category: "Decisions", description: "Choose a date from a date range.", icon: CalendarDays },
  { name: "Random List", slug: "random-list", category: "Decisions", description: "Pick one item from your own list.", icon: ListChecks },
  { name: "Rock Paper Scissors", slug: "rock-paper-scissors", category: "Games", description: "Play against the computer.", icon: Hand },
  { name: "Random Country", slug: "random-country", category: "Explore", description: "Discover a country at random.", icon: Globe },
  { name: "Chemical Element", slug: "chemical-element", category: "Explore", description: "Pick an element from the periodic table.", icon: FlaskConical },
  { name: "Powerball Picker", slug: "powerball-picker", category: "Games", description: "Generate a lottery-style number set.", icon: Ticket },
  { name: "Random Palette", slug: "random-palette", category: "Creative", description: "Create a five-color palette.", icon: Paintbrush }
];
