# Matrix Expander Docs

Use this tool to convert [adjacency matrices](https://en.wikipedia.org/wiki/Adjacency_matrix) into [edge lists](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs).

To get started, click the **Start** button on the home page, then upload a JSON, CSV, or XLSX file containing an adjacency matrix. CSV and XLSX matrices should look like this:

| | Harry | Hermione | Ron | Draco | Dobby |
| --- | --- | --- | --- | --- | --- |
| Harry | 4 | 5 | 5 | 2 | 4 |
| Hermione | 5 | 5 | 5 | 1 | 5 |
| Ron | 5 | 5 | 4 | 1 | 4 |
| Draco | 1 | 1 | 1 | 5 | 1 |
| Dobby | 5 | 5 | 5 | 1 | 3 |

And JSON matrices should look like this:

```
{
  "strengths": {
    "Harry": {
      "Harry": 4,
      "Hermione": 5,
      "Ron": 5,
      "Draco": 2,
      "Dobby": 4
    },
    "Hermione": {
      "Harry": 5,
      "Hermione": 5,
      "Ron": 5,
      "Draco": 1,
      "Dobby": 5
    },
    ...
  }
}

```
<!-- "Ron": {
  "Harry": 5,
  "Hermione": 5,
  "Ron": 4,
  "Draco": 1,
  "Dobby": 3
},
"Draco": {
  "Harry": 1,
  "Hermione": 1,
  "Ron": 1,
  "Draco": 5,
  "Dobby": 1
},
"Dobby": {
  "Harry": 5,
  "Hermione": 5,
  "Ron": 5,
  "Draco": 1,
  "Dobby": 3
} -->

In a JSON matrix file, you can optionally include explicit arrays of sources and targets:

```
{
  "strengths": {
    "Harry": {
      "Harry": 4,
      "Hermione": 5,
      "Ron": 5,
      "Draco": 2,
      "Dobby": 4
    },
    ...
  },
  "sources": ["Harry", "Hermione", "Ron", "Draco", "Dobby"],
  "targets": ["Harry", "Hermione", "Ron", "Draco", "Dobby"],
}
```

Custom `sources` and `targets` will override the matrix expander's default behavior, which is to extract sources and targets directly from the data. This can be useful if you have the matrix for a large network, but only want to include specific sources and targets in your edge list.

After uploading, choose whether your matrix represents **directed** or **undirected** connections. Use the **Connection type is...** input to add a custom Type, which will appear in your edge list like so:

| From | To | Strength | Type |
| --- | --- | --- | --- |
| Ron | Harry | 5 | Friendship |
| Ron | Dobby | 3 | Friendship |
| Draco | Hermione | 1 | Friendship |
| ... | ... | ... | ... |

Then, set special instructions for the matrix expander:
- Checking **Include self connections** tells the matrix expander to include connections from a source node to itself, for example, a connection from **Dobby** to **Dobby** with a strength of **3**
- Checking **Include zero strengths** tells the matrix expander to include connections with a strength of **0** in the edge list.

Click **Expand** to expand your matrix. If you need to change a setting or upload a different file, simply change that setting and click **Expand** again.

Download your edge list as a JSON, CSV, or XLSX, then drag-and-drop the file onto any [Kumu](https://kumu.io) map to import and visualize the data.


## Sample data

[HarryPotterMatrix.csv](/HarryPotterMatrix.csv)
[HarryPotterMatrix.xlsx](/HarryPotterMatrix.xlsx)
[HarryPotterMatrix.json](/HarryPotterMatrix.json)
