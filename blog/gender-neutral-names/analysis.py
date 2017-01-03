import pandas as pd
pd.set_option('display.max_columns', 15)
pd.set_option('display.width', 1000)

class Names():

    def __read_csv(f):
        # read csv, discard year-by-year data and header separator
        df = pd.read_csv(f, index_col=0)[1:]
        # cast columns to integers
        df = df.apply(lambda x: x.str.replace(",", "").astype(int))
        return df
    
    def __range(df, start, end, suffix=""):
        columns = [str(i) + suffix for i in range(start, end + 1)]
        return df[columns].sum(axis=1)
    
    def __rank(c):
        return c.rank(ascending=False, method="min").astype(int)
    
    def __pct(c, cols):
        return (100 * c / cols.sum(axis=1)).round()

    def __share_of_top_n(df, n):
        r = df.rank(method="first", ascending=False)
        r = ((r <= n) * df / df.sum()).sum() * 100
        return r
    
    def __init__(self):
        self.girls = Names.__read_csv("girls.csv")
        self.boys = Names.__read_csv("boys.csv")
        u = self.boys.join(self.girls, how="outer", lsuffix="_M", rsuffix="_F")
        u = u.fillna(0).astype(int)
        self.names = u
    
    def top_list_for(self, start, end, suffix=None, measure=None, max_count=25):
        if suffix is None:
            df = pd.DataFrame(
                { "F": Names.__range(self.names, start, end, "_F"), 
                  "M": Names.__range(self.names, start, end, "_M")})
        else:
            df = Names.__range(self.names, start, end, suffix)
        if measure is None:
            measure = lambda x: x
        o = measure(df).sort_values(ascending=False)
        df = df.loc[o.index]
        if max_count is not None:
            df = df.head(max_count)
        return df

    def historical_data_for(self, names):
        boys = self.boys.loc[names].transpose()
        girls = self.girls.loc[names].transpose()
        df = boys.join(girls, lsuffix="_M", rsuffix="_F").fillna(0).astype(int)
        return df

    def share_of_top_n(self, n):
        g = Names.__share_of_top_n(self.girls, n)
        b = Names.__share_of_top_n(self.boys, n)
        return pd.DataFrame({ "M": b, "F": g})


n = Names()

print("\n\nMost popular girl's names, 1916–1925\n")
print(n.top_list_for(1916, 1925, suffix="_F"))

print("\n\nMost popular girl's names, 1986–1995\n")
print(n.top_list_for(1986, 1995, suffix="_F"))

print("\n\nMost popular girl's names, 2006–2015\n")
print(n.top_list_for(2006, 2015, suffix="_F"))

print("\n\n---------------------------------------------")

print("\n\nMost popular boy's names, 1916–1925\n")
print(n.top_list_for(1916, 1925, suffix="_M"))

print("\n\nMost popular boy's names, 1986–1995\n")
print(n.top_list_for(1986, 1995, suffix="_M"))

print("\n\nMost popular boy's names, 2006–2015\n")
print(n.top_list_for(2006, 2015, suffix="_M"))

print("\n\n---------------------------------------------")

print("\n\nMost popular unisex names, 1916–1925\n")
print(n.top_list_for(1916, 1925, measure=lambda x: x.min(axis=1)))

print("\n\nMost popular unisex names, 1946–1955\n")
print(n.top_list_for(1946, 1955, measure=lambda x: x.min(axis=1)))

print("\n\nMost popular unisex names, 1986–1995\n")
print(n.top_list_for(1986, 1995, measure=lambda x: x.min(axis=1)))

print("\n\nMost popular unisex names, 2006–2015\n")
print(n.top_list_for(2006, 2015, measure=lambda x: x.min(axis=1)))

print("\n\n---------------------------------------------\n\n")

print("Saving data for historical plots.")
df = n.historical_data_for(["MARY", "JESSICA", "OLIVIA", "JOHN", "MICHAEL", "ETHAN", "LESLIE", "TAYLOR", "QUINN", "CHRISTINE", "CHRIS", "CHRISTOPHER", "CHRISTIAN", "CHRISTA", "CHRISTY", "CHRISTIE", "CHRISTINA", "KRISTY", "KRISTINE", "KRISTOPHER", "CHRISTIANA", "KRISTINA", "KRIS"])
# print(df)
df.to_csv("data-historical.csv", index_label="DATE")

print("Saving data for Chris ratios.")
df = n.names.loc[["CHRISTINE", "CHRIS", "CHRISTOPHER", "CHRISTIAN", "CHRISTA", "CHRISTY", "CHRISTIE", "CHRISTINA", "KRISTY", "KRISTINE", "KRISTOPHER", "CHRISTIANA", "KRISTINA", "KRIS"]][["Total_M", "Total_F"]].sort_values("Total_M", ascending=False).sort_values("Total_F", ascending=False)
# print(df)
df.to_csv("data-chris.csv", index_label="Name")

print("Saving data for name ratio chart.")
df = pd.DataFrame({
    "M": n.top_list_for(2006, 2015, suffix="_M", max_count=None), 
    "F": n.top_list_for(2006, 2015, suffix="_F", max_count=None)
})
df = df[(df.M > 5) & (df.F > 5)]
df["Pct_M"] = df.M / (df.M + df.F) * 100
# print(df)
df.to_csv("data.csv", index_label="Name")

print("Saving data for share-of-top-10 chart")
df = n.share_of_top_n(10) * 0.75
# print(df)
df.to_csv("data-top10share.csv", index_label="Year")

print("Saving data for histogram.")
b = n.top_list_for(2006, 2015, suffix="_M", max_count=None)
g = n.top_list_for(2006, 2015, suffix="_F", max_count=None)
b, g = b[b > 0], g[g > 0]
b.index = b.rank(ascending=False, method="first").astype(int)
g.index = g.rank(ascending=False, method="first").astype(int)
df = pd.DataFrame({ "M": b, "F": g}).fillna(0).astype(int)[::10]
# print(df)
df.to_csv("data-histogram.csv", index_label="Rank")