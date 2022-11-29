import axios from "axios";

export const getQuotes = async (func:any) => {
  try {
    const response = await axios.get("https://api.quotable.io/random/");
    const {content,author} = response.data
    func({content:content,author:author})
} catch (err: any) {
    console.log(err);
  }
};
