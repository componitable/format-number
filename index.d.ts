interface IFormatNumberOptions {
  negativeType?: 'right' | 'left' | 'brackets' | 'none';
  negativeLeftSymbol?: string;
  negativeRightSymbol?: string;
  negativeLeftOut?: boolean;
  negativeRightOut?: boolean;
  prefix?: string;
  suffix?: string;
  integerSeparator?: string;
  decimalsSeparator?: string;
  decimal?: string;
  padLeft?: number;
  padRight?: number;
  round?: number;
  truncate?: number;
}

interface IFormatNumberOverrideOptions {
  noUnits?: boolean;
  noSeparator?: boolean;
}

export default function formatter(options?: IFormatNumberOptions): format;

type format = (number: number, overrideOptions?: IFormatNumberOverrideOptions) => string;
