UPDATE public."I5Primer"
	SET libtype='any', protocol='Split&Pool', seq3='', seq4='', "subProtocol"='12 Assays'


INSERT INTO public."I5Primer"( id, "fSeq", "rcSeq",  "seq3", "seq4", "libtype",  "subProtocol", "protocol","createdAt" )
VALUES 
-- ('D501','TATAGCCT','AGGCTATA', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('D502','ATAGAGGC','GCCTCTAT', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('D503','CCTATCCT','AGGATAGG', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('D504','GGCTCTGA','TCAGAGCC', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('D505','AGGCGAAG','CTTCGCCT', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('D506','TAATCTTA','TAAGATTA', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('N503','TATCCTCT','AGAGGATA', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('N504','AGAGTAGA','TCTACTCT', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('N505','GTAAGGAG','CTCCTTAC', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('N506','ACTGCATA','TATGCAGT', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('N507','AAGGAGTA','TACTCCTT', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),
-- ('N508','CTAAGCCT','AGGCTTAG', '', '', 'any', '12 Assays', 'Split&Pool',NOW()),

('[E/H/N/S]501','TAGATCGC','GCGATCTA', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]502','CTCTCTAT','ATAGAGAG', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]503','TATCCTCT','AGAGGATA', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]504','AGAGTAGA','TCTACTCT', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]505','GTAAGGAG','CTCCTTAC', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]506','ACTGCATA','TATGCAGT', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]507','AAGGAGTA','TACTCCTT', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),
('[E/H/N/S]508','CTAAGCCT','AGGCTTAG', '', '', 'any', 'Cut&Tag', 'Bulk',NOW()),

('SI-TT-A1','AGTGTTACCT','AGGTAACACT','','','dna','10x','Droplet',NOW()),
('SI-TT-A2','GCCAACCCTG','CAGGGTTGGC','','','dna','10x','Droplet',NOW()),
('SI-TT-A3','TTAGACTGAT','ATCAGTCTAA','','','dna','10x','Droplet',NOW()),
('SI-TT-A4','TATCTTCATC','GATGAAGATA','','','dna','10x','Droplet',NOW()),
('SI-TT-A5','GAGCATCTAT','ATAGATGCTC','','','dna','10x','Droplet',NOW()),
('SI-TT-A6','CCCTAACTTC','GAAGTTAGGG','','','dna','10x','Droplet',NOW()),
('SI-TT-A7','TACTACCTTT','AAAGGTAGTA','','','dna','10x','Droplet',NOW()),
('SI-TT-A8','GAACTTGGAG','CTCCAAGTTC','','','dna','10x','Droplet',NOW()),
('SI-TT-A9','TTCCTGTTAC','GTAACAGGAA','','','dna','10x','Droplet',NOW()),
('SI-TT-A10','ATGGTCTAAA','TTTAGACCAT','','','dna','10x','Droplet',NOW()),
('SI-TT-A11','GATTCGAGGA','TCCTCGAATC','','','dna','10x','Droplet',NOW()),
('SI-TT-A12','GACTGTCAAT','ATTGACAGTC','','','dna','10x','Droplet',NOW()),
('SI-TT-B1','ACAGTTCGTT','AACGAACTGT','','','dna','10x','Droplet',NOW()),
('SI-TT-B2','CGGGAGAGTC','GACTCTCCCG','','','dna','10x','Droplet',NOW()),
('SI-TT-B3','GTTCGTCACA','TGTGACGAAC','','','dna','10x','Droplet',NOW()),
('SI-TT-B4','CTAGTGTGGT','ACCACACTAG','','','dna','10x','Droplet',NOW()),
('SI-TT-B5','CCGATGGTCT','AGACCATCGG','','','dna','10x','Droplet',NOW()),
('SI-TT-B6','TACGTAATGC','GCATTACGTA','','','dna','10x','Droplet',NOW()),
('SI-TT-B7','CCAACGATTT','AAATCGTTGG','','','dna','10x','Droplet',NOW()),
('SI-TT-B8','TATGCGTGAA','TTCACGCATA','','','dna','10x','Droplet',NOW()),
('SI-TT-B9','CAGGTAAGTG','CACTTACCTG','','','dna','10x','Droplet',NOW()),
('SI-TT-B10','AATCGTCTAG','CTAGACGATT','','','dna','10x','Droplet',NOW()),
('SI-TT-B11','TGACCTCTAG','CTAGAGGTCA','','','dna','10x','Droplet',NOW()),
('SI-TT-B12','TAGGTCACTC','GAGTGACCTA','','','dna','10x','Droplet',NOW()),
('SI-TT-C1','CAAGGATAAA','TTTATCCTTG','','','dna','10x','Droplet',NOW()),
('SI-TT-C2','CCGAGTAGTA','TACTACTCGG','','','dna','10x','Droplet',NOW()),
('SI-TT-C3','GAATGTTGTG','CACAACATTC','','','dna','10x','Droplet',NOW()),
('SI-TT-C4','TGTCGGGCAC','GTGCCCGACA','','','dna','10x','Droplet',NOW()),
('SI-TT-C5','ACGTTCTCGC','GCGAGAACGT','','','dna','10x','Droplet',NOW()),
('SI-TT-C6','ACGACCCTAA','TTAGGGTCGT','','','dna','10x','Droplet',NOW()),
('SI-TT-C7','CCTGTATTCT','AGAATACAGG','','','dna','10x','Droplet',NOW()),
('SI-TT-C8','CACGTGCCCT','AGGGCACGTG','','','dna','10x','Droplet',NOW()),
('SI-TT-C9','GTTTCGTCCT','AGGACGAAAC','','','dna','10x','Droplet',NOW()),
('SI-TT-C10','GAGGGTGGGA','TCCCACCCTC','','','dna','10x','Droplet',NOW()),
('SI-TT-C11','CTTGGGAATT','AATTCCCAAG','','','dna','10x','Droplet',NOW()),
('SI-TT-C12','GCAACTCAGG','CCTGAGTTGC','','','dna','10x','Droplet',NOW()),
('SI-TT-D1','GCTTGTCGAA','TTCGACAAGC','','','dna','10x','Droplet',NOW()),
('SI-TT-D2','CACCTCGGGT','ACCCGAGGTG','','','dna','10x','Droplet',NOW()),
('SI-TT-D3','AATACAACGA','TCGTTGTATT','','','dna','10x','Droplet',NOW()),
('SI-TT-D4','TTCCGTGCAC','GTGCACGGAA','','','dna','10x','Droplet',NOW()),
('SI-TT-D5','GTGGCAGGAG','CTCCTGCCAC','','','dna','10x','Droplet',NOW()),
('SI-TT-D6','GACACCAAAC','GTTTGGTGTC','','','dna','10x','Droplet',NOW()),
('SI-TT-D7','AGCCCGTAAC','GTTACGGGCT','','','dna','10x','Droplet',NOW()),
('SI-TT-D8','AGGTGTCTGC','GCAGACACCT','','','dna','10x','Droplet',NOW()),
('SI-TT-D9','CCTCTGGCGT','ACGCCAGAGG','','','dna','10x','Droplet',NOW()),
('SI-TT-D10','ACAAGTGTCG','CGACACTTGT','','','dna','10x','Droplet',NOW()),
('SI-TT-D11','CTGGAAGCAA','TTGCTTCCAG','','','dna','10x','Droplet',NOW()),
('SI-TT-D12','ACTCTAGTAG','CTACTAGAGT','','','dna','10x','Droplet',NOW()),
('SI-TT-E1','CTGTCCTGCT','AGCAGGACAG','','','dna','10x','Droplet',NOW()),
('SI-TT-E2','ATAACCCATT','AATGGGTTAT','','','dna','10x','Droplet',NOW()),
('SI-TT-E3','AGGAACTAGG','CCTAGTTCCT','','','dna','10x','Droplet',NOW()),
('SI-TT-E4','ATTCAGGTTA','TAACCTGAAT','','','dna','10x','Droplet',NOW()),
('SI-TT-E5','CAGGATGTTG','CAACATCCTG','','','dna','10x','Droplet',NOW()),
('SI-TT-E6','AACCTGGTAG','CTACCAGGTT','','','dna','10x','Droplet',NOW()),
('SI-TT-E7','TCATGCACAG','CTGTGCATGA','','','dna','10x','Droplet',NOW()),
('SI-TT-E8','ATTGACTTGG','CCAAGTCAAT','','','dna','10x','Droplet',NOW()),
('SI-TT-E9','TCGATGTCCA','TGGACATCGA','','','dna','10x','Droplet',NOW()),
('SI-TT-E10','ATATCCACAA','TTGTGGATAT','','','dna','10x','Droplet',NOW()),
('SI-TT-E11','GTGAATGCCA','TGGCATTCAC','','','dna','10x','Droplet',NOW()),
('SI-TT-E12','CATTCATGAC','GTCATGAATG','','','dna','10x','Droplet',NOW()),
('SI-TT-F1','AGCGGGATTT','AAATCCCGCT','','','dna','10x','Droplet',NOW()),
('SI-TT-F2','CTGATTCCTC','GAGGAATCAG','','','dna','10x','Droplet',NOW()),
('SI-TT-F3','TTGAAATGGG','CCCATTTCAA','','','dna','10x','Droplet',NOW()),
('SI-TT-F4','ACCTCCGCTT','AAGCGGAGGT','','','dna','10x','Droplet',NOW()),
('SI-TT-F5','TGATAAGCAC','GTGCTTATCA','','','dna','10x','Droplet',NOW()),
('SI-TT-F6','GCGTGAGATT','AATCTCACGC','','','dna','10x','Droplet',NOW()),
('SI-TT-F7','AATGAGCTTA','TAAGCTCATT','','','dna','10x','Droplet',NOW()),
('SI-TT-F8','GACATAGCTC','GAGCTATGTC','','','dna','10x','Droplet',NOW()),
('SI-TT-F9','CGAACGTGAC','GTCACGTTCG','','','dna','10x','Droplet',NOW()),
('SI-TT-F10','CGGTTTAACA','TGTTAAACCG','','','dna','10x','Droplet',NOW()),
('SI-TT-F11','TAGTGTACAC','GTGTACACTA','','','dna','10x','Droplet',NOW()),
('SI-TT-F12','CTATGAACAT','ATGTTCATAG','','','dna','10x','Droplet',NOW()),
('SI-TT-G1','CTTGATCGTA','TACGATCAAG','','','dna','10x','Droplet',NOW()),
('SI-TT-G2','GATTCCTTTA','TAAAGGAATC','','','dna','10x','Droplet',NOW()),
('SI-TT-G3','AGGTCAGGAT','ATCCTGACCT','','','dna','10x','Droplet',NOW()),
('SI-TT-G4','GCCTGGCTAG','CTAGCCAGGC','','','dna','10x','Droplet',NOW()),
('SI-TT-G5','TGCATCGAGT','ACTCGATGCA','','','dna','10x','Droplet',NOW()),
('SI-TT-G6','TAGCACTAAG','CTTAGTGCTA','','','dna','10x','Droplet',NOW()),
('SI-TT-G7','TTCGGCCAAA','TTTGGCCGAA','','','dna','10x','Droplet',NOW()),
('SI-TT-G8','CTATACTCAA','TTGAGTATAG','','','dna','10x','Droplet',NOW()),
('SI-TT-G9','TGCGGATGTT','AACATCCGCA','','','dna','10x','Droplet',NOW()),
('SI-TT-G10','TGAACGCCCT','AGGGCGTTCA','','','dna','10x','Droplet',NOW()),
('SI-TT-G11','CATTAGAAAC','GTTTCTAATG','','','dna','10x','Droplet',NOW()),
('SI-TT-G12','ATCAGGGCTT','AAGCCCTGAT','','','dna','10x','Droplet',NOW()),
('SI-TT-H1','CGTACCGTTA','TAACGGTACG','','','dna','10x','Droplet',NOW()),
('SI-TT-H2','CGGCTCTGTC','GACAGAGCCG','','','dna','10x','Droplet',NOW()),
('SI-TT-H3','GACGGATTGG','CCAATCCGTC','','','dna','10x','Droplet',NOW()),
('SI-TT-H4','TGCCACACAG','CTGTGTGGCA','','','dna','10x','Droplet',NOW()),
('SI-TT-H5','TTGTGTTTCT','AGAAACACAA','','','dna','10x','Droplet',NOW()),
('SI-TT-H6','GAATACTAAC','GTTAGTATTC','','','dna','10x','Droplet',NOW()),
('SI-TT-H7','TGTGTTCGAT','ATCGAACACA','','','dna','10x','Droplet',NOW()),
('SI-TT-H8','ATAGATAGGG','CCCTATCTAT','','','dna','10x','Droplet',NOW()),
('SI-TT-H9','CGAGTCCTTT','AAAGGACTCG','','','dna','10x','Droplet',NOW()),
('SI-TT-H10','AAAGGCTCTA','TAGAGCCTTT','','','dna','10x','Droplet',NOW()),
('SI-TT-H11','TGACGGAATG','CATTCCGTCA','','','dna','10x','Droplet',NOW()),
('SI-TT-H12','GTAGGAGTCG','CGACTCCTAC','','','dna','10x','Droplet',NOW());
