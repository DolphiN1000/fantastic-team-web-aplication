console.log("Hello WebBees!");

if (module.hot) {
  module.hot.accept();
}

import "./sass/main.scss";
import "./js/main";
import "./js/btn";
// import "./js/submit-form"
// import "./js/service-worker-start"
import headerHTML from "./partials/header.html";
import heroHTML from "./partials/hero.html";
import whatWeDoHTML from "./partials/whatWeDo.html";
import ourServicesHTML from "./partials/ourServices.html";
import ourPortfolioHTML from "./partials/ourPortfolio.html";
import pricingHTML from "./partials/pricing.html";
import contactUsHTML from "./partials/contactUs.html";
import footerHTML from "./partials/footer.html";

document.getElementById("header").innerHTML = headerHTML;
document.getElementById("hero").innerHTML = heroHTML;
document.getElementById("whatWeDo").innerHTML = whatWeDoHTML;
document.getElementById("ourServices").innerHTML = ourServicesHTML;
document.getElementById("ourPortfolio").innerHTML = ourPortfolioHTML;
document.getElementById("pricing").innerHTML = pricingHTML;
document.getElementById("contactUs").innerHTML = contactUsHTML;
document.getElementById("footer").innerHTML = footerHTML;




