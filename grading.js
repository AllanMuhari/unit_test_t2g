const languages = (score) => {
  if (score >= 75 && score <= 100) {
    return "A";
  } else if (score >= 65 && score <= 74) {
    return "B";
  } else if (score >= 55 && score <= 64) {
    return "C";
  } else if (score >= 45 && score <= 54) {
    return "pass";
  } else {
    return "sup";
  }
};
const sciences = (score) => {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "pass";
  } else {
    return "sup";
  }
};
const humanites = (score) => {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "pass";
  } else {
    return "sup";
  }
};

const student = {
  name: "Dennis Doe",
  math: 80,
  eng: 65,
  kis: 48,
  phy: 67,
  che: 56,
  cre: 89,
  comp: 82,
};

const calculateGradesAndAverage = (student) => {
  const grades = {
    name: student.name,
    math: sciences(student.math),
    eng: languages(student.eng),
    kis: languages(student.kis),
    phy: sciences(student.phy),
    che: sciences(student.che),
    cre: humanites(student.cre),
    comp: languages(student.comp),
  };

  const average = Math.floor(
    (student.math +
      student.eng +
      student.kis +
      student.phy +
      student.che +
      student.cre +
      student.comp) /
      7
  );
  return { grades, average };
};
console.log(calculateGradesAndAverage(student));

module.exports = { languages, humanites, sciences };
