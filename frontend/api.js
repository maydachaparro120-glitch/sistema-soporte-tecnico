import axios from "axios";

axios.get("http://localhost:3000/tickets")
  .then(response => {
    console.log(response.data);
  });
