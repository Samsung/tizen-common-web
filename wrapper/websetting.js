const { websetting } = window.tizen;

const { setUserAgentString, removeAllCookies } = websetting;

module.exports = {
    setUserAgentString,
    removeAllCookies
};
