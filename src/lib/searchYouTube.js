var searchYouTube = (options, callback, details) => {
  details = details === undefined ? 'default' : details;

  if (details === 'default') {
    console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&maxResults=${options.maxResults}&q=${options.q}`);
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&maxResults=${options.maxResults}&q=${options.q}`,
      request: 'GET',
      success: function(data) {
        data = Array.isArray(data) ? data : data.items;
        console.log(data[0]);
        callback(data);
      },
      data: {status: {embeddable: true}}
    });
  } else if (details === 'statistics') {
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/videospart=statistics&id=${options.videoId}&key=${options.key}`,
      request: 'GET',
      success: function(data) {
        console.log('requesting details data', data);
        // data = Array.isArray(data) ? data : data.items;
        callback(data);
      },
      data: {status: {embeddable: true}}
    });
  }
};

window.searchYouTube = searchYouTube;
