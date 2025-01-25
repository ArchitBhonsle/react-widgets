export type CardProps = {
  name: string;
  children: React.ReactNode;
};

export default function Card({ name, children }: CardProps) {
  return (
    <div className="bg-white rounded-md shadow-md shadow-blue-200/50 p-5 flex flex-col gap-5">
      <h1 className="text-xl font-semibold">{name}</h1>
      {children}
    </div>
  );
}
