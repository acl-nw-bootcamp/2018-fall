const getRepos = () => {
  $.getJSON('https://api.github.com/users/acl-nw-bootcamp/repos')
    .then(data => {
      const repos = data.map(repo => $('<li>').append($('<a>').text(repo.name).attr('href',repo.html_url)));
      $('#repo-list').append(repos);
    });
}
