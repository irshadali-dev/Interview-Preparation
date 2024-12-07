let api = fetch("https://jsonplaceholder.typicode.com/users");

api
  .then((res) => {
    let response = res.json();
    // console.log(response);

    return response;
  })
  .then((data) => {
    console.log(data);

    const heading = document.querySelector("#heading");

    const headingsHTML = data.map((post) => `<h1>${post.name}</h1>`).join("");

    heading.innerHTML = headingsHTML;
    console.log((heading.append.textContent = headingsHTML));

    const subHeading = document.querySelector("#subHeading");

    const subHeadingHTML = data.map((post) => `<h3>${post.username}</h3>`);

    subHeading.innerHTML = subHeadingHTML;
    // console.log(headingsHTML);
  })
  .catch((error) => {
    console.log(error);
  });
