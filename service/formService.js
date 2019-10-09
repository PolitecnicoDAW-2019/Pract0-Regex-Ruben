class formService {
    validateName = string => {
        const regex =  /^[A-Za-z].{3,128}$/g;
        return regex.test(string);
    }

    validateLast = string => {
        const regex =  /^[A-Za-z].{3,256}$/g;
        return regex.test(string);
    }

    validateEmail = string => {
        const regex = /^.{1,256}@.{2,25}\.[a-zA-Z]{2,25}$/g;
        return regex.test(string);
    }

    validateRadio = radio => {
        return radio.checked;
    }

     validateDateSpain = string => {
        const regex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/g;
        return regex.test(string);
    } 

     validateDateUsa = string => {
        const regex = /((0[13578]|1[02])[\/.]31[\/.](18|19|20)[0-9]{2})|((01|0[3-9]|1[1-2])[\/.](29|30)[\/.](18|19|20)[0-9]{2})|((0[1-9]|1[0-2])[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))/g;
        return regex.test(string);
    } 

    validateAddress = string => {
        const regex = /^.{5,256}$/g;
        return regex.test(string);
    }

    validatePCSpain = string => {
        const regex = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/g;
        return regex.test(string);
    }

    validatePCUsa = string => {
        const regex = /^\d{5}(-\d{4})?$/g;
        return regex.test(string);
    }

    validateLandLineSpain = string => {
        const regex = /^(\+34|0034|34)?[\s|-|.]?[8|9][\s|-|.]?([0-9][\s|-|.]?){8}$/g;
        return regex.test(string);
    } 

    validateLandLineUsa = string => {
        const regex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
        return regex.test(string);
    }

    validatePhoneSpain = string => {
        const regex = /^(\+34|0034|34)?[\s|-|.]?[6|7][\s|-|.]?([0-9][\s|-|.]?){8}$/g;
        return regex.test(string);
    }

}