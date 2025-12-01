import React from 'react';
import './_sections.scss';
import BojengImage1 from '../../assets/photos/DSC03200.jpg';
import BojengImage2 from '../../assets/photos/DSC03172.jpg';
import Button from '../Button';

type MerchItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  stripeUrl: string;
};

const MERCH_ITEMS: MerchItem[] = [
  {
    id: 'tee-black',
    name: 'Bojeng T-shirt – svart',
    description: 'Mjuk unisex T-shirt, 100% bomull. Perfekt till gig, rep och vardag.',
    price: '250 kr',
    image: BojengImage1,
    // TODO: byt till riktig Payment Link från Stripe, t.ex. https://buy.stripe.com/...
    stripeUrl: 'https://buy.stripe.com/test_xxxxxxxxxxxxxxx',
  },
  {
    id: 'totebag-green',
    name: 'Bojeng tote bag',
    description: 'Tygpåse med Bojeng-tryck. Rymmer både noter, strängar och merch.',
    price: '200 kr',
    image: BojengImage2,
    stripeUrl: 'https://buy.stripe.com/test_yyyyyyyyyyyyyyy',
  },
];

//https://chatgpt.com/g/g-p-67f4fcfddcc08191860183ab5da7c9aa/c/692dc107-3510-832e-b5a1-80d568096961

export const Merch: React.FC = () => {
  return (
    <div className="container">
      <h2 className="section__title">Merch</h2>
      {/* <p style={{ maxWidth: 520, marginTop: 4, marginBottom: 18 }}>
        Här kan du stötta Bojeng genom att köpa merch. När du klickar på en produkt skickas du
        vidare till en säker Stripe-kassa där du slutför köpet.
      </p> */}

      <div className="press-cards">
        {MERCH_ITEMS.map((item) => (
          <article key={item.id} className="press-card merch-card">
            <div
              style={{
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                marginBottom: 12,
                maxHeight: 260,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h3 style={{ marginBottom: 4 }}>{item.name}</h3>
            <p style={{ marginTop: 0, marginBottom: 6 }}>{item.description}</p>
            <p style={{ fontWeight: 700, marginTop: 0, marginBottom: 12 }}>{item.price}</p>

            <Button
              href={item.stripeUrl}
              variant="solid"
              ariaLabel={`Köp ${item.name} – öppnas Stripe-kassa`}
            >
              Köp via Stripe
            </Button>
          </article>
        ))}
      </div>

      <br />
      <br />
    </div>
  );
};
