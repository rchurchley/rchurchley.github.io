#! /usr/local/bin/python3

import pandas as pd

# Load data
#
# Downloaded from http://corpora.informatik.uni-leipzig.de/download.html
# on Feb 23, 2015.

wd = pd.read_csv("eng-ca_web_2002_1M-text/eng-ca_web_2002_1M-words.txt",
                 "\t",
                 header=None,
                 names=["Rank", "Word", "Frequency"],
                 skiprows=82)

# Clean data
#
# Index by word instead of line number and discard rank information.
# Remove duplicates, entries with non-letters, unreliable words,
# and vowel-less abbreviations.

wd.Word = wd.Word.apply(str)
wd.Word = wd.Word.str.lower()
wd = wd[wd.Word.str.len() <= 18]
wd = wd[wd.Frequency > 5]
wd = wd[["Word", "Frequency"]][wd.Word.str.match("^[A-Za-z]*$")]
wd = wd[["Word", "Frequency"]][wd.Word.str.contains("[aeiouy]")]
wd = wd.groupby("Word").sum()

# Compute the length of each word and group by length.

wd["Length"] = pd.Series(wd.index, index=wd.index).str.len()
wd = wd.groupby("Length")

result = pd.DataFrame({
    "NormalizedCount": wd.Frequency.count() / wd.Frequency.count().sum() * 100,
    "NormalizedFrequency": wd.Frequency.sum() / wd.Frequency.sum().sum() * 100
    })

result.to_csv("data.csv")
