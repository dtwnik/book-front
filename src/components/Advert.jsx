import { Link } from 'react-router-dom';
import adv from '../assets/img/adv.jpg';

const Advert = () => {
  return (
    <section id="advert">
      <img src={adv} alt="Advertisement" />
      <div className="adv">
        <span>ALLBOOK.KZ</span>
        <h1>
          Кез-келген кітапты жарты бағамен оқыңыз! Одан да арзанырақ алғыңыз келе ме?
          <br />
          Кітаптар бөлімінен қараңыз
        </h1>
        <Link to="/Book/">
          <button className="adv-button">Кітаптар</button>
        </Link>
      </div>
    </section>
  );
};

export default Advert;
