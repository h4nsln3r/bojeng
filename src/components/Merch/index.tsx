import { useState } from 'react';
import './merch.scss';

import merchv1 from '../../assets/images/merchv1.jpg';
import marcusv1 from '../../assets/images/marcusv1.jpg';

const merchImages = [merchv1, marcusv1];

const Merch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % merchImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + merchImages.length) % merchImages.length);
  };

  return (
    <section className="merch-section">
      <h2 className="merch-heading">Merch</h2>
      <div className="merch-slider">
        <button onClick={prevImage} className="slider-button">
          ‹
        </button>
        <img src={merchImages[currentIndex]} alt={`Bojeng T-shirt ${currentIndex + 1}`} className="merch-image" onClick={() => setShowModal(true)} />
        <button onClick={nextImage} className="slider-button">
          ›
        </button>
      </div>
      <p className="merch-title">Bojeng T-shirt</p>
      <p className="merch-price">200 kr</p>
      <a
        href="mailto:order@bojeng.se?subject=Beställning%20av%20Bojeng%20T-shirt&body=Hej%2C%0A%0Ajag%20vill%20köpa%20denna%20t-shirt%20och%20jag%20älskar%20Bojeng!%0A%0A//%20Namn%3A%20%5Bfyll%20i%5D%0A//%20Storlek%3A%20%5Bfyll%20i%5D"
        className="order-button">
        🛒 Beställ nu
      </a>
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <img src={merchImages[currentIndex]} className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Merch;
