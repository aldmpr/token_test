import React, { useState } from 'react';
import './Form.scss';
import TokenFormSubmitted from './FormSubmit/FormSubmit';
import TokenFormInput from './FormInput/FormInput';
import { titles } from '../../shared';
import TokenFormRadio from './FormRadio/FormRadio';

const TokenForm = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [tokenName, setTokenName] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');
  const [maxSupply, setMaxSupply] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCompany(event.target.value);
  };

  return (
    <div className="container">
      {isSubmitted
        ? (
          <TokenFormSubmitted
            company={company}
            tokenName={tokenName}
            symbol={symbol}
            maxSupply={maxSupply}
            selectedBlockchain={selectedBlockchain}
          />
        )
        : (
          <div className="TokenForm">
            <h1 className="TokenForm__title">
              {titles.title}
            </h1>
            <h2 className="TokenForm__subtitle">
              {titles.subtitle}
            </h2>
            <form
              action="#"
              method="GET"
              onSubmit={() => setIsSubmitted(true)}
            >
              <div className="TokenForm__form form">
                <label className="form__item" htmlFor="companyId">
                  <span className="form__item__name">
                    Company
                  </span>
                  <select
                    className="form__item__select"
                    name="company"
                    id="companyId"
                    onChange={handleSelectChange}
                    required
                  >
                    <option value="">Select company</option>
                    <option value="My company">My company</option>
                    <option value="Our company">Our company</option>
                  </select>
                </label>
                <TokenFormInput
                  title="Token name"
                  id="tokenNameId"
                  type="text"
                  setValue={setTokenName}
                  value={tokenName}
                />
                <TokenFormInput
                  title="Symbol"
                  id="symbolId"
                  type="text"
                  setValue={setSymbol}
                  value={symbol}
                />
                <TokenFormInput
                  title="Maximum token supply"
                  id="maxSupplyId"
                  type="text"
                  pattern="[0-9 ]+"
                  setValue={setMaxSupply}
                  value={maxSupply}
                />
                <TokenFormRadio setSelectedBlockchain={setSelectedBlockchain} />
                <div className="form__item form__supply">
                  <span className="form__item__name">
                    Supply
                  </span>
                  <label htmlFor="checkboxId" className="form__item__label">
                    <input
                      type="checkbox"
                      id="checkboxId"
                      name="checkbox"
                      className="form__item__checkbox"
                      required
                    />
                    <div className="form__item__checkmark" />
                    <span className="form__item__text">Enabled</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="form__button"
                >
                  save draft
                </button>
              </div>
            </form>
          </div>
        )}
    </div>
  );
};

export default TokenForm;
