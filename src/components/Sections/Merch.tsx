import React from 'react';
import './_sections.scss';
import Button from '../Button';

import VinylImage from '../../assets/images/zucchini_album.jpg';
import TShirtImage from '../../assets/images/zucchini_album.jpg';
import { useTranslation } from 'react-i18next';

type MerchItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  stripeUrl: string;
  badge?: string;
  hasSizes?: boolean;
};

const MERCH_ITEMS: MerchItem[] = [
  {
    id: 'vinyl',
    name: 'Bojeng VINYL',
    description: 'ALBUMVINYL inkl. digital nedladdning av hela Zucchini.',
    price: '200 kr',
    image: VinylImage,
    stripeUrl: 'https://buy.stripe.com/test_8x200j2kj5G88bualr9sk01',
  },
  {
    id: 'tshirt',
    name: 'Bojeng T- SHIRT',
    description: 'Svart T-shirt med vit logga fram och bak. 100% ekologisk bomull.',
    price: '200 kr',
    image: TShirtImage,
    stripeUrl: 'https://buy.stripe.com/test_8x200j2kj5G88bualr9sk01',
    hasSizes: true,
  },
];

export const Merch: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="merch" className="section section--merch">
      <div className="container">
        <h2 className="section__title">{t('merch.title')}</h2>
        {/* <p className="section__subtitle">
            Stötta Bojeng genom att köpa merch. Vi skickar från Malmö med kärlek och tejp. Betalning
            sker säkert via Stripe.
          </p> */}

        <div className="merch-grid">
          {MERCH_ITEMS.map((item) => (
            <article key={item.id} className="merch-card">
              <div className="merch-card__image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="merch-card__image"
                  loading="lazy"
                />
                {item.badge && <span className="merch-card__badge">{item.badge}</span>}
              </div>

              <div className="merch-card__body">
                <h3 className="merch-card__title">{item.name}</h3>
                <p className="merch-card__description">{item.description}</p>
                <p className="merch-card__price">{item.price}</p>

                <Button
                  href={item.stripeUrl}
                  variant="solid"
                  ariaLabel={t('merch.buyAria', { name: item.name })}
                >
                  {t('merch.buyViaStripe')}
                </Button>

                <p className="merch-card__note">
                  {item.hasSizes ? t('merch.noteSizes') : t('merch.noteAddress')}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="merch-footnote">
          {t('merch.footnote')} <a href="mailto:bojengband@gmail.com">bojengband@gmail.com</a>.
        </p>
      </div>
    </section>
  );
};
