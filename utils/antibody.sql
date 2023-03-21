-- SELECT version();
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
INSERT INTO public."Antibody"(id, "name", "vendor", "cat", "target", "lot", "status", "metadata", "createdAt")
VALUES
(uuid_generate_v4(),'ABCAM H3K27me3 PCA',' ','ab195477','H3K27me3','GR3319723-15',' ',null,'8/9/2022'),
(uuid_generate_v4(),'ABCAM H3K27ac PCA',' ','ab4729','H3K27ac','GR3442884-1',' ',null,'8/9/2022'),
(uuid_generate_v4(),'ABCAM H3K9me3 PCA',' ','ab8898','H3K9me3','GR3444658-1',' ',null,'8/9/2022'),
(uuid_generate_v4(),'ABCAM H3K4me1 PCA',' ','ab8895','H3K4me1','GR3442591-3',' ',null,'8/9/2022'),
(uuid_generate_v4(),'ABCAM H3K27ac MCA',' ','ab177178','H3K27ac',' ',' ',null,'8/9/2022'),
(uuid_generate_v4(),'H3K27ac_ab4729_GR3442884-1','Abcam','ab4729','H3K27ac','GR3442884-1',' ',null,'11/8/2022'),
(uuid_generate_v4(),'H3K4me1_ab8895_GR3442591-3','Abcam','ab8895','H3K4me1','GR3442591-3',' ',null,'11/8/2022'),
(uuid_generate_v4(),'H3K27me3_ab195477_GR3319723-15','Abcam','ab195477','H3K27me3','GR3319723-15',' ',null,'11/8/2022'),
(uuid_generate_v4(),'H3K9me3_ab8898_GR3444658-1','Abcam','ab8898','H3K9me3','GR3444658-1',' ',null,'11/8/2022'),
(uuid_generate_v4(),'H3K27me3_ab195477_GR3319723-16','Abcam','ab195477','H3K27me3','GR3319723-16',' ',null,'3/16/2023'),
(uuid_generate_v4(),'H3K4me3_ab8850_1015495-2','Abcam','ab8850','H3K4me3','1015495-2',' ',null,'3/16/2023');