import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export type CardProps = {
  name: string;
  children: React.ReactNode;
};

export default function Card({ name, children }: CardProps) {
  return (
    <div
      className={`bg-white rounded-md shadow-md shadow-blue-200/50 p-5 flex flex-col gap-5 `}
    >
      <h1 className={`text-lg ${playfair.className}`}>{name}</h1>
      {children}
    </div>
  );
}
