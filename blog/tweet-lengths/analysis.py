import numpy
import html
import pandas
from pandas import DataFrame, Series

# Load data
#
# Downloaded from https://archive.org/details/twitter_cikm_2010
# on 6 Mar 2016.

tweets = pandas.read_csv("test_set_tweets.txt",
                         sep="\t",
                         header=None,
                         names=["user_id", "tweet_id", "text", "date"])

# Clean data
#
# Filter out null tweets, retweets, and tweets that may have been incorrectly
# imported. Then unescape HTML characters like &gt;

tweets = tweets[pandas.notnull(tweets['text'])]
tweets = tweets[~ tweets['text'].str.contains('RT @')]
tweets = tweets[~ tweets['text'].str.contains('RT @')]
tweets = tweets[~ tweets['text'].str.contains('\t')]
tweets["text"] = tweets["text"].apply(html.unescape)

# Calculate lengths

tweets["length"] = Series(tweets["text"]).str.len()


by_length = tweets.groupby("length")
by_length = by_length.size() / tweets["text"].size * 100
by_length.to_csv("data.csv")
