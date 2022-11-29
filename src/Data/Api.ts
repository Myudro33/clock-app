import axios from "axios";

export const getQuotes = async (func: any) => {
  try {
    const response = await axios.get("https://api.quotable.io/random/");
    const { content, author } = response.data;
    func({ content: content, author: author });
  } catch (err: any) {
    console.log(err);
  }
};
export const getIpBase = async (settimeZone: any) => {
  try {
    const response = await axios.get(
      "https://api.ipbase.com/v2/info?apikey=apoytKhyGRZShUYd0uFevUN3JaDqHlKOFRAkR86y&ip=1.1.1.1"
    );
    settimeZone(response.data.data.timezone.id);
  } catch (err: any) {
    console.log(err);
  }
};


export const getWorldTime = async (timezone:string)=>{
  try{
  const response = await axios.get(`http://worldtimeapi.org/api/ip/${timezone}`)
  console.log(response);
  
  }catch(err:any){
    console.log(err);
    
  }
}