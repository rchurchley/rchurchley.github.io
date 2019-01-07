import pandas as pd
pd.set_option('display.max_columns', 15)
pd.set_option('display.width', 1000)

def main():
    n = Names()

    print("\n\n---------------------------------------------")

    print("\n\nMost popular gender-neutral names, 1925–1934\n")
    print(n.top_list_for(n.neutral, 1925, 1934))

    print("\n\nMost popular gender-neutral names, 1955–1964\n")
    print(n.top_list_for(n.neutral, 1955, 1964))

    print("\n\nMost popular gender-neutral names, 1985–1994\n")
    print(n.top_list_for(n.neutral, 1985, 1994))

    print("\n\nMost popular gender-neutral names, 2005–2014\n")
    print(n.top_list_for(n.neutral, 2005, 2014))

    print("\n\nMost popular gender-neutral names, 1915–2014\n")
    print(n.top_list_for(n.neutral, 1915, 2014))

    print("\n\n---------------------------------------------")

    print("Saving data for historical plots.")
    names = ["FRANCIS_M", "FRANCIS_F", "KELLY_M", "KELLY_F", "LESLIE_M", "LESLIE_F", "TAYLOR_M", "TAYLOR_F", "RILEY_M", "RILEY_F", "CHRIS_M", "CHRISTINE_F", "CHRISTOPHER_M", "CHRISTIAN_M", "CHRISTA_F", "CHRISTY_F", "CHRISTIE_F", "CHRISTINA_F", "KRISTY_F", "KRISTINE_F", "KRISTOPHER_M", "CHRISTIANA_F", "KRISTINA_F", "KRIS_M"]
    n.normalized_historical_data_for(names).to_csv("data-historical.csv", index_label="DATE")

    print("Saving data for share of gender-nonspecific names.")
    n.share_of_neutral_names().to_csv("data-neutralshare.csv", index_label="DATE")


class Names():

    def __init__(self):
        self.girls = Names.__read_csv("bc-popular-girls-names.csv")
        self.boys = Names.__read_csv("bc-popular-boys-names.csv")
        self.neutral = Names.__join_and_min(self.girls, self.boys).astype(int)
        self.names_data = Names.__join(self.girls, self.boys).astype(int)

    def top_list_for(self, table, start, end, max_count=25):
        df = Names.__range(table, start, end).sort_values(ascending=False)
        if max_count is not None:
            df = df.head(max_count)
        return df

    def normalized_historical_data_for(self, names):
        normalized_data = self.names_data / self.names_data.sum() * 100
        return normalized_data.loc[names].transpose()

    def share_of_neutral_names(self):
        intersection_indicator = ((self.boys >= 10) * (self.girls >= 10))
        return ((self.boys + self.girls) * intersection_indicator).fillna(0).sum() / self.names_data.sum() * 100

    def __read_csv(f):
        df = pd.read_csv(f, index_col=0)[1:]
        df = df.drop('Total', axis=1)
        return df

    def __join_and_min(a, b):
        c = a.index.union(b.index)
        a = a.reindex(c).fillna(0)
        b = b.reindex(c).fillna(0)
        return 1/2 * (a + b - (a-b).abs())

    def __join(a, b):
      a = a.transpose().add_suffix("_F")
      b = b.transpose().add_suffix("_M")
      return a.join(b, how="outer").fillna(0).transpose()

    def __range(df, start, end):
        columns = [str(i) for i in range(start, end + 1)]
        return df[columns].sum(axis=1)

if __name__ == "__main__":
  main()