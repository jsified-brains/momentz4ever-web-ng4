
(<any>window).fbAsyncInit = ()=> {
    FB.init({
      appId            : '485206825204602',
      //autoLogAppEvents : true,
      xfbml            : false,
      version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
