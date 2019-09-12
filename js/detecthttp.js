// If domain is HTTP
var site = window.location;
site = site.toString();
if (site.substring(0, 7) === "http://") {
  window.location.href = "https://" + site.substring(7, site.length);
}