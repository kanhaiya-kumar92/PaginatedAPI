import { useEffect, useState } from "react";
import UserDetails from "./UserDetail";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";

export default function User() {
  const url = "https://reqres.in/api/users?page=";

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState(null);

  const handlePageChange = (event, page) => {
    console.log(page);
    setPageNumber(page);
  };

  useEffect(
    () =>
      fetch(`${url}${pageNumber}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
          setTotalPages(data.total_pages);
          console.log(data);
        })
        .catch((e) => console.log("Wrong", e)),
    [pageNumber]
  );

  return (
    <Grid container className="user" direction="column">
      <Grid item xs={12}>
        {results !== null && results.data
          ? results.data.map((user) => <UserDetails user={user} />)
          : ""}
      </Grid>
      <Grid item xs={12}>
        <Pagination
          onChange={handlePageChange}
          count={totalPages}
          variant="outlined"
          color="primary"
        />
      </Grid>
    </Grid>
  );
}
