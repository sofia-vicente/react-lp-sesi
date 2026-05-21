import s from './App.module.css'
import img1 from '/images.jpg'
import img2 from '/shiny.jpg'
import img3 from '/go.jpg'
import aaa from '/aaa.png'
import bbb from  '/bbb.png'
import ccc from '/ccc.png'
import ddd from '/ddd.png'

function App() {
  
const navTo = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <>
      <nav>
      <span className={s.navItems} onClick={() => navTo("s1")}>
        <img src={bbb} width="10px" alt="home" />
        <a href='.s1' className={s.navWords}>Jogo</a>
      </span>
      <span className={s.navItems} onClick={() => navTo("s2")}>
        <img src={aaa} width="10px" alt="item" />
        <a href='.s2' className={s.navWords}>pokemons</a>
      </span>
      <span className={s.navItems} onClick={() => navTo("s3")}>
        <img src={ccc} width="10px" alt="video" />
        <a href='.s3' className={s.navWords}>Vídeo</a>
      </span>
      <span className={s.navItems} onClick={() => navTo("s4")}>
        <img src={ddd} width="10px" alt="cont" />
        <a href='.s4' className={s.navWords}>Contato</a>
      </span>
    </nav>
    <main>
      <section className={s.s1} id="s1">
        <h1>pokemon</h1>
        <h2>pokemon</h2>
      </section>
      <section className={s.s2}  id="s2">
        <div className={s.card}>
          <img width="200px" height="auto" src={img1} alt="nfs1" />
          <div>
            <h4>pokemon 30 anos</h4>
            <p>A franquia celebra 30 anos. Desde o lançamento dos primeiros jogos (Red e Green) no Japão, a marca se consolidou globalmente. A data oficial de aniversário, celebrada mundialmente como o Pokémon Day, traz colecionáveis, eventos em jogos como Pokémon GO e ativações especiais para fãs..</p>
          </div>
        </div>
        <div className={s.card}>
          <img width="300px" height="auto" src={img2} alt="nfs2" />
          <div>
            <h4>pokemons shiny</h4>
            <p>Um Pokémon Shiny (ou Brilhante) é uma versão extremamente rara de um Pokémon, caracterizada por sua paleta de cores alternativa e um efeito de brilho ou estrelas ao entrar em batalha. Eles não possuem atributos superiores aos normais, servindo principalmente para colecionismo.</p>
          </div>
        </div>
        <div className={s.card}>
          <img width="300px" height="auto" src={img3} alt="nfs3" />
          <div>
            <h4>pokemon go</h4>
            <p>Conhecido pelas perseguições policiais intensas e pela icônica lista Blacklist, ele mistura adrenalina e estratégia em cada corrida. A combinação de carros exóticos, narrativa envolvente e ação constante tornou esse título um dos mais lembrados da série.</p>
          </div>
        </div>
      </section>
      <section className={s.s3} id="s3">
        <iframe
          className={s.vid}
          src="https://www.youtube.com/embed/9ewiJJe_nYI?si=QBAFa5Ym9jjekUK2&autoplay=0"
          title="YouTube video player"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section className={s.s4} id="s4">
        <h3>CONTATO</h3>
      
        <div className={s.formulario}>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Digite seu nome"/>
          <label for="assunto">Mensagem:</label>
          <textarea id="assunto" placeholder="Digite uma mensagem"></textarea>
          <button onclick="enviar()">ENVIAR</button>
        </div>
        <div>
          <div id="saturno-container"></div>
        </div>
      </section>
    </main>
    <footer>
      <a href="https://www.facebook.com" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </footer>
    </>
  )
}

export default App
