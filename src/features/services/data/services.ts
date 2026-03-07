export const heroImage =
  'https://images.unsplash.com/photo-1581999016177-54acaa3c804b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDg5NTV8&ixlib=rb-4.1.0&q=80&w=1080'

export const servicesBullets = [
  'Tour Packages (International and Local)',
  'Immigration services',
  'Visa processing',
]

export const accomplishments = [
  'Offering both local and international tour packages at a very competitive costs',
  'Expanding market strength through superior service levels',
  'Maintaining flexibility to adapt to local and international market trends',
  'Establishing our team as the optimum service provider',
  'Operating continuously in compliance with applicable industry principles and standards',
]

export interface VisaFeeEntry {
  country: string
  fee: string
}

export const visaFeesLeft: VisaFeeEntry[] = [
  { country: 'KOREA VISA', fee: 'PHP 4,000.00' },
  { country: 'CHINA VISA', fee: 'PHP 7,900.00' },
  { country: 'DUBAI E-VISA (30 DAYS)', fee: 'PHP 15,200.00' },
  { country: 'AUSTRALIA E-VISA', fee: 'PHP 14,500.00' },
  { country: 'NEW ZEALAND', fee: 'PHP 14,500.00' },
  { country: 'CANADA VISA', fee: 'PHP 15,500.00' },
  { country: 'ETA', fee: 'PHP 3,500.00' },
  { country: 'IRELAND VISA', fee: 'PHP 16,500.00' },
  { country: 'PORTUGAL', fee: 'PHP 15,500.00' },
  { country: 'UK VISA', fee: 'PHP 15,500.00' },
]

export const visaFeesRight: VisaFeeEntry[] = [
  { country: 'TURKEY VISA', fee: 'PHP 17,700.00' },
  { country: 'E-VISA', fee: 'PHP 5,000.00' },
  { country: 'INDIA E-VISA', fee: 'PHP 6,500.00' },
  { country: 'EGYPT', fee: 'PHP 10,800.00' },
  { country: 'ROMANIA', fee: 'PHP 12,400.00' },
  { country: 'BAHAMAS', fee: 'PHP 15,500.00' },
  { country: 'JORDAN', fee: 'PHP 14,500.00' },
  { country: 'ALBANIA', fee: 'PHP 17,000.00' },
  { country: 'JAMAICA', fee: 'PHP 13,500.00' },
  { country: 'OMEN', fee: 'PHP 10,500.00' },
]

export interface AdditionalVisaFeeEntry {
  label: string
  fee?: string
  type: 'main' | 'sub' | 'info'
}

export const additionalVisaFees: AdditionalVisaFeeEntry[] = [
  { label: 'JAPAN VISA', fee: 'PHP 3,500.00', type: 'main' },
  { label: 'REQUEST FOR MULTIPLE', fee: 'PHP 3,500.00', type: 'sub' },
  { label: 'VISITING RELATIVES', fee: 'PHP 5,000.00', type: 'sub' },
  { label: 'SCHENGEN VISA', fee: 'PHP 15,500.00', type: 'main' },
  {
    label:
      '(FRANCE, ITALY, GERMANY, AUSTRIA, NETHERLAND, SWEDEN, DENMARK, FINLAND, ICELAND, BELGIUM, CZEH, NORWAY, MALTA, SPAIN)',
    type: 'info',
  },
  { label: 'USA VISA (NEW/DROPBOX)', fee: 'PHP 15,500.00', type: 'main' },
  { label: 'PASSPORT (OLD/NEW)', fee: 'PHP 2,900.00', type: 'main' },
]
