export const getMembersData = (githubNames) => {
  return Promise.all(
    githubNames.map(async (githubName) => {
      return (await fetch(`https://api.github.com/users/${githubName}`)).json();
    })
  );
};
