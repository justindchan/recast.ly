var searchYouTube = (options, callback) => {
  // $.get( `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&videoEmbeddable=true&key=${options.key}`, function( data ) {
  //   // callback(data);
  // });
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`,
    type: 'GET',
    dataType: "json",
    success: function(data){
      callback(data.items)
    }
  });
};


export default searchYouTube;

// 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cat&videoEmbeddable=true&key=[YOUR_API_KEY]' \


// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }