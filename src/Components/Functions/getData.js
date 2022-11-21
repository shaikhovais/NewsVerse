import axios from "axios";
import addData from "./addData";

export default async function getData(
  type,
  category,
  query,
  pageNumber,
  setData,
  setNoResult,
  country
) {

  let mktParam;
  if(country === 'jp') {
    mktParam = 'ja-jp'
  } else if(country === 'cn') {
    mktParam = 'zh-cn'
  } else {
    mktParam = `en-${country}`;
  }

  const options = {
    method: "GET",
    url: `https://bing-news-search1.p.rapidapi.com/news${type}`,
    params: {
      category: category === 'Science & Technology' ? 'ScienceAndTechnology' : category,
      cc: "US",
      count: 10,
      mkt: mktParam,
      safeSearch: "Off",
      textFormat: "Raw",
      q: query,
      offset: pageNumber * 5
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": 'a9c427199cmsha71aa90cedb48c6p1e082djsn1c33046be9e0',
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(async function (response) {
        console.log(options);
        response = response.data.value;
        if(response.length <= 1) {
          setNoResult(true);
          return;
        }
        let tempData = [];
        await response.forEach((element) => {
          tempData.push({ id: element.datePublished, article: element });
        });
        // addData function will make sure that no same article is added twice
        await setData((prevData) => addData(prevData, tempData));
        if(category !== "") {
          setNoResult(true);
        }
      }
    )
    .catch(function (error) {
      if(error.response.status === 429) {
        document.write('Monthly limit of API is crossed. Please connect to me on https://www.linkedin.com/in/ovais-shaikh-701878212/ to show you this website or you can try again on 1st of next month. ')
      } else {
        console.log(error);
      }
    });
  //
  // 
}
