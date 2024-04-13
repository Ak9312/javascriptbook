console.log(document.cookie);
function readCookieValue(cookieName) {
    value = false;
    let cookieArray = document.cookie.split(";");
    cookieArray.forEach((cookie) => {
      let cook = cookie.split("=");
      if (cook[0] == cookieName) {
        value = cook[1];
      }
    });
    return value;
  }
readCookieValue("testCookie1");
readCookieValue("testCookie2");

function cookie(cookieName, cookieValue, days) {
  if (days > 0) {
    var currentDate = new Date();
    var expDate = currentDate.getTime() + days * 24 * 60 * 60 * 1000;
    currentDate.setTime(expDate);
    const expDataUTC = currentDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + expDate + "="  + expDataUTC +  ";path=/";
  }
}

function createTestCookie() {
  cookie("testCookie1", "value1", 7);
  cookie("testCookie2", "value1", 25);
}

createTestCookie();



function deleteCookie(cookieName) {
    cookie(cookieName,"",-1)
}


deleteCookie("testCookie1")


