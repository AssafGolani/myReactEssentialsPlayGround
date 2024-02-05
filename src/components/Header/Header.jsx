import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    const desciption = reactDescriptions[getRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desciption} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
