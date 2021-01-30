/* global gapi */
// MAKE SURE TO HAVE COMMENT ABOVE OTHERWISE GAPI WILL BE UNDEFINED
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/yt-analytics.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }

//   function loadClient() {
//     return gapi.client.load("https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     // can use "channel==CHANNEL_ID" instead of "channel==MINE"
//     return gapi.client.youtubeAnalytics.reports.query({
//       // figure out what "sort" does? I am not sure if I saw it in the documentation
//       // "sort": "day"

//       // DATA MODEL INFO LINK = https://developers.google.com/youtube/analytics/data_model 

//       // Setting Channel
//       "ids": "channel==MINE",
//       // Metrics: are individual measurements related to user activity, ad performance, or estimated revenue. User activity metrics include things like video view counts and ratings (likes and dislikes)
//       "metrics": "views,comments,likes,dislikes,estimatedMinutesWatched,averageViewDuration,annotationClicks,averageViewPercentage,cardClickRate,cardClicks,cardImpressions,shares,subscribersGained,subscribersLost",
//       // Dimensions: are common criteria that are used to aggregate data, such as the date on which an action occurred or the country where the users were located. In a report, each row of data has a unique combination of dimension values. As such, the dimensions you choose for a report determine how YouTube calculates the values for the metrics report. Basically, Dimension parameters explain how the metrics will be group
//       "dimensions": "month",
//       // Filters: parameter explains how the report data will be filtered. So, for example, instead of returning all of the data for a channel, a report could be filtered to only contain metrics for a certain country, video, or group of videos.
//       "filters": "country==US",
//       // Example start and end date
//       "startDate": "2017-01-01",
//       "endDate": "2020-01-01"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response",response.result);
//                 console.log(response.result.rows[0]);
//                 console.log(response.result.columnHeaders[0].name);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: '79428108409-vpslchbsvk0g0loa9230i2emqc2orjep.apps.googleusercontent.com'});
//     // Remember to TAKE OUT above and REPLACE W/ BELOW
//     // gapi.auth2.init({client_id: 'CLIENT_ID'});
//   });  


//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//         <button onClick={authenticate}>Authorize YouTube</button>
//         <button onClick={loadClient}>Load Gapi Client</button>
//         <button onClick= {execute}>Execute API Request</button>
//     </div>
//   );
// }

// /* 
// I can also just do this above by writing...
//   "export default function App() {..."
// */
// export default App;

