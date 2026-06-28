export default function ProjectCard(props) {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-md rounded-lg p-4 shadow-lg self-center">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
