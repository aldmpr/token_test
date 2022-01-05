import React from 'react';
import './FormSubmit.scss';

type Props = {
  company: string,
  tokenName: string,
  symbol: string,
  maxSupply: string,
  selectedBlockchain: string,
};

const FormSubmitted: React.FC<Props> = ({
  company,
  tokenName,
  symbol,
  maxSupply,
  selectedBlockchain,
}) => {
  return (
    <div className="TokenFormSubmitted">
      <div className="TokenFormSubmitted__item">
        Company:&nbsp;
        {company}
      </div>
      <div className="TokenFormSubmitted__item">
        Token name:&nbsp;
        {tokenName}
      </div>
      <div className="TokenFormSubmitted__item">
        Symbol:&nbsp;
        {symbol}
      </div>
      <div className="TokenFormSubmitted__item">
        Maximum token supply:&nbsp;
        {maxSupply}
      </div>
      <div className="TokenFormSubmitted__item">
        Selected blockchain:&nbsp;
        {selectedBlockchain}
      </div>
    </div>
  );
};

export default FormSubmitted;
