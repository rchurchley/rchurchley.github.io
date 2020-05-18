import pandas

wd = pandas.read_csv("eng-ca_web_2002_1M-words.txt", "\t", header=None, names=["Rank", "Word", "Frequency"])
wd.Word = wd.Word.apply(str).str.lower()
wd = (wd.query("Frequency > 5")                   # Clean data by removing rare words,
        .query("Word.str.match('^[A-Za-z]*$')")   # words with non-letters, 
        .query("Word.str.contains('[aeiouy]')")   # abbrvns w/o vowels,
        .groupby("Word")                          # and duplicates
        .sum()
      )
wd["Length"] = pandas.Series(wd.index, index=wd.index).str.len()

sm = wd.groupby("Length")

result = pandas.DataFrame({
    "NormalizedCount": sm.Frequency.count() / sm.Frequency.count().sum() * 100,
    "NormalizedFrequency": sm.Frequency.sum() / sm.Frequency.sum().sum() * 100
    })
