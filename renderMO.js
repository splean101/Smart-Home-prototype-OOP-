// rendering MicroWave Owen---------------------------------------------------------
//console.log(new MicrowaveOven(model));
import {myHouse} from './index.js'
import {MicrowaveOven} from './microwave.js';
export function renderMO(model) { //by Max
    var mo = new MicrowaveOven(model); //by Max
    myHouse.addMO(mo);
    //var count = myHouse._mo.length - 1;

    var moDiv = document.createElement('div');
    moDiv.id = 'mo';

    var label1 = document.createElement('label');
    label1.id = 'model';
    label1.innerText = 'Model';

    var model = document.createElement('input');
    model.type = 'text';
    model.placeholder = 'Enter the model of Microwave Owen';
    model.value = mo.Model();
    model.addEventListener('submit', function () {
        mo.Model(model.value);
    });

    var state = document.createElement('div');
    state.innerText = mo.getState();

    var onBtn = document.createElement('button');
    onBtn.type = 'button';
    onBtn.innerText = 'On';
    onBtn.addEventListener('click', function () {
        mo.on();
        return state.innerText = mo.getState();
    });

    var offBtn = document.createElement('button');
    offBtn.type = 'button';
    offBtn.innerText = 'Off';
    offBtn.addEventListener('click', function () {
        mo.off();
        return state.innerText = mo.getState();
    });

    var p = document.createElement('p');
    p.id = 'power';
    p.innerText = 'Power';

    var power = document.createElement('b');
    power.innerText = mo._power;

    var increasePower = document.createElement('button');
    increasePower.type = 'button';
    increasePower.value = '+';
    increasePower.addEventListener('click', function () {
        mo.increasePower();
        return power.innerText = mo._power;
    });

    var decreasePower = document.createElement('button');
    decreasePower.type = 'button';
    decreasePower.value = '-';
    decreasePower.addEventListener('click', function () {
        mo.decreasePower();
        return power.innerText = mo._power;
    });
    console.log(mo);
    moDiv.appendChild(label1);
    moDiv.appendChild(model);
    moDiv.appendChild(state);
    moDiv.appendChild(onBtn);
    moDiv.appendChild(offBtn);
    moDiv.appendChild(p);
    moDiv.appendChild(power);
    moDiv.appendChild(increasePower);
    moDiv.appendChild(decreasePower);
    document.getElementById('home').appendChild(moDiv);

};
//renderHouse(myHouse);