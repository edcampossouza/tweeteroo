let tweets = [];
let users = [];

function signUp(user) {
  if (!user) {
    console.log("signup nenhum dado enviado");
    return { code: 400, message: "Todos os campos são obrigatórios!" };
  }
  const { username, avatar } = user;
  if (
    !username ||
    !avatar ||
    typeof username !== "string" ||
    typeof avatar !== "string"
  ) {
    console.log("signup dados incorretos");
    return { code: 400, message: "Todos os campos são obrigatórios!" };
  }
  users.push({ username, avatar });
  console.log("signup depois da insercao", users);
  return { code: 201, message: "OK" };
}

function postTweet(data) {
  console.log('data', data);
  if (!data) {
    console.log("pottweet nenhum dado enviado");
    return { code: 400, message: "UNAUTHORIZED" };
  }
  const { username, tweet } = data;
  if (!username || !tweet) {
    console.log("pottweet dados incorretos");
    return { code: 400, message: "UNAUTHORIZED" };
  }
  const user = users.find((u) => u.username === username);
  if (!user) {
    return { code: 400, message: "UNAUTHORIZED" };
  }
  const avatar = user ? user.avatar : "";
  tweets = [{ username, tweet, avatar }, ...tweets];
  return { code: 200, message: "OK" };
}

function getTweets() {
  console.log("tweets", tweets);
  return { code: 200, data: tweets.slice(0, 10) };
}

function getTweetsFromUser(username) {
  console.log(`tweets from ${username}`);
  const data = tweets.filter((u) => u.username === username).slice(0, 10);
  console.log(data);
  return { code: 200, data };
}

export { signUp, postTweet, getTweets, getTweetsFromUser };
