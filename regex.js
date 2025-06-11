function problem1(){
    /*
        Group solution
    */
    const regex = /^-?\d+(?:,\d+)*(?:\.\d+)*(?:e\d+)*$/;

    const testCases = [
        "3.14529",       // match
        "-255.34",       // match
        "128",           // match
        "1.9e10",        // match
        "123,340.00",    // match
        "720p"           // skip
    ];

    for (const str of testCases) {
        const result = regex.test(str) ? "match" : "skip";
        console.log(`${str}: ${result}`);
    }
}

function problem2() {

    const testCases = [
        "415-555-1234",     // 415
        "650-555-2345",     // 650
        "(416)555-3456",    // 416
        "202 555 4567",     // 202
        "4035555678",       // 403
        "1 416 555 9292"    // 416
    ];

}

function problem3(){

}

function problem4(){

}

problem2();