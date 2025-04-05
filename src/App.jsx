"use client"

import { useState } from "react"
import "./App.css"
import { ChevronDown } from "./icons/ChevronDown"
import { PlayCircle } from "./icons/PlayCircle"
import { Check } from "./icons/Check"
import { Facebook } from "./icons/Facebook"
import { Twitter } from "./icons/Twitter"
import { Instagram } from "./icons/Instagram"
import { Youtube } from "./icons/Youtube"
import icon from "./assets/icon.png"

function App() {
  const [activeTab, setActiveTab] = useState("plans")

  return (
    <div className="app">
      {/* Encabezado */}
      <header className="header">
        <div className="logo">
          <img src={icon} alt="Max" />
        </div>
        <div className="nav-actions">
          <button className="language-btn">
            <span className="globe-icon">🌐</span>
            ESPAÑOL
            <ChevronDown />
          </button>
          <a href="https://wa.me/5660424104" className="sign-up-btn">SUSCRÍBETE AHORA</a>
        </div>
      </header>

      {/* Sección principal */}
      <img className="background-big" src="https://www.adslzone.net/app/uploads-adslzone.net/2020/12/contenido-hbo-max-715x490.jpg"></img>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Series, películas y más imperdibles.</h1>
          <p className="hero-subtitle">Elige un plan de RTV Plus o un paquete para comenzar a ver.</p>

          <div className="plans-container">
            {/* Plan solo Max */}
            {/* Plan Paquete */}
            <div className="plan-card">
              <div className="plan-logo">
                <img src={icon} alt="Max" />
              </div>
              <div className="plan-price">
                <div className="price-label">LOS PLANES COMIENZAN DESDE</div>
                <div className="price">
                  <span className="dollar">$</span>
                  <span className="amount">350.00 </span>
                  <span className="period">/MES</span>
                </div>
              </div>
              <button className="plan-cta" onClick={() => window.location.href = "https://wa.me/5660424104"}>OBTENER EL PAQUETE</button>
            </div>
          </div>

          {/* Texto Legal */}
          <div className="legal-text">
            
          </div>
        </div>
      </div>

      {/* Sección de selección de plan */}
      <div className="plan-selection">
        <h2 className="section-title">Encuentra tu plan perfecto</h2>

        <div className="tabs">
          <button className={`tab ${activeTab === "plans" ? "active" : ""}`}>
            PAQUETES MENSUALES
          </button>

        </div>

        <div className="tab-content">
          {activeTab === "bundles" && (
            <div className="bundle-options">
              {/* Paquete con anuncios */}
              <div className="bundle-card">
                <div className="bundle-logos">
                  <img src="/disney-plus-logo.svg" alt="Disney+" />
                  <img src="/hulu-logo.svg" alt="Hulu" />
                  <img src="/max-logo.svg" alt="Max" />
                </div>
                <h3 className="bundle-title">Con anuncios</h3>
                <p className="bundle-description">Max Básico con Anuncios, Disney+ Básico y Hulu (con anuncios)</p>
                <button className="bundle-cta">SELECCIONAR PAQUETE</button>
              </div>

              {/* Paquete sin anuncios */}
              <div className="bundle-card">
                <div className="bundle-logos">
                  <img src="/disney-plus-logo.svg" alt="Disney+" />
                  <img src="/hulu-logo.svg" alt="Hulu" />
                  <img src="/max-logo.svg" alt="Max" />
                </div>
                <h3 className="bundle-title">Sin anuncios</h3>
                <p className="bundle-description">Max Estándar, Disney+ Premium y Hulu (sin anuncios)</p>
                <button className="bundle-cta">SELECCIONAR PAQUETE</button>
              </div>
            </div>
          )}

          {activeTab === "plans" && (
            <div className="plans-grid">
              <div className="plan-option">
                <h3 className="plan-option-title">Plan Mensual</h3>
                <div className="plan-option-price">
                  <span className="dollar">$</span>
                  <span className="amount">350.00</span>
                  <span className="period">/mes</span>
                </div>
                <button
                  className="plan-option-cta"
                  onClick={() => window.location.href = "https://wa.me/5660424104"}
                >
                  SELECCIONAR PLAN
                </button>
                <ul className="plan-features">
                  <li><Check /> Transmite en 2 dispositivos a la vez</li>
                  <li><Check /> Full HD 1080p</li>
                  <li><Check /> Más de 30 canales de TV en vivo</li>
                </ul>
              </div>

              <div className="plan-option featured">
                <div className="popular-tag">MÁS POPULAR</div>
                <h3 className="plan-option-title">Plan Trimestral</h3>
                <div className="plan-option-price">
                  <span className="dollar">$</span>
                  <span className="amount">900.00</span>
                  <span className="period">/3 meses</span>
                </div>
                <button
                  className="plan-option-cta"
                  onClick={() => window.location.href = "https://wa.me/5660424104"}
                >
                  SELECCIONAR PLAN
                </button>
                <ul className="plan-features">
                  <li><Check /> Transmite en 2 dispositivos a la vez</li>
                  <li><Check /> Full HD 1080p</li>
                  <li><Check /> Más de 30 canales de TV en vivo</li>
                </ul>
              </div>

              <div className="plan-option">
                <h3 className="plan-option-title">Plan Semestral</h3>
                <div className="plan-option-price">
                  <span className="dollar">$</span>
                  <span className="amount">1,700.00</span>
                  <span className="period">/6 meses</span>
                </div>
                <button
                  className="plan-option-cta"
                  onClick={() => window.location.href = "https://wa.me/5660424104"}
                >
                  SELECCIONAR PLAN
                </button>
                <ul className="plan-features">
                <li><Check /> Transmite en 2 dispositivos a la vez</li>
                  <li><Check /> Full HD 1080p</li>
                  <li><Check /> Más de 30 canales de TV en vivo</li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>


      {/* Sección de Contenido Destacado */}
      <div className="featured-content">
        <h2 className="section-title">Transmite lo que es tendencia</h2>
        <div className="content-grid">
          <div className="content-card">
            <div className="content-image">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Contenido destacado" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">House of the Dragon</h3>
            <p className="content-description">
              El reinado de la Casa Targaryen comienza con esta precuela de la popular serie de HBO.
            </p>
          </div>

          <div className="content-card">
            <div className="content-image">
              <img src="https://th.bing.com/th/id/OIP.6dejNTg_GYTxMImWO_rgQQHaEK?rs=1&pid=ImgDetMain" alt="Contenido destacado" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">The Last of Us</h3>
            <p className="content-description">
              Tras una pandemia global que destruye la civilización, un sobreviviente endurecido se hace cargo de una niña de 14 años.
            </p>
          </div>

          <div className="content-card">
            <div className="content-image">
              <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/18edde5043daa7e168c72f70877f0957a36f724975da1c398f5f0f7ae8d83a24._RI_TTW_.jpg" alt="Contenido destacado" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">Succession</h3>
            <p className="content-description">
              Sigue a la familia Roy mientras contemplan su futuro una vez que su padre envejecido comienza a retirarse del conglomerado mediático.
            </p>
          </div>

          <div className="content-card">
            <div className="content-image">
              <img src="https://www.tvmovie.de/assets/2023/01/09/92878-the-white-lotus-s2-1920x1080.jpg" alt="Contenido destacado" />
              <div className="play-overlay">
                <PlayCircle />
              </div>
            </div>
            <h3 className="content-title">The White Lotus</h3>
            <p className="content-description">
              Sigue las peripecias de varios huéspedes y empleados en un exclusivo resort tropical durante el transcurso de una semana.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Descubre Novedades */}
      <div className="whats-new-section">
        <h2 className="section-title">Descubre las novedades</h2>
        <div className="whats-new-grid">
          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.6303f4e4a158dbac416e5da534877c9d?rik=sX4KLy26XlFNqg&pid=ImgRaw&r=0" alt="The White Lotus" />
            <div className="whats-new-title">THE WHITE LOTUS</div>
          </div>

          <div className="whats-new-card">
            <img src="https://ntvb.tmsimg.com/assets/p29046771_b_h10_aa.jpg?w=1280&h=720" alt="PITT" />
            <div className="whats-new-title">PITT</div>
          </div>

          <div className="whats-new-card">
            <img src="https://th.bing.com/th/id/R.337428242da5a5eaadd7fb067defd569?rik=aMW75arAJrl74A&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f38500000%2fGame-of-Thrones-game-of-thrones-38503519-2560-1440.jpg&ehk=8WC7CltWFP1wG0irGyxIbAOrlZ1OzUMNNuR9jlolpbc%3d&risl=1&pid=ImgRaw&r=0" alt="PAUL IN AFRICA" />
            <div className="whats-new-title">GAME OF THRONES</div>
          </div>

          <div className="whats-new-card">
            <img src="https://www.thefullarton.co.uk/uploads/images/events/EventsLandscape-Cinema-DespicableMe4-1920x1080.jpg" alt="UNCHARTED CANYONS" />
            <div className="whats-new-title">MI VILLANO FAVORITO 4</div>
          </div>

          <div className="whats-new-card">
            <img src="https://frontend-assets.clipsource.com/60dedc6376ad9/hbo-60def166a1502/2024/09/26/66f519587ab3f_thumbnail.jpeg" alt="LAST WEEK TONIGHT" />
            <div className="whats-new-title">COMO AGUA PARA CHOCOLATE</div>
          </div>

          <div className="whats-new-card">
            <img src="https://fmglobo.com/u/fotografias/m/2025/1/15/f1280x720-24850_156525_5050.png" alt="CELTICS CITY" />
            <div className="whats-new-title">P.DIDDY</div>
          </div>
        </div>
      </div>

      {/* Sección Deportes en Vivo */}
      <div className="live-sports-section">
        <div className="live-sports-header">
          <img src="https://eltiempolatino.com/wp-content/uploads/2023/09/Deportes-en-vivo-en-Max.png" alt="Deportes en vivo" className="live-sports-bg" />
          <div className="live-sports-content">
            <h2 className="live-sports-title">Deportes en Vivo</h2>
            <p className="live-sports-description">
              Transmite en vivo la NBA, NHL, MLB™, U.S. Soccer, NASCAR, Unrivaled, fútbol americano universitario y eventos de ciclismo de primer nivel.
            </p>
            <p className="live-sports-note">
              Deportes en vivo incluidos solo en planes Estándar y Premium con juegos seleccionados y restricciones de transmisión. *TM 2023 MLB
            </p>
          </div>
        </div>

        <div className="sports-categories">
          <div className="sports-category">
            <img src="https://wallpaperaccess.com/full/1305378.jpg" alt="NBA" />
            <span>NBA</span>
          </div>

          <div className="sports-category">
            <img src="https://images.squarespace-cdn.com/content/v1/5bdfef0a697a98c05dd88ac0/1592688102538-SYZRS0SR4YLY7O4J99EF/nhl.jpg" alt="NHL" />
            <span>NHL</span>
          </div>

          <div className="sports-category">
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_2x1/t_w1536/mlb/vvqvmab1yoe6kkljnpsd.jpg" alt="MLB" />
            <span>MLB™</span>
          </div>

          <div className="sports-category">
            <img src="https://sportscredential.com/wp-content/uploads/2021/06/MLS-logo-black-1030x579.png" alt="U.S. Soccer" />
            <span>U.S. Soccer</span>
          </div>

          <div className="sports-category">
            <img src="https://sportsbase.io/images/gpfans/copy_1200x800/9eccdfd7aaf8782f26f1447d26704dd5c97d62a5.jpg" alt="NASCAR" />
            <span>NASCAR</span>
          </div>

          <div className="sports-category">
            <img src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2025-01/Unrivaled_generic_FTR.jpg?itok=NU_VncwW" alt="Unrivaled" />
            <span>Unrivaled</span>
          </div>

          <div className="sports-category">
            <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0101%2Fr956795_1296x729_16-9.jpg" alt="College Football" />
            <span>Fútbol Americano Universitario</span>
          </div>

          <div className="sports-category">
            <img src="https://i1.wp.com/www.wate.com/wp-content/uploads/sites/42/2019/06/usa-cycling-06-28-19-8.jpg?w=2000&ssl=1" alt="Cycling" />
            <span>Ciclismo</span>
          </div>
        </div>
      </div>

      {/* Sección Programas del Hogar */}
      <div className="home-shows-section">
        <div className="home-shows-header">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/6d6106dbf2e043a8e6c0a8f9979a94760743edb7cd2a678e390c830bf668c983.jpg" alt="Fixer Upper" className="home-shows-bg" />
          <div className="home-shows-content">
            <div className="home-shows-logo">
              <img src="https://th.bing.com/th/id/R.037dcb4fffba044518ae532db27ee4cd?rik=yZhmo8UMOjSrig&pid=ImgRaw&r=0" alt="Fixer Upper" />
            </div>
            <h3 className="home-shows-subtitle">Favoritos</h3>
            <h2 className="home-shows-title">Programas del Hogar</h2>
          </div>
        </div>

        <div className="home-shows-grid">
          <div className="home-show-card">
            <img src="https://beam-images.warnermediacdn.com/BEAM_LD_DELIVERABLES/7db6d294-676a-4003-af20-6de3c5edf97a/5916239/7db6d294-676a-4003-af20-6de3c5edf97a_cover_artwork_horizontal_en-US_latam.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=500" alt="Property Brothers" />
            <div className="home-show-title">PROPERTY BROTHERS</div>
          </div>

          <div className="home-show-card">
            <img src="https://m.media-amazon.com/images/I/91aYC4n5p1L._RI_.jpg" alt="Maine Cabin Masters" />
            <div className="home-show-title">MAINE CABIN MASTERS</div>
          </div>

          <div className="home-show-card">
            <img src="https://blog.reelgood.com/wp-content/uploads/2024/01/hometown-1024x576.jpeg" alt="Hometown" />
            <div className="home-show-title">HOMETOWN</div>
          </div>

          <div className="home-show-card">
            <img src="https://beam-images.warnermediacdn.com/BEAM_LD_DELIVERABLES/e9474359-24e7-4cea-98b5-1095af3b2cda/e9474359-24e7-4cea-98b5-1095af3b2cda_default_en-US_standard.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom" alt="Bargain Block" />
            <div className="home-show-title">BARGAIN BLOCK</div>
          </div>

          <div className="home-show-card">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/6d6106dbf2e043a8e6c0a8f9979a94760743edb7cd2a678e390c830bf668c983.jpg" alt="Good Bones" />
            <div className="home-show-title">GOOD BONES</div>
          </div>

          <div className="home-show-card">
            <img src="https://beam-images.warnermediacdn.com/BEAM_LD_DELIVERABLES/0d9fca26-74c6-45c8-add1-2440e32a6039/5495328/0d9fca26-74c6-45c8-add1-2440e32a6039_cover_artwork_horizontal_en-US_standard_20230912152250.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom" alt="House Hunters" />
            <div className="home-show-title">HOUSE HUNTERS</div>
          </div>
        </div>
      </div>

      {/* Sección de Dispositivos */}

      {/* Sección de Preguntas Frecuentes */}
      <div className="faq-section">
        <h2 className="section-title">Preguntas Frecuentes</h2>

        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question">
              <h3>¿Qué es Max?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Max es la plataforma de streaming que reúne todo HBO con aún más películas, series y Max Originals para
                toda la familia, incluyendo Friends, South Park, el Universo DC, el Mundo Mágico de Harry Potter y más.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h3>¿Cuánto cuesta Max?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Max ofrece varios planes a partir de $9.99/mes (con anuncios) o $15.99/mes (sin anuncios). También puedes
                combinar Max con Disney+ y Hulu desde $16.99/mes.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h3>¿Puedo ver deportes en vivo en Max?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Sí, Max ofrece deportes en vivo incluyendo NBA, NHL, MLB y fútbol a través del complemento B/R Sports,
                el cual está incluido sin costo adicional por un tiempo limitado.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h3>¿Cómo cancelo mi suscripción?</h3>
              <ChevronDown />
            </div>
            <div className="faq-answer">
              <p>
                Puedes cancelar tu suscripción a Max en cualquier momento a través de la configuración de tu cuenta. Tu
                suscripción seguirá activa hasta el final de tu período de facturación actual.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de CTA */}
      <div className="cta-section">
        <h2>¿Listo para comenzar a transmitir?</h2>
        <p>Regístrate ahora y empieza a ver hoy mismo.</p>
        <button className="cta-button" onClick={() => window.location.href = "https://wa.me/5660424104"}>REGÍSTRATE AHORA</button>
      </div>

      {/* Footer */}
    </div>
  )
}

export default App