let tweets = [];
const users = [];

function signUp(user) {
  if (!user) {
    return { code: 400, message: "Todos os campos são obrigatórios!" };
  }
  const { username, avatar } = user;
  if (
    !username ||
    !avatar ||
    typeof username !== "string" ||
    typeof avatar !== "string"
  ) {
    return { code: 400, message: "Todos os campos são obrigatórios!" };
  }
  users.push({ username, avatar });
  return { code: 201, message: "OK" };
}

function postTweet(data) {
  if (!data) {
    return { code: 400, message: "UNAUTHORIZED" };
  }
  const { username, tweet } = data;
  if (!username || !tweet || typeof tweet !== "string") {
    return { code: 400, message: "UNAUTHORIZED" };
  }
  const user = users.find((u) => u.username === username);
  if (!user) {
    return { code: 400, message: "UNAUTHORIZED" };
  }
  const avatar = user ? user.avatar : "";
  tweets = [{ username, tweet, avatar }, ...tweets];
  return { code: 201, message: "OK" };
}

function getTweets(page) {
  let intPage = 1;
  if (page) {
    intPage = parseInt(page);
    if (isNaN(intPage) || intPage < 1) {
      return { code: 400, data: "Informe uma página válida!" };
    }
  }
  return { code: 200, data: tweets.slice((intPage - 1) * 10, 10 * intPage) };
}

function getTweetsFromUser(username, page) {
  let intPage = 1;
  if (page) {
    intPage = parseInt(page);
    if (isNaN(intPage) || intPage < 1) {
      return { code: 400, data: "Informe uma página válida!" };
    }
  }
  const data = tweets
    .filter((u) => u.username === username)
    .slice((intPage - 1) * 10, 10 * intPage);
  return { code: 200, data };
}

export { signUp, postTweet, getTweets, getTweetsFromUser };
