import {Home} from './home.js';
import {renderHouse} from './renderHouse.js'

export var myHouse = new Home('Vitalii', 'Kharkiv');
renderHouse(myHouse);
console.log(myHouse);