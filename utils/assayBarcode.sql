CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- INSERT INTO public."AssayBarcode"( id, "barcode", "tubeNum", "type", "protocol")
-- VALUES 
-- (uuid_generate_v4(),'ATC','1','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'TGA','2','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'GCT','3','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'CAG','4','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'AGA','5','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'TCT','6','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'GAG','7','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'CTC','8','8 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'CATC','1','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'ATGA','2','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'AGCT','3','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'ACAG','4','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'GAAT','5','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'TACG','6','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'TTAC','7','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'GTTG','8','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'CCGT','9','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'CGAA','10','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'TCTA','11','12 Assays', 'Split&Pool'),
-- (uuid_generate_v4(),'GGGC','12','12 Assays', 'Split&Pool');


#Droplet 
-- INSERT INTO public."AssayBarcode"( id, "barcode", "tubeNum", "type", "protocol")
-- VALUES 
-- (uuid_generate_v4(),'','1','10x', 'Droplet'),
-- (uuid_generate_v4(),'','2','10x', 'Droplet'),
-- (uuid_generate_v4(),'','3','10x', 'Droplet'),
-- (uuid_generate_v4(),'','4','10x', 'Droplet'),
-- (uuid_generate_v4(),'','5','10x', 'Droplet'),
-- (uuid_generate_v4(),'','6','10x', 'Droplet'),
-- (uuid_generate_v4(),'','7','10x', 'Droplet'),
-- (uuid_generate_v4(),'','8','10x', 'Droplet'),
-- (uuid_generate_v4(),'','9','10x', 'Droplet'),
-- (uuid_generate_v4(),'','10','10x', 'Droplet'),
-- (uuid_generate_v4(),'','11','10x', 'Droplet'),
-- (uuid_generate_v4(),'','12','10x', 'Droplet'),
-- (uuid_generate_v4(),'','13','10x', 'Droplet'),
-- (uuid_generate_v4(),'','14','10x', 'Droplet'),
-- (uuid_generate_v4(),'','15','10x', 'Droplet'),
-- (uuid_generate_v4(),'','16','10x', 'Droplet');

INSERT INTO public."AssayBarcode"( id, "barcode", "tubeNum", "type", "protocol")
VALUES 
(uuid_generate_v4(),'CC','1','10x 2BMulti', 'Droplet'),
(uuid_generate_v4(),'AA','2','10x 2BMulti', 'Droplet'),
(uuid_generate_v4(),'GT','3','10x 2BMulti', 'Droplet'),
(uuid_generate_v4(),'AT','4','10x 2BMulti', 'Droplet');



#Bulk 
-- INSERT INTO public."AssayBarcode"( id, "barcode", "tubeNum", "type", "protocol")
-- VALUES 
-- (uuid_generate_v4(),'','1','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','2','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','3','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','4','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','5','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','6','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','7','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','8','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','9','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','10','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','11','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','12','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','13','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','14','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','15','Cut&Tag', 'Bulk'),
-- (uuid_generate_v4(),'','16','Cut&Tag', 'Bulk');

