import styles from "../styles/Home.module.css";
import Card from "../components/Card";

export default function Home({ cards }) {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 p-12">
        {cards.map((card) => (
          <Card card={card} key={card._id} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.APP_URL}/api/tasks`);
  const cards = await res.json();

  return {
    props: {
      cards,
    },
  };
};
