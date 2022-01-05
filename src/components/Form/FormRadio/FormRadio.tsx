import React from 'react';
import { blockchainButtons } from '../../../shared';
import { BlockchainButton } from '../../../types/type';
import './FormRadio.scss';

type Props = {
  setSelectedBlockchain: (value: string) => void,
};

const FormRadio: React.FC<Props> = ({ setSelectedBlockchain }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBlockchain(event.target.value);
  };

  return (
    <div className="TokenFormRadio">
      <div className="TokenFormRadio__item">
        <span className="TokenFormRadio__name">
          Blockchain
        </span>
        <div className="TokenFormRadio__container">
          {blockchainButtons.map((item: BlockchainButton) => (
            <>
              <input
                type="radio"
                name="radioButton"
                key={item.id}
                className="TokenFormRadio__input"
                value={item.name}
                id={item.name}
                onChange={handleRadioChange}
                required
              />
              <label htmlFor={item.name} className="TokenFormRadio__label">
                {item.name}
              </label>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormRadio;
