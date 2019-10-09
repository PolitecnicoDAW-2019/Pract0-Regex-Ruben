class formController {
    constructor(_view, _service) {
        this.view = _view;
        this.service = _service;

        this.view.bindName(this.handleName);
        this.view.bindLast(this.handleLast);
        this.view.bindEmail(this.handleEmail);
        this.view.bindRadio1(this.handleRadio1);
        this.view.bindRadio2(this.handleRadio2);
        this.view.bindDateSpain(this.handleDateSpain);
        this.view.bindDateUsa(this.handleDateUsa);
        this.view.bindAddressSpain(this.handleAddressSpain);
        this.view.bindAddressUsa(this.handleAddressUsa);
        this.view.bindPCSpain(this.handlePCSpain);
        this.view.bindPCUsa(this.handlePCUsa);
        this.view.bindLandLineSpain(this.handleLandLineSpain);
        this.view.bindLandLineUsa(this.handleLandLineUsa);
        this.view.bindPhoneSpain(this.handlePhoneSpain);
        this.view.bindPhoneUsa(this.handlePhoneUsa);
        this.view.bindCheckingToInputs();
    }

    ChangeStatus(input, status){
        const redX= input.nextElementSibling
        if(status){
            redX.style.display = "none";
            redX.nextElementSibling.style.display = "block";
        } else {
            redX.style.display = "block";
            redX.nextElementSibling.style.display="none";
        }
    }

    changeCountry(input, status) {
        const usa = this.view.cacheDom.usaDiv;
        const spain = this.view.cacheDom.spainDiv;
        const ticksSpain = this.view.cacheDom.ticksSpain;
        const ticksUsa = this.view.cacheDom.ticksUsa;
        const inputUsa = this.view.cacheDom.inputUsa;
        const inputSpain = this.view.cacheDom.inputSpain;
        this.view.cacheDom.submitButton.disabled = true;
        if (status && input.value === 'spain') {
            spain.style.display = "block";
            usa.style.display = "none";
            ticksUsa.forEach(element => element.style.display = "none");
            inputUsa.forEach(element => element.value = "");            
        } else if (status && input.value === 'usa') {
            spain.style.display = "none";
            usa.style.display = "block";
            ticksSpain.forEach(element => element.style.display = "none");
            inputSpain.forEach(element => element.value = "");            
        }
    }

    handleName = () => {
        let status = this.service.validateName(this.view.cacheDom.name.value);
        this.ChangeStatus(this.view.cacheDom.name, status);
    } 

    handleLast = () => {
        let status = this.service.validateLast(this.view.cacheDom.last.value);
        this.ChangeStatus(this.view.cacheDom.last, status);
    } 

    handleEmail = () => {
        let status = this.service.validateEmail(this.view.cacheDom.email.value);
        this.ChangeStatus(this.view.cacheDom.email, status);
    } 

    handleRadio1 = () => {
        let status = this.service.validateRadio(this.view.cacheDom.radio[0]);
        this.changeCountry(this.view.cacheDom.radio[0], status);
    }

    handleRadio2 = () => {
        let status = this.service.validateRadio(this.view.cacheDom.radio[1]);
        this.changeCountry(this.view.cacheDom.radio[1], status);
    }

    handleDateSpain = () => {
        let status = this.service.validateDateSpain(this.view.cacheDom.dateSpain.value);
        this.ChangeStatus(this.view.cacheDom.dateSpain, status);
    }

    handleDateUsa = () => {
        let status = this.service.validateDateUsa(this.view.cacheDom.dateUsa.value);
        this.ChangeStatus(this.view.cacheDom.dateUsa, status);
    }

    handleAddressSpain = () => {
        let status = this.service.validateAddress(this.view.cacheDom.addressSpain.value);
        this.ChangeStatus(this.view.cacheDom.addressSpain, status);
    }

    handleAddressUsa = () => {
        let status = this.service.validateAddress(this.view.cacheDom.addressUsa.value);
        this.ChangeStatus(this.view.cacheDom.addressUsa, status);
    }

    handlePCSpain = () => {
        let status = this.service.validatePCSpain(this.view.cacheDom.PCSpain.value);
        this.ChangeStatus(this.view.cacheDom.PCSpain, status);
    }

    handlePCUsa = () => {
        let status = this.service.validatePCUsa(this.view.cacheDom.PCUsa.value);
        this.ChangeStatus(this.view.cacheDom.PCUsa, status);
    }

    handleLandLineSpain = () => {
        let status = this.service.validateLandLineSpain(this.view.cacheDom.landLineSpain.value);
        this.ChangeStatus(this.view.cacheDom.landLineSpain, status);
    }

    handleLandLineUsa = () => {
        let status = this.service.validateLandLineUsa(this.view.cacheDom.landLineUsa.value);
        this.ChangeStatus(this.view.cacheDom.landLineUsa, status);
    }

    handlePhoneSpain = () => {
        let status = this.service.validatePhoneSpain(this.view.cacheDom.phoneSpain.value);
        this.ChangeStatus(this.view.cacheDom.phoneSpain, status);
    }

    handlePhoneUsa = () => {
        let status = this.service.validateLandLineUsa(this.view.cacheDom.phoneUsa.value);
        this.ChangeStatus(this.view.cacheDom.phoneUsa, status);
    }

    
}