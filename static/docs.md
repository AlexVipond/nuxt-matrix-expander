# Matrix Expander Docs

As network data structures go, **adjacency matrices** are a compact, effective option. In spreadsheet form, they look like this:

<div class="flex">
  <svg class="mx-auto w-64 h-64" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <rect y="75" width="50" height="425" rx="10" fill="#4E8FD6"/>
      <rect x="75" width="425" height="50" rx="10" fill="#F66D9B"/>
      <rect x="75" y="75" width="425" height="425" rx="10" fill="#43C194"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="500" height="500" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</div>

The blue bar on the left represents connection sources, the pink bar along the top represents connection targets, and the green body represents connection strengths (or a boolean value indicating absence/presence of a connection).

Here's a more concrete example, representing connections from Harry Potter characters (left) to other characters (top) with varying strengths (body):

| | Harry | Hermione | Ron | Draco | Dobby |
| --- | --- | --- | --- | --- | --- |
| Harry | 5 | 4 | 4 | 2 | 3 |
| Hermione | 4 | 5 | 5 | 0 | 4 |
| Ron | 4 | 5 | 5 | 0 | 3 |
| Draco | 1 | 0 | 0 | 5 | 0 |
| Dobby | 5 | 5 | 5 | 0 | 2 |

In this matrix, you can see that there's an exceptionally strong connection from Hermione to Ron, a very weak but still existent connection from Draco to Harry, and a somewhat weak connection from Dobby to himself.


<div class="flex">
  <svg class="mx-auto w-64 h-64" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="75" width="50" height="425" rx="10" fill="#4E8FD6"/>
    <rect x="75" y="75" width="50" height="425" rx="10" fill="#F66D9B"/>
    <rect x="150" y="75" width="50" height="425" rx="10" fill="#43C194"/>
    <rect x="225" y="75" width="275" height="425" rx="10" fill="#B8C2CC" fill-opacity="0.4"/>
    <rect width="500" height="50" rx="10" fill="#F5825B"/>
  </svg>
</div>
