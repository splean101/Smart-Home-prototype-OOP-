import {MicrowaveOven} from './microwave.js';
import {renderMO} from './renderMO.js';

export function renderHouse(h) {
    var fieldset = document.createElement('fieldset');
    var legend = document.createElement('legend');
    legend.innerHTML = '<h2> Smart Home</h2>';


    var owner = document.createElement('form');
    owner.id = 'owner';

    var ownerLabel = document.createElement('label');
    ownerLabel.innerText = 'Owner';

    var ownerInput = document.createElement('input');
    ownerInput.type = 'text';
    ownerInput.name = 'ownerInput';
    ownerInput.value = h.Owner();

    var ownerSubmit = document.createElement('input');
    ownerSubmit.type = 'submit';
    ownerInput.name = 'ownerSubmit';
    ownerSubmit.value = 'Change';
    ownerSubmit.addEventListener('click', function () {
        h.Owner(ownerInput.value);
    });

    owner.appendChild(ownerLabel);
    owner.appendChild(ownerInput);
    owner.appendChild(ownerSubmit);


    var adress = document.createElement('form');
    adress.id = 'adress';

    var adressLabel = document.createElement('label');
    adressLabel.innerText = 'Adress';

    var adressInput = document.createElement('input');
    adressInput.type = 'text';
    adressInput.name = 'adressInput';
    adressInput.value = h.Adress();

    var adressSubmit = document.createElement('input');
    adressSubmit.type = 'submit';
    adressInput.name = 'adressSubmit';
    adressSubmit.value = 'Change';
    adressSubmit.addEventListener('click', function () {
        h.Adress(adressInput.value);
    });

    adress.appendChild(adressLabel);
    adress.appendChild(adressInput);
    adress.appendChild(adressSubmit);


    var addDevice = document.createElement('form');
    addDevice.id = 'addDevice';

    var addDeviceLabel = document.createElement('label');
    addDeviceLabel.innerText = 'Choose Device';

    var addDeviceInput = document.createElement('select');
    addDeviceInput.id = 'addDeviceInput';

    var airOption = document.createElement('option');
    airOption.value = 'Air Conditioner';
    airOption.innerText = 'Air Conditioner';

    var tvOption = document.createElement('option');
    tvOption.value = 'TV';
    tvOption.innerText = 'TV';

    var moOption = document.createElement('option');
    moOption.value = 'Microwave Owen';
    moOption.innerText = 'Microwave Owen';

    var deviceSubmit = document.createElement('input');
    deviceSubmit.type = 'submit';
    deviceSubmit.name = 'deviceSubmit';
    deviceSubmit.value = 'Add Device';
    deviceSubmit.addEventListener('click', function () {
        var model = prompt('Enter the device`s model', '');
        switch (addDeviceInput.value) {
            case 'Air Conditioner':
                h.addConditioner(new AirConditioner);
                renderAir(model);
            case 'TV':
                h.addTV(new TvSet);//h.addTV(new TvSet);
                renderTv(model);
            case 'Microwave Owen':
                h.addMO(new MicrowaveOven);
                renderMO(model);
        };
    });

    addDeviceInput.appendChild(moOption);
    addDeviceInput.appendChild(airOption);
    addDeviceInput.appendChild(tvOption);

    addDevice.appendChild(addDeviceLabel);
    addDevice.appendChild(addDeviceInput);
    addDevice.appendChild(addDeviceInput);
    addDevice.appendChild(deviceSubmit);


    document.getElementById('home').appendChild(fieldset);
    var field = document.getElementsByTagName('fieldset')[0];
    field.appendChild(legend);
    field.appendChild(owner);
    field.appendChild(adress);
    field.appendChild(addDevice);

};