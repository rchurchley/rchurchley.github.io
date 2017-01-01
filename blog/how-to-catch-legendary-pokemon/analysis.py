import numpy as np


class Region:

    def __init_routes(self, d):
        self.routes = sorted(list(d.keys()))

    def __init_adjacency_matrix(self, d):
        arr, row = [], []
        for i in self.routes:
            for j in self.routes:
                if j in d[i]:
                    row.append(1)
                    # row.append(1/len(G[i]))
                else:
                    row.append(0)
            arr.append(row)
            row = []
        self.adjacency_matrix = np.array(arr)

    def __init_transition_matrix(self):
        A = self.adjacency_matrix
        self.transition_matrix = A / A.sum(axis=1).reshape([-1, 1])

    def __init__(self, d):
        self.__init_routes(d)
        self.__init_adjacency_matrix(d)
        self.__init_transition_matrix()
    
    def stationary_distribution(self):
        L, V = np.linalg.eig(self.transition_matrix.transpose())
        V = V.transpose()
        # Look for an vector with eigenvalue 1 (within float error)
        eigenvector = np.array(V[np.where(np.abs(L - 1.) < 1e-8)].flat)
        return eigenvector / np.sum(eigenvector)

    def expected_return_times(self):
        return 1/self.stationary_distribution()


johto = {
    29: [30, 46],
    30: [29, 31],
    31: [30, 32, 36, 45, 46],
    32: [31, 33, 36],
    33: [32, 34],
    34: [33, 35],
    35: [34, 36],
    36: [31, 32, 35, 37],
    37: [36, 38, 42],
    38: [37, 39, 42],
    39: [38],
    42: [37, 38, 43, 44],
    43: [42, 44],
    44: [42, 43, 45],
    45: [31, 44, 46],
    46: [29, 31, 45]
}

hoenn = {
    101: [102, 103],
    102: [101, 103, 104],
    103: [101, 102, 110],
    104: [102, 105, 115, 116],
    105: [104, 106],
    106: [105, 107],
    107: [106, 108],
    108: [107, 109],
    109: [108, 110, 134],
    110: [103, 109, 111, 117, 118, 134],
    111: [110, 112, 113, 117, 118],
    112: [111],
    113: [111, 114],
    114: [113, 115],
    115: [104, 114, 116],
    116: [104, 115, 117],
    117: [110, 111, 116, 118],
    118: [110, 111, 117, 119, 123],
    119: [118, 120],
    120: [119, 121],
    121: [120, 122, 124],
    122: [121, 123],
    123: [118, 122],
    124: [121, 125, 126],
    125: [124, 127],
    126: [124, 127],
    127: [125, 126, 128],
    128: [127, 129],
    129: [128, 130],
    130: [129, 131],
    131: [130, 132],
    132: [131, 133],
    133: [132, 134],
    134: [109, 110, 133]
}

johto = Region(johto)
result = np.array([johto.routes, johto.expected_return_times()]).transpose()
np.savetxt("johto.csv", result, fmt="%d,%.4f")

hoenn = Region(hoenn)
result = np.array([hoenn.routes, hoenn.expected_return_times()]).transpose()
np.savetxt("hoenn.csv", result, fmt="%d,%.4f")