import { useState } from 'react';
import { Link } from 'react-router';

interface orderInterface {
  careOf: string;
  email: string;
  familyName: string;
  givenName: string;
  locality: string;
  paymentMethod: string;
  phoneNumber: string;
  postalCode: string;
  streetAdress: string;
  quantity: string;
}

const Order: React.FC = () => {
  const [showSwishDetails, setShowSwishDetails] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const handleSubmitOrder = async (e: any) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const orderData = Object.fromEntries(formData.entries());

    const order: orderInterface = {
      careOf: orderData.careOf.toString(),
      email: orderData.email.toString(),
      familyName: orderData.familyName.toString(),
      givenName: orderData.givenName.toString(),
      locality: orderData.locality.toString(),
      paymentMethod: orderData.paymentMethod.toString(),
      phoneNumber: orderData.phoneNumber.toString(),
      postalCode: orderData.postalCode.toString(),
      streetAdress: orderData.streetAdress.toString(),
      quantity: orderData.quantity.toString(),
    };

    try {
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error(
          `POST failed ${response.status} ${response.statusText}`
        );
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <main>
      <Link className="return" to="/" title="Återvänd hem.">
        &lsaquo;&lsaquo; Tillbaka
      </Link>
      <form onSubmit={handleSubmitOrder}>
        <div>
          <p>Bakom Skuggorna</p>
          <label>
            Antal:
            <input
              type="number"
              name="quantity"
              min="0"
              defaultValue="1"
              max="35"
            />
          </label>
        </div>
        <label>
          <input
            type="email"
            name="email"
            placeholder="E-postadress"
            autoComplete="email"
            required
          />
        </label>
        <label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Mobiltelefonnummer"
            autoComplete="tel"
          />
        </label>
        <label>
          <input
            type="text"
            name="givenName"
            placeholder="Förnamn"
            autoComplete="given-name"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="familyName"
            placeholder="Efternamn"
            autoComplete="family-name"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="careOf"
            placeholder="c/o"
            autoComplete="name"
          />
        </label>
        <label>
          <input
            type="text"
            name="postalCode"
            placeholder="Postnummer"
            autoComplete="home postal-code"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="locality"
            placeholder="Ort"
            autoComplete="home locality"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="streetAdress"
            placeholder="Adress"
            autoComplete="home street-address"
            required
          />
        </label>
        <label>
          Swish:
          <input
            type="radio"
            id="swish"
            name="paymentMethod"
            defaultValue="swish"
            onChange={(e) => {
              setShowSwishDetails(e.target.checked);
              setShowBankDetails(false);
            }}
            required
          />
        </label>
        <label>
          Banköverföring:
          <input
            type="radio"
            name="paymentMethod"
            defaultValue="banktransfer"
            onChange={(e) => {
              setShowBankDetails(e.target.checked);
              setShowSwishDetails(false);
            }}
          />
        </label>
        {showSwishDetails && (
          <p>
            Vänligen swisha till följande telefonnummer: 070 1234-5678. Ange
            ditt namn som referens.
          </p>
        )}
        {showBankDetails && (
          <p>
            Vänligen gör en banköverföring till följande konto: 1234-5678. Ange
            ditt namn som referens.
          </p>
        )}
        {showSwishDetails || showBankDetails ? (
          <button type="submit">Skicka beställning</button>
        ) : (
          <></>
        )}
      </form>
    </main>
  );
};

export default Order;
