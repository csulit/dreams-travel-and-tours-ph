-- Seed data for visa_fees table
-- Prices stored in centavos (PHP 4,000.00 = 400000)

-- Standard category - Left column
INSERT INTO visa_fees (category, type, label, fee_centavos, sort_order, grid_column) VALUES
  ('standard', 'main', 'KOREA VISA', 400000, 1, 'left'),
  ('standard', 'main', 'CHINA VISA', 790000, 2, 'left'),
  ('standard', 'main', 'DUBAI E-VISA (30 DAYS)', 1520000, 3, 'left'),
  ('standard', 'main', 'AUSTRALIA E-VISA', 1450000, 4, 'left'),
  ('standard', 'main', 'NEW ZEALAND', 1450000, 5, 'left'),
  ('standard', 'main', 'CANADA VISA', 1550000, 6, 'left'),
  ('standard', 'main', 'ETA', 350000, 7, 'left'),
  ('standard', 'main', 'IRELAND VISA', 1650000, 8, 'left'),
  ('standard', 'main', 'PORTUGAL', 1550000, 9, 'left'),
  ('standard', 'main', 'UK VISA', 1550000, 10, 'left');

-- Standard category - Right column
INSERT INTO visa_fees (category, type, label, fee_centavos, sort_order, grid_column) VALUES
  ('standard', 'main', 'TURKEY VISA', 1770000, 11, 'right'),
  ('standard', 'main', 'E-VISA', 500000, 12, 'right'),
  ('standard', 'main', 'INDIA E-VISA', 650000, 13, 'right'),
  ('standard', 'main', 'EGYPT', 1080000, 14, 'right'),
  ('standard', 'main', 'ROMANIA', 1240000, 15, 'right'),
  ('standard', 'main', 'BAHAMAS', 1550000, 16, 'right'),
  ('standard', 'main', 'JORDAN', 1450000, 17, 'right'),
  ('standard', 'main', 'ALBANIA', 1700000, 18, 'right'),
  ('standard', 'main', 'JAMAICA', 1350000, 19, 'right'),
  ('standard', 'main', 'OMEN', 1050000, 20, 'right');

-- Additional category - Japan Visa group (parent_id will be set after insert)
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order) VALUES
  (21, 'additional', 'main', 'JAPAN VISA', 350000, 1);
INSERT INTO visa_fees (category, type, label, fee_centavos, parent_id, sort_order) VALUES
  ('additional', 'sub', 'REQUEST FOR MULTIPLE', 350000, 21, 2),
  ('additional', 'sub', 'VISITING RELATIVES', 500000, 21, 3);

-- Additional category - Schengen Visa group
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order) VALUES
  (24, 'additional', 'main', 'SCHENGEN VISA', 1550000, 4);
INSERT INTO visa_fees (category, type, label, parent_id, sort_order) VALUES
  ('additional', 'info', '(FRANCE, ITALY, GERMANY, AUSTRIA, NETHERLAND, SWEDEN, DENMARK, FINLAND, ICELAND, BELGIUM, CZEH, NORWAY, MALTA, SPAIN)', 24, 5);

-- Additional category - standalone items
INSERT INTO visa_fees (category, type, label, fee_centavos, sort_order) VALUES
  ('additional', 'main', 'USA VISA (NEW/DROPBOX)', 1550000, 6),
  ('additional', 'main', 'PASSPORT (OLD/NEW)', 290000, 7);
