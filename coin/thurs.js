const API_KEY = "c0c0d4f7-e6e1-496e-b236-12de4caa4266";
const baseURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency";
let coinName = "BTC"
let path = "/listings/latest";
let exampleParams = "?start=1&limit=100&convert=USD";
let exampleParams = `?fysm=${coinName}$tsym=USD`
const authorizationParam = `&CMC_PRO_API_KEY=${API_KEY}`;
const cryptoURL = baseURL+path+exampleParams+authorizationParam;

const getData = async () => {
  try {
    let url = baseURL+path+exampleParams+authorizationParam;
    let reponse = await fetch(url);
    let { data } = await response.json();
    return data.data;
  } catch (error) {
    console.log("ERROR : getData", error);
  }
};

// async function getCryptoPrices() {
//   const response = await fetch(cryptoURL);
//   const json = await response.json();
//   const coin = json.data[0];

//   console.log(coin);
// }


//const response = await fetch(cryptoURL);
//   const json = await response.json();
//   const coin = json.data[0];

// getData();

const main = async () => {
  // get data
  const data = await getData();

  console.log(data);
  const times = data.map((el, index) => index);
  console.log(times);
  const prices = data.map((el) => el.close)

  let chartData = {
    times, 
    datasetName,
    prices,
  };
  renderChart(chartData);
};

main();

let elementNameArray = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
let elementValueArray = [5, 29, 10, -6, 30, 13];
let datasetName = "# of Votes";
let days = ["day1"];

function renderLineGraph(times, prices, datasetName) {
  const ctx = document.getElementById("myChart");
  const price = coin.quote.USD.price;
  const [ninetyAgoPrice] = getHistoricPrices(coin.quote.USD);
  const timeAgo = ["90d", "60d", "30d", "7d", "24h", "1h", "Current"];
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: times,
      datasets: [
        {
          label: datasetName,
          data: 
          borderWidth: 1,
          data: getHistoricPrices(coin.quote.USD),
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    },
    options: {
      tooltips: {
        enabled: true,
        mode: "nearest",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              suggestedMax: price,
              suggestedMin: ninetyAgoPrice,
            },
          },
        ],
      },
    },
  });
}

// let ctx = document.getElementById("myChart");
// ctx.getContext("2d");
// let myChart = new Chart(ctx, {
//   type: "bar", //type of chart
//   data: { //data setting object, data.label is the name of each element
//       labels: datasetName,
//       datasets: [
//         {
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       },
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//     }
//     ],
//   }, // data setting object
//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });

// async function getCryptoPrices() {
//   const response = await fetch(cryptoURL);
//   const json = await response.json();
//   const coin = json.data[0];

//   console.log(coin);
// }

// getCryptoPrices();

// // const coin = {
// //   id: 1,
// //   name: "Bitcoin",
// //   symbol: "BTC",
// //   slug: "bitcoin",
// //   num_market_pairs: 9852,
// //   date_added: "2013-04-28T00:00:00.000Z",
// //   tags: [
// //     "mineable",
// //     "pow",
// //     "sha-256",
// //     "store-of-value",
// //     "state-channels",
// //     "coinbase-ventures-portfolio",
// //     "three-arrows-capital-portfolio",
// //     "polychain-capital-portfolio",
// //   ],
// //   max_supply: 21000000,
// //   circulating_supply: 18651531,
// //   total_supply: 18651531,
// //   platform: null,
// //   cmc_rank: 1,
// //   last_updated: "2021-03-12T07:22:02.000Z",
// //   quote: {
// //     USD: {
// //       price: 56772.22509134523,
// //       volume_24h: 56146078171.69906,
// //       percent_change_1h: 0.45440337,
// //       percent_change_24h: 2.1565927,
// //       percent_change_7d: 20.01380942,
// //       percent_change_30d: 22.3897859,
// //       percent_change_60d: 67.00783825,
// //       percent_change_90d: 209.20232707,
// //       market_cap: 1058888916230.2034,
// //       last_updated: "2021-03-12T07:22:02.000Z",
// //     },
// //   },
// // };

// //const coin = {"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":4940,"date_added":"2015-08-07T00:00:00.000Z","tags":["mineable","pow","smart-contracts","ethereum","binance-smart-chain","coinbase-ventures-portfolio","three-arrows-capital-portfolio","polychain-capital-portfolio","binance-labs-portfolio","arrington-xrp-capital","blockchain-capital-portfolio","boostvc-portfolio","cms-holdings-portfolio","dcg-portfolio","dragonfly-capital-portfolio","electric-capital-portfolio","fabric-ventures-portfolio","framework-ventures","hashkey-capital-portfolio","kinetic-capital","huobi-capital","alameda-research-portfolio","a16z-portfolio","1confirmation-portfolio","winklevoss-capital","usv-portfolio","placeholder-ventures-portfolio","pantera-capital-portfolio","multicoin-capital-portfolio","paradigm-xzy-screener"],"max_supply":null,"circulating_supply":117920700.124,"total_supply":117920700.124,"platform":null,"cmc_rank":2,"last_updated":"2021-10-14T08:11:02.000Z","quote":{"USD":{"price":3633.1547318189423,"volume_24h":16831123450.375696,"volume_change_24h":-4.5881,"percent_change_1h":0.09183985,"percent_change_24h":5.3878992,"percent_change_7d":0.80669815,"percent_change_30d":9.64352293,"percent_change_60d":14.4624176,"percent_change_90d":91.79254591,"market_cap":428424149634.91315,"market_cap_dominance":18.0781,"fully_diluted_market_cap":428424149634.91,"last_updated":"2021-10-14T08:11:02.000Z"}}}

