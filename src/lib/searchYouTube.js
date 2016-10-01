var searchYouTube = (options, callback) => {
  console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&max=${options.max}&query=${options.query}`);
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&max=${options.max}&query=${options.query}`,
    request: 'GET',
    success: function(data) {
      console.log('yay! youtube data called successfully');
      callback(data.items);
    },
    data: {status: {embeddable: true}}
  });
};

window.searchYouTube = searchYouTube;
