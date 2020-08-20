let searchPhotos = () => {
    let query = document.getElementById('search').value;
    let clientId = "498e8b1defac8fbf3a07285502bfbd2e2035e700774afc8cd0217b6b3aa6c2b9";
    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=flower";// + query;

    // Делаем запрос в API

    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);

            data.results.forEach(photo => {
                let result = `
                    <div class="card">
                        <a href="${photo.urls.full}" target="_blank">
                            <img src="${photo.urls.thumb}" alt="${photo.alt_description}" />
                        </a>
                        <div class="desc">${photo.alt_description}</div>
                        <div class="likes">Likes: ${photo.likes}</div>
                    </div>
                `;

                document.getElementById("result").insertAdjacentHTML('afterbegin', result);
            })
        });
}
searchPhotos() // убрать