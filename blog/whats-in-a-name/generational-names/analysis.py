import pandas as pd
pd.set_option('display.max_columns', 15)
pd.set_option('display.width', 1000)

def main():
    n = Names()

    print("\n\n---------------------------------------------")

    print("\n\nMost popular girl's names, 1925–1934\n")
    print(n.top_list_for(n.girls, 1925, 1934))

    print("\n\nMost popular girl's names, 1955–1964\n")
    print(n.top_list_for(n.girls, 1955, 1964))

    print("\n\nMost popular girl's names, 1985–1994\n")
    print(n.top_list_for(n.girls, 1985, 1994))

    print("\n\nMost popular girl's names, 2005–2014\n")
    print(n.top_list_for(n.girls, 2005, 2014))

    print("\n\n---------------------------------------------")

    print("\n\nMost popular boy's names, 1925–1934\n")
    print(n.top_list_for(n.boys, 1925, 1934))

    print("\n\nMost popular boy's names, 1955–1964\n")
    print(n.top_list_for(n.boys, 1955, 1964))

    print("\n\nMost popular boy's names, 1985–1994\n")
    print(n.top_list_for(n.boys, 1985, 1994))

    print("\n\nMost popular boy's names, 2005–2014\n")
    print(n.top_list_for(n.boys, 2005, 2014))

    print("\n\n---------------------------------------------")

    print("Saving data for historical plots.")
    names = ["ROSS", "MARY", "SUSAN", "JESSICA", "OLIVIA", "JOHN", "DAVID", "MICHAEL", "ETHAN", "TOTAL"]
    df = n.historical_data_for(names).join(n.normalized_historical_data_for(names), lsuffix="", rsuffix="_PCT")
    df.to_csv("data-historical.csv", index_label="DATE")

    print("Saving data for share-of-top-10 chart")
    df = n.share_of_top_n(10)
    df.to_csv("data-top10share.csv", index_label="Year")


class Names():
    def __init__(self):
        self.girls = Names.__read_csv("bc-popular-girls-names.csv")
        self.boys = Names.__read_csv("bc-popular-boys-names.csv")
        self.combined = Names.__join_and_sum(self.girls, self.boys).astype(int)
    def __read_csv(f):
        df = pd.read_csv(f, index_col=0)[1:]
        df = df.drop('Total', axis=1)
        return df
    def __join_and_sum(a, b):
        c = a.index.unique().union(b.index.unique()).unique()
        return a.reindex(c).fillna(0) + b.reindex(c).fillna(0)

    def top_list_for(self, table, start, end, max_count=25):
        df = Names.__range(table, start, end).sort_values(ascending=False)
        if max_count is not None:
            df = df.head(max_count)
        return df

    def historical_data_for(self, names):
        df = self.combined.loc[names].transpose()
        df["TOTAL"] = self.combined.sum()
        return df

    def normalized_historical_data_for(self, names):
        normalized_data = self.combined / self.combined.sum() * 100
        return normalized_data.loc[names].transpose()

    def share_of_top_n(self, n):
        g = Names.__share_of_top_n(self.girls, n)
        b = Names.__share_of_top_n(self.boys, n)
        return pd.DataFrame({ "M": b, "F": g})

    def __range(df, start, end):
        columns = [str(i) for i in range(start, end + 1)]
        return df[columns].sum(axis=1)

    def __share_of_top_n(df, n):
        r = df.rank(method="first", ascending=False)
        r = ((r <= n) * df / df.sum()).sum() * 100
        return r

if __name__ == "__main__":
  main()
