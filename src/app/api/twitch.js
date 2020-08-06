export const auth = async () => {
    const client_id = process.env.REACT_APP_CLIENT_ID
    const redirectUri = window.location.href; 
    const auth_url = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirectUri}&response_type=token`;

    const redirectUrl = await fetch(auth_url, {
        //method: 'POST',
        cors: 'no-cors'
    })
    //const redirectUrl = await browser.identity.launchWebAuthFlow({'url': auth_url, 'interactive': showPrompt});

    const redirectRe = new RegExp(redirectUri + '[#\?](.*)');
    const matches = redirectUrl.url.match(redirectRe);
    if (matches && matches.length > 1){
        const values = parseRedirectFragment(matches[1])
        if (values.hasOwnProperty('access_token')){
            return values.access_token
        }
    }

    return null
}

function parseRedirectFragment(fragment) {
    var pairs = fragment.split(/&/);
    var values = {};

    pairs.forEach(function(pair) {
      var nameval = pair.split(/=/);
      values[nameval[0]] = nameval[1];
    });

    return values;
  }