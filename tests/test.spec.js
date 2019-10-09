describe("Sample text set", () => {
    let formSer;

    beforeEach(()=> {
        formSer = new formService();
    });

    it('Testing a name correctly', function() {
        const a = formSer.validateName('Carlo');
        expect(a).toBe(true);
    });

    it('Testing a name not correctly1', function() {
        const a = formSer.validateName(' Carlo');
        expect(a).toBe(false);
    });

    it('Testing a name not correctly2', function() {
        const a = formSer.validateName('.Carlo');
        expect(a).toBe(false);
    });

    it('Testing a name not correctly3', function() {
        const a = formSer.validateName('Ca');
        expect(a).toBe(false);
    });

    it('Testing a last name correctly', function() {
        const a = formSer.validateLast('Garcia montes');
        expect(a).toBe(true);
    });

    it('Testing a last name not correctly', function() {
        const a = formSer.validateLast(' Garcia montes');
        expect(a).toBe(false);
    });

    it('Testing a email correctly', function() {
        const a = formSer.validateEmail('email@gmail.com');
        expect(a).toBe(true);
    });

    it('Testing a email not correctly', function() {
        const a = formSer.validateEmail('email@gcom');
        expect(a).toBe(false);
    });

    it('Testing a date (Spain) correctly', function() {
        const a = formSer.validateDateSpain('22/08/1999');
        expect(a).toBe(true);
    });

    it('Testing a date (Spain) not correctly', function() {
        const a = formSer.validateDateSpain('29/02/1999');
        expect(a).toBe(false);
    });

    it('Testing a date (USA) correctly', function() {
        const a = formSer.validateDateUsa('02/22/1999');
        expect(a).toBe(true);
    });

    it('Testing a date (USA) not correctly', function() {
        const a = formSer.validateDateUsa('29/22/1989');
        expect(a).toBe(false);
    });

    it('Testing an address correctly', function() {
        const a = formSer.validateAddress('C/ los matojos');
        expect(a).toBe(true);
    });

    it('Testing an address not correctly', function() {
        const a = formSer.validateAddress('C/');
        expect(a).toBe(false);
    });

    it('Testing a Postal Code (Spain) correctly', function() {
        const a = formSer.validatePCSpain('29012');
        expect(a).toBe(true);
    });

    it('Testing a Postal Code (Spain) not correctly', function() {
        const a = formSer.validatePCSpain('290');
        expect(a).toBe(false);
    });

    it('Testing a Postal Code (USA) correctly', function() {
        const a = formSer.validatePCUsa('99501');
        expect(a).toBe(true);
    });

    it('Testing a Postal Code (USA) not correctly', function() {
        const a = formSer.validatePCUsa('9950234d1');
        expect(a).toBe(false);
    });

    it('Testing a land line (Spain) correctly', function() {
        const a = formSer.validateLandLineSpain('999666333');
        expect(a).toBe(true);
    });

    it('Testing a land line (Spain) not correctly', function() {
        const a = formSer.validateLandLineSpain('399666333');
        expect(a).toBe(false);
    });

    it('Testing a land line (USA) correctly', function() {
        const a = formSer.validateLandLineUsa('(555)3223224');
        expect(a).toBe(true);
    });

    it('Testing a land line (USA) not correctly', function() {
        const a = formSer.validateLandLineUsa('(553223224');
        expect(a).toBe(false);
    });

    it('Testing a phone (Spain) correctly', function() {
        const a = formSer.validatePhoneSpain('+34666777888');
        expect(a).toBe(true);
    });

    it('Testing a phone (Spain) not correctly', function() {
        const a = formSer.validatePhoneSpain('+44766777888');
        expect(a).toBe(false);
    });

    it('Testing a phone (USA) correctly', function() {
        const a = formSer.validateLandLineUsa('5556667777');
        expect(a).toBe(true);
    });

    it('Testing a phone (USA) not correctly', function() {
        const a = formSer.validateLandLineUsa('sfkjerh');
        expect(a).toBe(false);
    });
})