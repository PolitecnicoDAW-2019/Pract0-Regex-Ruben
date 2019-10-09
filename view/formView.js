class formView {

    cacheDom = {
        usaDiv: document.getElementById('usa'),
        spainDiv: document.getElementById('spain'),
        name: document.getElementById('name'),
        last: document.getElementById('lastNames'),
        email: document.getElementById('email'),
        radio: document.getElementsByName('country'),
        dateSpain: document.getElementById('birthdaySpain'),
        dateUsa: document.getElementById('birthdayUsa'),
        addressSpain: document.getElementById('addressSpain'),
        addressUsa: document.getElementById('addressUsa'),
        PCSpain: document.getElementById('PCSpain'),
        PCUsa: document.getElementById('PCUsa'),
        landLineSpain: document.getElementById('landLineSpain'),
        landLineUsa: document.getElementById('landLineUsa'),
        phoneSpain: document.getElementById('phoneSpain'),
        phoneUsa: document.getElementById('phoneUsa'),
        form: document.getElementById('form'),
        submitButton: document.getElementById('submitButton'),
        ticksUsa: document.getElementsByName('usa'),
        ticksSpain: document.getElementsByName('spain'),
        inputSpain: document.getElementsByName('inputSpain'),
        inputUsa: document.getElementsByName('inputUsa'),
    };

    bindName = handler => this.cacheDom.name.addEventListener('keyup', handler);
    
    bindLast = handler => this.cacheDom.last.addEventListener('keyup', handler);

    bindEmail = handler => this.cacheDom.email.addEventListener('keyup', handler);

    bindRadio1 = handler => this.cacheDom.radio[0].addEventListener('change' ,handler);
    
    bindRadio2 = handler => this.cacheDom.radio[1].addEventListener('change' ,handler);

    bindDateSpain = handler => this.cacheDom.dateSpain.addEventListener('keyup', handler);

    bindDateUsa = handler => this.cacheDom.dateUsa.addEventListener('keyup', handler);

    bindAddressSpain = handler => this.cacheDom.addressSpain.addEventListener('keyup', handler);

    bindAddressUsa = handler => this.cacheDom.addressUsa.addEventListener('keyup', handler);

    bindPCSpain = handler => this.cacheDom.PCSpain.addEventListener('keyup', handler);

    bindPCUsa = handler => this.cacheDom.PCUsa.addEventListener('keyup', handler);

    bindLandLineSpain = handler => this.cacheDom.landLineSpain.addEventListener('keyup', handler);

    bindLandLineUsa = handler => this.cacheDom.landLineUsa.addEventListener('keyup', handler);

    bindPhoneSpain = handler => this.cacheDom.phoneSpain.addEventListener('keyup', handler);

    bindPhoneUsa = handler => this.cacheDom.phoneUsa.addEventListener('keyup', handler);

    bindCheckingToInputs = checkOn => {
        [ ...this.cacheDom.form.getElementsByTagName('input') ].forEach(element => element.addEventListener('keyup', () => {
            const total = [ ...this.cacheDom.form.getElementsByTagName('img') ].reduce((accumulator, current, index) => {
                
                if(current.src.includes('tick') && current.style.display == "block") {
                    return accumulator + 1;
                } else {
                    return accumulator
                }
            }, 0);

            total == 8 ? this.cacheDom.submitButton.disabled = false : this.cacheDom.submitButton.disabled = true;
        }))
    } 

}