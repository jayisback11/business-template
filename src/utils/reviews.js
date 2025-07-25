import Person1Img from "./images/person1-img.jpg";
import Person2Img from "./images/person2-img.jpg";
import Person3Img from "./images/person3-img.jpg";
import Person4Img from "./images/person4-img.jpg";

const reviews = [
  {
    id: 1,
    description: "This donut has the best food  and I recommend it.",
    img: [Person1Img],
    name: "John Mike",
    initialMotion: "-300px",
  },
  {
    id: 2,
    description:
      "I ate at Sam's Donut last week and I really enjoyed it.",
    img: [Person2Img],
    name: "Maria Cruz",
    initialMotion: "350px",
  },
  {
    id: 3,
    description:
      "A friend recommended these donuts to me and I am really glad I came and ate here.",
    img: [Person3Img],
    name: "Anna Gold",
    initialMotion: "-300px",
  },
  {
    id: 4,
    description:
      "Very nice donut shop, very good food and the staff is very professional.",
    img: [Person4Img],
    name: "Nick Burn",
    initialMotion: "350px",
  },
];

export default reviews;
