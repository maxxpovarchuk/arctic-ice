import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addToCart = (itemName) => {
    setCart([...cart, itemName]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Додайте товар до кошика перед замовленням!");
    } else {
      setShowConfirmation(true);
    }
  };

  return (
    <div style={{ backgroundColor: "#cceeff" }}>
      {/* Hero section */}
      <section
        className="hero text-center p-5"
        style={{
          background: "url('https://example.com/arctic.jpg') no-repeat center center",
          backgroundSize: "cover",
          color: "white",
          textShadow: "1px 1px 4px #000",
        }}
      >
        <h1 className="display-4">Arctic Ice</h1>
        <p className="lead">Ми не знижуємо температуру — ми підтримуємо ідеал.</p>
        <a href="#catalog" className="btn btn-light mt-3">Замовити лід</a>
      </section>

      {/* About */}
      <section className="container py-5">
        <h2>Про нас</h2>
        <p>
          Ми — перша і єдина компанія, яка доставляє ідеальний лід на Північний
          полюс. У нас холод у серці і порядок в термосі.
        </p>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container py-5">
        <h2 className="mb-4">Наш лід</h2>
        <div className="row">
          {[
            {
              name: "Кубічний лід",
              img: "./assets/cub.jpg",
              desc: "Класика для будь-яких потреб. Вічний стандарт холоду.",
            },
            {
              name: "Художній лід",
              img: "./assets/hud.jpg",
              desc: "У формі пінгвінів, сніжинок і не тільки!",
            },
            {
              name: "Арктичний лід",
              img: "./assets/arc.jpg",
              desc: "Зібрано з любов’ю прямо зі снігів Арктики.",
            },
          ].map((item, idx) => (
            <div className="col-md-4 ice-card" key={idx}>
              <div className="card">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item.name)}
                  >
                    У кошик
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section className="container py-5" id="order">
        <h2>Оформити замовлення</h2>
        <p>
          <strong>Ваш кошик:</strong> {cart.length > 0 ? cart.join(", ") : "порожній"}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Ваше ім’я
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="delivery" className="form-label">
              Спосіб доставки
            </label>
            <select className="form-select" id="delivery">
              <option>Дрон</option>
              <option>Пінгвін</option>
              <option>Сані</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">Замовити</button>
          {showConfirmation && (
            <div className="mt-3 text-success">
              Дякуємо за замовлення! Ми зв'яжемось з вами найближчим часом ❄️
            </div>
          )}
        </form>
      </section>

      {/* Return Policy */}
      <section className="container py-4">
        <h2>Повернення</h2>
        <p>
          Повернення можливе лише до моменту танення. Якщо лід розтанув — він уже
          виконав свою функцію.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center" style={{ backgroundColor: "#0f4c81", color: "white", padding: "1rem 0" }}>
        <p>© Arctic Ice, 2025</p>
      </footer>
    </div>
  );
};

export default App;
