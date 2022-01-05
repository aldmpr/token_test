import React from 'react';
import './FormInput.scss';

type Props = {
  title: string,
  id: string,
  type: string,
  pattern?: string,
  // eslint-disable-next-line
  setValue: (value: any) => void,
  value: string | number,
};

const FormInput: React.FC<Props> = ({
  title,
  id,
  type,
  pattern,
  setValue,
  value,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const symbol = event.target.value.toUpperCase();

    setValue(symbol);
  };

  const handleSupplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const supply = event.target.value;

    setValue(supply.replace(/\W/gi, '').replace(/(.{3})/g, '$1 '));
  };

  const handlerOnChange = () => {
    switch (title) {
      case 'Symbol':
        return handleSymbolChange;
      case 'Maximum token supply':
        return handleSupplyChange;
      default:
        return handleInputChange;
    }
  };

  return (
    <label className="TokenFormInput" htmlFor={id}>
      <span className="TokenFormInput__name">
        {title}
      </span>
      <input
        type={type}
        className="TokenFormInput__input"
        id={id}
        value={value}
        placeholder={title}
        pattern={pattern}
        onChange={handlerOnChange()}
        required
      />
    </label>
  );
};

export default FormInput;
