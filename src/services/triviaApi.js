import fetchApi from "./fetchApi";

const getToken = () => {
    const token = localStorage.getItem("sessionToken");

    // Checking if the token exists. If it does, I retrieve the previously credited time from it and calculate if 5.5h has passed. If so, I return null to generate a new token.
    const currentTime = new Date().getTime();
    const timeStamp = !token ? 0 : parseInt(token.split("___")[1]);
    const timeElapsed = currentTime - timeStamp;

    if (timeElapsed > 21300000) {
        localStorage.removeItem("sessionToken");
        return null;
    }

    return token.split("___")[0];
};

const fetchNewToken = async () => {
    const tokenData = await fetchApi(
        "https://opentdb.com/api_token.php?command=request"
    );

    // The API token expires after 6h. I add the current time to it to later calculate how much time has passed.
    const tokenTime = new Date().getTime();
    const newToken = tokenData.token + "___" + tokenTime;

    localStorage.setItem("sessionToken", newToken);
    return newToken;
};

const getSessionToken = async (resetToken = false) => {
    let token = resetToken ? null : getToken();

    if (!token) {
        token = await fetchNewToken();
    }

    return token;
};

export default getSessionToken;
