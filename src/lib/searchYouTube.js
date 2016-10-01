var searchYouTube = (options, callback) => {
  console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&maxResults=${options.max}&q=${options.query}`);
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&maxResults=${options.max}&q=${options.query}`,
    request: 'GET',
    success: function(data) {
      console.log('yay! youtube data called successfully');
      data = Array.isArray(data) ? data : data.items;
      callback(data);
    },
    data: {status: {embeddable: true}}
  });
};

window.searchYouTube = searchYouTube;
