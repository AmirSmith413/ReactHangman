
type KeyProps = {
  disabled?: boolean;
  active: string[];
  inactive: string[];
  addLetter: (letter: string) => void;
};

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Alphabet = ({
  active,
  inactive,
  addLetter,
  disabled = false,
}: KeyProps) => {
  return (
    <div>
      {alphabet.map((alphabet) => {
        const Active = active.includes(alphabet);
        const inActive = inactive.includes(alphabet);
        return (
          <button
            onClick={() => addLetter(alphabet)}
            disabled={inActive || Active || disabled}
            key={alphabet}
          >
            {alphabet}
          </button>
        );
      })}
    </div>
  );
};

export default Alphabet;
