import clsx from 'clsx';
import React from 'react';

interface CardRadioGroupItem<T> {
  value: T;
  title: string;
  body: string;
}

interface CardRadioGroupProps<T> {
  value?: T;
  items: Array<CardRadioGroupItem<T>>;
  onChange: (option: T) => void;
}

export const CardRadioGroup = <T extends string = string>(
  props: CardRadioGroupProps<T>
) => {
  const { value, items, onChange } = props;
  const isCardNumberLessThenThree = items?.length === 1 || items?.length === 2;

  return (
    <div
      className={`grid gap-sm grid-cols-2 ${
        isCardNumberLessThenThree ? `sm:grid-cols-2` : `sm:grid-cols-3`
      }`}
    >
      {items.map(item => {
        const { value: iValue, title, body } = item;
        return (
          <div
            className={clsx(
              'bg-white shadow-sm rounded p-md border border-gray-300 cursor-pointer',
              value === iValue && 'ring-2 ring-yellow-200 border-yellow-400'
            )}
            key={iValue}
            onClick={() => onChange(iValue)}
          >
            <div>
              <input
                id={`radio-select-${iValue}`}
                type="radio"
                value={iValue}
                x-model="relationType"
                className="cursor-pointer rounded-full border shadow-sm border-gray-300 hover:border-gray-400 focus:ring-yellow-400 !mt-0"
                onChange={() => onChange(iValue)}
                checked={value === iValue}
                data-test={`radio-select-${iValue}`}
              />
            </div>
            <div className="ml-sm">
              <label
                htmlFor={`radio-select-${iValue}`}
                className="cursor-pointer font-semibold"
              >
                {title}
              </label>
              <p className="text-muted">{body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
