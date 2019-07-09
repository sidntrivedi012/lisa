const Octokit = require("@octokit/rest");
const octokit = new Octokit();
var fs = require("fs");
var repos = [];
var res = {};

function getLeaderboard() {
  octokit.repos.listForOrg({ org: "osdc" }).then(repos => {
    repos.data.forEach(({ name }) => {
      octokit.repos.listCommits({ owner: "osdc", repo: name }).then(commits => {
        commits.data.forEach(commit => {
          const { committer, author } = commit;
          console.log(author);
        });
      });
    });
  });
}
getLeaderboard();