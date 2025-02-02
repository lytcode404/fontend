import Head from "next/head";
import Image from "next/image";
export const Question = ({
  qno,
  question,
  options,
  onSelectOption,
  selectedOption,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-black-2 capitalize">
        {qno + 1}
        {". "}
        {question}
      </h3>
      <ul className="space-y-2">
        {options &&
          Object.keys(options)
            .sort()
            .map((optionKey, index) => (
              <li
                key={index}
                className={`flex items-center cursor-pointer px-2 py-1 rounded-lg capitalize hover:text-white ${
                  selectedOption === optionKey
                    ? "bg-primary text-white"
                    : "hover:bg-secondary"
                }`}
                onClick={() => onSelectOption(optionKey)}
              >
                {optionKey}: {options[optionKey]}
              </li>
            ))}
      </ul>
    </div>
  );
};

export const Pagination = ({
  selectedOptions,
  totalQuestions,
  currentQuestionIndex,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page - 1)}
          className={`px-4 py-2 rounded-md ${
            currentQuestionIndex === page - 1
              ? "bg-primary text-white"
              : selectedOptions?.hasOwnProperty(page - 1)
              ? "bg-meta-1 text-white"
              : "bg-secondary text-white"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
