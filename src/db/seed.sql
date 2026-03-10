-- Seed data for visa_fees table
-- Prices stored in centavos (PHP 4,000.00 = 400000)

-- Standard category - Left column
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order, grid_column) VALUES
  ('a1b2c3d4-0001-4000-8000-000000000001', 'standard', 'main', 'KOREA VISA', 400000, 1, 'left'),
  ('a1b2c3d4-0002-4000-8000-000000000002', 'standard', 'main', 'CHINA VISA', 790000, 2, 'left'),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'standard', 'main', 'DUBAI E-VISA (30 DAYS)', 1520000, 3, 'left'),
  ('a1b2c3d4-0004-4000-8000-000000000004', 'standard', 'main', 'AUSTRALIA E-VISA', 1450000, 4, 'left'),
  ('a1b2c3d4-0005-4000-8000-000000000005', 'standard', 'main', 'NEW ZEALAND', 1450000, 5, 'left'),
  ('a1b2c3d4-0006-4000-8000-000000000006', 'standard', 'main', 'CANADA VISA', 1550000, 6, 'left'),
  ('a1b2c3d4-0007-4000-8000-000000000007', 'standard', 'main', 'ETA', 350000, 7, 'left'),
  ('a1b2c3d4-0008-4000-8000-000000000008', 'standard', 'main', 'IRELAND VISA', 1650000, 8, 'left'),
  ('a1b2c3d4-0009-4000-8000-000000000009', 'standard', 'main', 'PORTUGAL', 1550000, 9, 'left'),
  ('a1b2c3d4-0010-4000-8000-000000000010', 'standard', 'main', 'UK VISA', 1550000, 10, 'left');

-- Standard category - Right column
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order, grid_column) VALUES
  ('a1b2c3d4-0011-4000-8000-000000000011', 'standard', 'main', 'TURKEY VISA', 1770000, 11, 'right'),
  ('a1b2c3d4-0012-4000-8000-000000000012', 'standard', 'main', 'E-VISA', 500000, 12, 'right'),
  ('a1b2c3d4-0013-4000-8000-000000000013', 'standard', 'main', 'INDIA E-VISA', 650000, 13, 'right'),
  ('a1b2c3d4-0014-4000-8000-000000000014', 'standard', 'main', 'EGYPT', 1080000, 14, 'right'),
  ('a1b2c3d4-0015-4000-8000-000000000015', 'standard', 'main', 'ROMANIA', 1240000, 15, 'right'),
  ('a1b2c3d4-0016-4000-8000-000000000016', 'standard', 'main', 'BAHAMAS', 1550000, 16, 'right'),
  ('a1b2c3d4-0017-4000-8000-000000000017', 'standard', 'main', 'JORDAN', 1450000, 17, 'right'),
  ('a1b2c3d4-0018-4000-8000-000000000018', 'standard', 'main', 'ALBANIA', 1700000, 18, 'right'),
  ('a1b2c3d4-0019-4000-8000-000000000019', 'standard', 'main', 'JAMAICA', 1350000, 19, 'right'),
  ('a1b2c3d4-0020-4000-8000-000000000020', 'standard', 'main', 'OMEN', 1050000, 20, 'right');

-- Additional category - Japan Visa group
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order) VALUES
  ('a1b2c3d4-0021-4000-8000-000000000021', 'additional', 'main', 'JAPAN VISA', 350000, 1);
INSERT INTO visa_fees (id, category, type, label, fee_centavos, parent_id, sort_order) VALUES
  ('a1b2c3d4-0022-4000-8000-000000000022', 'additional', 'sub', 'REQUEST FOR MULTIPLE', 350000, 'a1b2c3d4-0021-4000-8000-000000000021', 2),
  ('a1b2c3d4-0023-4000-8000-000000000023', 'additional', 'sub', 'VISITING RELATIVES', 500000, 'a1b2c3d4-0021-4000-8000-000000000021', 3);

-- Additional category - Schengen Visa group
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order) VALUES
  ('a1b2c3d4-0024-4000-8000-000000000024', 'additional', 'main', 'SCHENGEN VISA', 1550000, 4);
INSERT INTO visa_fees (id, category, type, label, parent_id, sort_order) VALUES
  ('a1b2c3d4-0025-4000-8000-000000000025', 'additional', 'info', '(FRANCE, ITALY, GERMANY, AUSTRIA, NETHERLAND, SWEDEN, DENMARK, FINLAND, ICELAND, BELGIUM, CZEH, NORWAY, MALTA, SPAIN)', 'a1b2c3d4-0024-4000-8000-000000000024', 5);

-- Additional category - standalone items
INSERT INTO visa_fees (id, category, type, label, fee_centavos, sort_order) VALUES
  ('a1b2c3d4-0026-4000-8000-000000000026', 'additional', 'main', 'USA VISA (NEW/DROPBOX)', 1550000, 6),
  ('a1b2c3d4-0027-4000-8000-000000000027', 'additional', 'main', 'PASSPORT (OLD/NEW)', 290000, 7);
