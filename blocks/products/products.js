import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';
import ProductApp from './ProductsApp.js';

export default function decorate(block) {
    const divTag = document.createElement('div');
    divTag.innerHTML = "This is added using JS"; 
    

    const config = {
        "who-is-wknd-intended-audience": "We believe the best adventures and activities are those that are accessible to everyone. WKND is designed to be inclusive of all age ranges, abilities, and budget levels. We strive to cater to the thrill-seeking adrenaline junkie BASE-jumpers as well as novices that have a spare weekend and interest in trying something new.",
        "how-does-wknd-pay-for-itself": "WKND charges a small fee for local promoters that want to sponsor their adventures and events on the WKND site. Sponsored Adventures may get sorted to more prominent positions in our Adventures listings pages.",
        "can-i-contribute-to-wknd": "Yes! If you have the expertise and experiences to share, we’ll provide the platform to spread it. As a Guest Writer, you will play an integral role in helping people find fun and cool things to do in your community.",
        "how-often-is-wkdn-updated": "WKND is updated daily to provide you with the latest in-depth articles on fun activities that we’ve recently been exploring and new adventures that are available for you to discover. Come back often to see the latest or subscribe to our social feeds.",
        "when-was-wknd-founded": "WKND was created in 2015 when our founders, Daniel and Kilian, realized that their friends and family were constantly using them as resources to find fun things to do while they were in Los Angeles. They loved sharing ideas about fun events and activities they knew of but wanted to be able to do it at a larger scale across communities. They decided to start WKND to share their insights and experiences with as many people as possible.",
        "is-a-hot-dog-a-sandwich": "While it may be described as meat between two pieces of bread, a hot dog is just a sandwich in the same way Michael Jordan was just a basketball player or William Shakespeare was just a playwright. Technically true, but vastly understated.",
        "is-wknd-a-real-company": "No. The WKND is a fictional online magazine and adventure company that focuses on outdoor activities and trips across the globe. The WKND site is designed to demonstrate functionality for Adobe Experience Manager. There is also a corresponding tutorial that walks a developer through the development. Special thanks to Lorenzo Buosi and Kilian Amendola who created the beautiful design for the WKND site."
    };

    block.textContent = '';

    return new Promise((resolve) => {
      const app = html`<${ProductApp} list=${config} resolve=${resolve} />`;
      render(app, block);
      block.append(divTag);
    });
  }