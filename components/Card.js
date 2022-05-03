import Link from "next/link";

const Card = ({ card }) => {
  return (
    <div className="bg-slate-200 p-8 rounded-lg">
      <div className="pb-4">
        <h1 className="text-2xl">{card.name}</h1>
        <Link href={`/tasks/${card._id}`}>
          <a className="text-lg">
            {card.lesson} - {card.assignment}
          </a>
        </Link>
      </div>
      <p>Handed Out: {Date.parse}</p>
      <p>Turned In: 2022-20-23</p>
      <p>Due Date: 2022-20-23</p>
    </div>
  );
};

export default Card;
