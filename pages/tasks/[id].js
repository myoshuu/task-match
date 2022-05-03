const index = ({ task }) => {
  return (
    <>
      <p>{task._id}</p>
      <p>{task.name}</p>
      <p>{task.assignment}</p>
      <p>{task.lesson}</p>
      <p>{task.handOut}</p>
      <p>{task.turnIn}</p>
      <p>{task.due}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.APP_URL}/api/tasks/${context.params.id}`
  );
  const task = await res.json();

  return {
    props: {
      task,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.APP_URL}/api/tasks/`);
  const tasks = await res.json();

  const ids = tasks.map((task) => task._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default index;
