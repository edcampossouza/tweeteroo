let tweets = [];
let users = [];

function signUp(user) {
  if (!user) {
    console.log("signup nenhum dado enviado");
    return { code: 400, message: "Todos os campos são obrigatórios!" };
  }
  const { username, avatar } = user;
  if (!username || !avatar) {
    console.log("signup dados incorretos");
    return { code: 400, message: "Todos os campos são obrigatórios!" };
  }
  users.push({ username, avatar });
  console.log("signup depois da insercao", users);
  return { code: 201, message: "OK" };
}

function postTweet(data) {
  if (!data) {
    console.log("pottweet nenhum dado enviado");
    return "UNAUTHORIZED";
  }
  const { username, tweet } = data;
  if (!username || !tweet) {
    console.log("pottweet dados incorretos");
    return "UNAUTHORIZED";
  }
  const user = users.find((u) => u.username === username);
  if (!user) {
    return "UNAUTHORIZED";
  }
  const avatar = user ? user.avatar : "";
  tweets = [{ username, tweet, avatar }, ...tweets];
  return "OK";
}

function getTweets() {
  console.log("tweets", tweets);
  return tweets.slice(0, 10);
}

export { signUp, postTweet, getTweets };
