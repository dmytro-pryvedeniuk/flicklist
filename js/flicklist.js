(function() {

    var api = {
        root: "https://api.themoviedb.org/3",
        token: "047e4a4b47e76df08b73db22d719eba6",
        uriBase: "https://image.tmdb.org/t/p/w500"
    }

    function testTheAPI() {
        $.ajax({
            url: api.root + "/discover/movie",
            data: {
                api_key: api.token
            },
            success: buildList
        });
    }

    function getImage()
    {

    }
    
    function buildList(response) {
        console.log("There is response from The Movie DB!")
        console.log(response);
        const container = $("#container");
        
        for (let i in response.results)
        {
            let video = response.results[i];
            container.append(`
                <div class="poster">
                    <img src="${api.uriBase + video.poster_path}"</img>
                    <p>${video.title} (${video.vote_average})</p>
                </div>`)
        }
    }

    testTheAPI();
}());
