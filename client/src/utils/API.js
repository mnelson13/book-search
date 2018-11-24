import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY || process.env.GOOGLE_API_KEY;
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=" + KEY;

export default {
  search: function(query){
    return axios.get(BASEURL + query + APIKEY);
  },
  getBooks: function(){
      return axios.get("/api/books")
  },
  saveBook: function(bookData){
      return axios.post("/api/books", bookData);
  },
  deleteBook: function(id){
      return axios.delete("/api/books/" + id);
  }

};