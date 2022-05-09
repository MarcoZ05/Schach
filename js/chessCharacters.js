export default [
  {
    name: "König",
    moveSet: ["x+-1", "y+-1", "x+-1 && y+-1"],
    moveStyle: "walk",
    importance: 10,
  },
  {
    name: "Dame",
    moveSet: ["x+-a", "y+-a", "x+-a && y+-a"],
    moveStyle: "walk",
    importance: 9,
  },
  {
    name: "Turm",
    moveSet: ["x+-a", "y+-a"],
    moveStyle: "walk",
    importance: 5,
  },
  {
    name: "Läufer",
    moveSet: ["x+-a && y+-a"],
    moveStyle: "walk",
    importance: 9,
  },
];