// const coin = {"id":1839,"name":"Binance Coin","symbol":"BNB","slug":"binance-coin","num_market_pairs":536,"date_added":"2017-07-25T00:00:00.000Z","tags":["marketplace","centralized-exchange","payments","binance-smart-chain","alameda-research-portfolio","multicoin-capital-portfolio"],"max_supply":168137036,"circulating_supply":168137036,"total_supply":168137036,"platform":null,"cmc_rank":3,"last_updated":"2021-10-14T08:10:08.000Z","quote":{"USD":{"price":476.72720880649916,"volume_24h":3689061342.2732205,"volume_change_24h":-27.0198,"percent_change_1h":-0.06667933,"percent_change_24h":2.88834531,"percent_change_7d":7.18579948,"percent_change_30d":18.27965387,"percent_change_60d":19.10101304,"percent_change_90d":53.93758386,"market_cap":80155499869.27786,"market_cap_dominance":3.3823,"fully_diluted_market_cap":80155499869.28,"last_updated":"2021-10-14T08:10:08.000Z"}}}

// //const coin = {"id":825,"name":"Tether","symbol":"USDT","slug":"tether","num_market_pairs":18815,"date_added":"2015-02-25T00:00:00.000Z","tags":["payments","stablecoin","stablecoin-asset-backed","binance-smart-chain","avalanche-ecosystem","solana-ecosystem"],"max_supply":null,"circulating_supply":68799070064.3408,"total_supply":71385677464.96931,"platform":{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","token_address":"0xdac17f958d2ee523a2206206994597c13d831ec7"},"cmc_rank":5,"last_updated":"2021-10-14T08:10:08.000Z","quote":{"USD":{"price":1.00009226856998,"volume_24h":75838716408.4551,"volume_change_24h":0.8378,"percent_change_1h":0.0084597,"percent_change_24h":-0.04455973,"percent_change_7d":-0.01402467,"percent_change_30d":-0.03048961,"percent_change_60d":-0.0470242,"percent_change_90d":-0.00996808,"market_cap":68805418056.1516,"market_cap_dominance":2.9034,"fully_diluted_market_cap":71392264119.35,"last_updated":"2021-10-14T08:10:08.000Z"}}}

// //const coin = {"id":2010,"name":"Cardano","symbol":"ADA","slug":"cardano","num_market_pairs":306,"date_added":"2017-10-01T00:00:00.000Z","tags":["mineable","dpos","pos","platform","research","smart-contracts","staking","binance-smart-chain"],"max_supply":45000000000,"circulating_supply":32899071908.17,"total_supply":33250650235.236,"platform":null,"cmc_rank":4,"last_updated":"2021-10-14T08:10:10.000Z","quote":{"USD":{"price":2.17013750776588,"volume_24h":2612417157.3538814,"volume_change_24h":-25.0078,"percent_change_1h":-0.46210213,"percent_change_24h":2.85452549,"percent_change_7d":-4.65473406,"percent_change_30d":-9.84719231,"percent_change_60d":2.8596872,"percent_change_90d":80.37836286,"market_cap":71395509918.6065,"market_cap_dominance":3.0127,"fully_diluted_market_cap":97656187849.46,"last_updated":"2021-10-14T08:10:10.000Z"}}}

// function getHistoricPrices(prices) {
//   const {
//     percent_change_90d,
//     percent_change_60d,
//     percent_change_30d,
//     percent_change_7d,
//     percent_change_24h,
//     percent_change_1h,
//     price,
//   } = prices;

//   const ninetyAgoPrice = calculatePriceFromPercentageChange(
//     price,
//     percent_change_90d
//   );
//   const sixtyAgoPrice = calculatePriceFromPercentageChange(
//     price,
//     percent_change_60d
//   );
//   const thirtyAgoPrice = calculatePriceFromPercentageChange(
//     price,
//     percent_change_30d
//   );
//   const sevenAgoPrice = calculatePriceFromPercentageChange(
//     price,
//     percent_change_7d
//   );
//   const dayAgoPrice = calculatePriceFromPercentageChange(
//     price,
//     percent_change_24h
//   );
//   const hourAgoPrice = calculatePriceFromPercentageChange(
//     price,
//     percent_change_1h
//   );

//   return [
//     ninetyAgoPrice,
//     sixtyAgoPrice,
//     thirtyAgoPrice,
//     sevenAgoPrice,
//     dayAgoPrice,
//     hourAgoPrice,
//     price,
//   ];
// }

// function calculatePriceFromPercentageChange(currentPrice, percentageChange) {
//   let denominator;
//   let historicPrice;
//   if (percentageChange >= 100) {
//     percentageChange = percentageChange + 100;
//     denominator = percentageChange * 0.01;
//     historicPrice = currentPrice / denominator;
//   }

//   if (percentageChange < 100 && percentageChange > 0) {
//     denominator = 1 + percentageChange / 100;
//     historicPrice = currentPrice / denominator;
//   }

//   if (percentageChange < 0) {
//     const original = (currentPrice / (100 + percentageChange)) * 100;
//     historicPrice = original;
//   }
//   return historicPrice;
// }

// const ctx = document.getElementById("myChart");
// let myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: ["90d", "60d", "30d", "7d", "24h", "1h", "Current"],
//     datasets: [
//       {
//         label: "Price",
//         borderWidth: 1,
//         borderColor: "rgba(255, 99, 132, 1)",
//         data: getHistoricPrices(coin.quote.USD),
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//       },
//     ],
//   },
// });