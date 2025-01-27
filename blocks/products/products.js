import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';


export default function decorate(block) {
    const divTag = document.createElement('div');
    divTag.innerHTML = "This is added using JS"; 
    
    block.append(divTag);
  }