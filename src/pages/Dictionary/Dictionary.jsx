import useFirstWords from "../../helpers/hooks/useFirstWords";

const Dictionary = () => {
  const [firstWords] = useFirstWords();

  return (
    <div>
      <h2>Dictionary</h2>
      <p>{firstWords.length > 0 ? firstWords.length : "loading..."}</p>
    </div>

  );
};
export default Dictionary;
