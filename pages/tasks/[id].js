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

export default index;

export const getServerSideProps = async (context) => {
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
