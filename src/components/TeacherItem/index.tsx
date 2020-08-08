import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/44881126?s=460&u=1d5832bf9737fa15e792f0f250e622132c3d2f80&v=4" alt="Matheus Resende" />
        <div>
          <strong>Matheus Resende</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed .
        <br /><br />
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
