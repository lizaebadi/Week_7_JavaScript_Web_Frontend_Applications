class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const fullName = document.querySelector('#repo-name');
    fullName.textContent = repoData.full_name;

    const descriptionName = document.querySelector('#repo-description');
    descriptionName.textContent = repoData.description; 

    const avatar = document.querySelector('#image');
    avatar.src = repoData.organization.avatar_url;
      
  }
}

module.exports = GithubView;