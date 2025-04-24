import { Link } from 'react-router';

const Order: React.FC = () => {
  return (
    <main>
      <Link className="return" to="/" title="Återvänd hem.">
        &lsaquo;&lsaquo; Tillbaka
      </Link>
      <form>
        <div>
          <p>Bakom Skuggorna</p>
          <label>
            Antal:
            <input type="number" min="0" defaultValue="1" max="35" />
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
            name="phonenumber"
            placeholder="Mobiltelefonnummer"
            autoComplete="tel"
          />
        </label>
        <label>
          <input
            type="text"
            name="given-name"
            placeholder="Förnamn"
            autoComplete="given-name"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="family-name"
            placeholder="Efternamn"
            autoComplete="family-name"
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="care-of"
            placeholder="c/o"
            autoComplete="name"
          />
        </label>
        <label>
          <input
            type="text"
            name="postal-code"
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
            name="street-address"
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
            name="payment_method"
            defaultValue="swish"
            required
          />
        </label>
        <label>
          Banköverföring:
          <input
            type="radio"
            id="bank_transfer"
            name="payment_method"
            defaultValue="Banköverföring"
          />
        </label>
      </form>
    </main>
  );
};

export default Order;
