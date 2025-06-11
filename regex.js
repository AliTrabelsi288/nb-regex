function problem1(){
    /*
        ^ - ensure match starts at beginning
        [+-]? - matches optional plus or minus / ? is 0 or one times
        (\d{1,3}(,\d{3})*|\d+) - whole numbers
            matches numbers with comma seperators 
            or matches numbers without commas
        (\.\d+)? - optional decimal part / optional 0 or one times
        ([eE][+-]?\d+)? - optional scientific notation
            [eE] matches e or E / [+-]? optional + or - after e/E / \d+ one or more digits
        $ match goes up to end of input
    */
    const regex = /^[+-]?(\d{1,3}(,\d{3})*|\d+)(\.\d+)?([eE][+-]?\d+)?$/;

    const testCases = [
        "3.14529",       // match
        "-255.34",       // match
        "128",           // match
        "1.9e10",        // match
        "123,340.00",    // match
        "720p"           // skip
    ];

    testCases.forEach(str => {
        const result = regex.test(str) ? "match" : "skip";
        console.log(`${str}: ${result}`);
    });
}

function problem2(){
    const regex = /1/;

    const testCases = [
        "415-555-1234",     // 415
        "650-555-2345",     // 650
        "(416)555-3456",    // 416
        "202 555 4567",     // 202
        "4035555678",       // 403
        "1 416 555 9292"    // 416
    ]
    
}

function problem3(){

}

function problem4(){

}

problem1();