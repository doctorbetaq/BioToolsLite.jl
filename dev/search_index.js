var documenterSearchIndex = {"docs":
[{"location":"#SimpleBio.jl","page":"SimpleBio","title":"SimpleBio.jl","text":"","category":"section"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"(Image: license) (Image: build) (Image: docs) (Image: docs)","category":"page"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"well come to SimpleBio.jl –biological sequences in simple text way!","category":"page"},{"location":"#Features","page":"SimpleBio","title":"Features","text":"","category":"section"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"Sequence identification for DNA or RNA. (isdna, isrna functions)\nWork with nucleotides:\ntranscript (xtranscript) for transcription of DNA to RNA (xtranscript for DNA with nucleobase not ATCG.)\nReverse-compliment sequence using DNArc and RNArc functions.\nRetro-transcription of RNA to DNA using RTanscript function.\nrandseq function to generate DNA, RNA or amino acid chains.\ntranlatedna function for translation of dna sequence (also can enter RNA sequence if needed) to amino acid sequence.\nSequence alignment with nalign(DNA or RNA) and aalign (for amino acid sequences).    (powered by BioAlignments.jl and BioSequences.jl)\noutputs are text String that can be used in the further processing!","category":"page"},{"location":"#Install","page":"SimpleBio","title":"Install","text":"","category":"section"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"To install SimpleBio, type ']' in REPL to enter Pkg mode and type:","category":"page"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"add https://github.com/doctorbetaq/SimpleBio.jl","category":"page"},{"location":"#Usage","page":"SimpleBio","title":"Usage","text":"","category":"section"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"To use SimpleBio, simply type in:","category":"page"},{"location":"","page":"SimpleBio","title":"SimpleBio","text":"using SimpleBio","category":"page"},{"location":"ali/","page":"Sequence Alignment","title":"Sequence Alignment","text":"CurrentModule = SimpleBio\nDocTestSetup = quote\n    using SimpleBio\nend","category":"page"},{"location":"ali/#Sequence-Alignment","page":"Sequence Alignment","title":"Sequence Alignment","text":"","category":"section"},{"location":"ali/#Align-the-DNA,-RNA-and-amino-acid-sequences","page":"Sequence Alignment","title":"Align the DNA, RNA and amino acid sequences","text":"","category":"section"},{"location":"ali/","page":"Sequence Alignment","title":"Sequence Alignment","text":"nalign\naalign","category":"page"},{"location":"ali/#SimpleBio.nalign","page":"Sequence Alignment","title":"SimpleBio.nalign","text":"nalign(type::Int64, s1::String, s2::String)\n\nAlignment of nucleotides (DNA or RNA) by default gapopen = -5, gapextend = -1 (see BioAlignments.jl for details.). parameter for type of sequence     1 => DNA     2 => RNA\n\n\n\n\n\nnalign(type::Int64, s1::String, s2::String, g_o::Int64, g_e::Int64)\n\nAlignment of nucleotides (DNA or RNA) with type-in gapopen and gapextend values.  (see BioAlignments.jl for details.)\n\n\n\n\n\n","category":"function"},{"location":"ali/#SimpleBio.aalign","page":"Sequence Alignment","title":"SimpleBio.aalign","text":"aalign(s1::String, s2::String)\n\nAlignment of amino acid by default gapopen = -5, gapextend = -1  (see BioAlignments.jl for details.)\n\n\n\n\n\naalign(s1::String, s2::String, g_o::Int64, g_e::Int64)\n\nAlignment of nucleotides (DNA or RNA) with type-in gapopen and gapextend values.  (see BioAlignments.jl for details.)\n\n\n\n\n\n","category":"function"},{"location":"nts/","page":"Work with Nucleotides","title":"Work with Nucleotides","text":"CurrentModule = SimpleBio\nDocTestSetup = quote\n    using SimpleBio\nend","category":"page"},{"location":"nts/#Work-with-nucleotides","page":"Work with Nucleotides","title":"Work with nucleotides","text":"","category":"section"},{"location":"nts/","page":"Work with Nucleotides","title":"Work with Nucleotides","text":"transcript\nxtranscript\nDNArc\nRNArc\nRTranscript\nRandSeq\nisdna\nisrna\ntranslatedna","category":"page"},{"location":"nts/#SimpleBio.transcript","page":"Work with Nucleotides","title":"SimpleBio.transcript","text":"transcript(x::String)\n\ntranscription of the imput DNA equence. This function only allow DNA sequence with A, T, C, G bases. If there are other kind of base in the DNA sequence, consider using xtranscript(x::String)\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.xtranscript","page":"Work with Nucleotides","title":"SimpleBio.xtranscript","text":"xtranscript(x::String)\n\ntranscription of the imput DNA equence. This function allow DNA sequences with bases not included in A, T, C, G.\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.DNArc","page":"Work with Nucleotides","title":"SimpleBio.DNArc","text":"DNArc(x::String)\n\nThis is the function for generating a reverse-compliment sequence to the entered sequence in string type.\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.RNArc","page":"Work with Nucleotides","title":"SimpleBio.RNArc","text":"RNArc(x::String)\n\nThis is the function for generating a reverse-compliment sequence to the entered sequence in string type.\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.RTranscript","page":"Work with Nucleotides","title":"SimpleBio.RTranscript","text":"RTranscript(x::String)\n\nGenerate the retro transcription of the entered sequence in string type.\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.RandSeq","page":"Work with Nucleotides","title":"SimpleBio.RandSeq","text":"RandSeq(type::String, length::Int64)\n\nGenerate random sequence of select type (RNA, DNA or aminoacid). Acceptable parameters of type:  DNA: [\"DNA\", \"DNAs\", \"DNA nucleotides\", \"DNA chain\", \"dna\", \"dnas\", \"dna nucleotides\", \"dna chain\"] RNA: [\"RNA\", \"RNAs\", \"RNA nucleotides\", \"RNA chain\", \"rna\", \"rnas\", \"rna nucleotides\", \"rna chain\"] amino acid: [\"AminoAcid\", \"aminoacid\", \"amino acid\", \"peptide\", \"aa\", \"AA\"]\n\n\n\n\n\nRandSeq(type::String, length::Int64, num::Int64)\n\nGenerate inputted numbers of random sequence of select type (RNA, DNA or aminoacid). Acceptable parameters of type:  DNA: [\"DNA\", \"DNAs\", \"DNA nucleotides\", \"DNA chain\", \"dna\", \"dnas\", \"dna nucleotides\", \"dna chain\"] RNA: [\"RNA\", \"RNAs\", \"RNA nucleotides\", \"RNA chain\", \"rna\", \"rnas\", \"rna nucleotides\", \"rna chain\"] amino acid: [\"AminoAcid\", \"aminoacid\", \"amino acid\", \"peptide\", \"aa\", \"AA\"]\n\n\n\n\n\nRandSeq(operator::Int64, type::String, length::Int64, num::Int64)\n\nGenerate inputted numbers of random sequence of select type (RNA, DNA or aminoacid). operator = 1 to get array returned. Acceptable parameters of type:  DNA: [\"DNA\", \"DNAs\", \"DNA nucleotides\", \"DNA chain\"] RNA: [\"RNA\", \"RNAs\", \"RNA nucleotides\", \"RNA chain\"] amino acid: [\"AminoAcid\", \"aminoacid\", \"amino acid\", \"peptide\", \"aa\", \"AA\"]\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.isdna","page":"Work with Nucleotides","title":"SimpleBio.isdna","text":"isdna(x::String)\n\nIdentify is a sequence is DNA sequence in string type.\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.isrna","page":"Work with Nucleotides","title":"SimpleBio.isrna","text":"isrna((x::String)\n\nIdentify is a sequence is RNA sequence in string type.\n\n\n\n\n\n","category":"function"},{"location":"nts/#SimpleBio.translatedna","page":"Work with Nucleotides","title":"SimpleBio.translatedna","text":"translatedna(translatedna(x::String))\n\nReturn the translation result of the input DNA or RNA sequence in 3-letter amino acid codes.\n\n\n\n\n\ntranslatedna(translatedna(operator::Int64, x::String))\n\nReturn the translation result of the input DNA or RNA sequence in 1-letter amino acid codes while operator enter =1.\n\n\n\n\n\n","category":"function"}]
}
