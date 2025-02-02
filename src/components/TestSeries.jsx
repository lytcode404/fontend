import TestCard from "./TestCard";

const data = [
  { id: "Python Basics Test" },
  { id: "Advanced Python Coding Challenge" },
  { id: "Machine Learning Fundamentals" },
  { id: "Deep Learning & Neural Networks Quiz" },
  { id: "Web Development with ReactJS" },
  { id: "Full-Stack JavaScript Assessment" },
  { id: "Data Structures & Algorithms in Python" },
  { id: "Data Science & Analytics Exam" },
  { id: "Cybersecurity Fundamentals Test" },
  { id: "Cloud Computing & DevOps Certification" },
];

const TestSeries = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4"></div>
      <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
        {data &&
          data.map((paper, index) => (
            <TestCard key={index} heading={paper.id} />
          ))}
      </div>
    </div>
  );
};

export default TestSeries;
