/*
    Pure REGEX excersises on RegexOne
*/

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
    /*
        Group solution
    */
    const regex = /^1?\s?\(?(\d{3})\)?[-\s]?\d{3}[-\s]?\d{4}/;

    const testCases = [
        "415-555-1234",     // 415
        "650-555-2345",     // 650
        "(416)555-3456",    // 416
        "202 555 4567",     // 202
        "4035555678",       // 403
        "1 416 555 9292"    // 416
    ];

    for (const str of testCases) {
        const match = str.match(regex);
        console.log(`${str}: area code = ${match[1]}`);
    }
}

function problem3(){

}

function problem4(){

}

problem2();



/*
    REGEX in JS Exercises on RegexExercises
*/

/*
    Need to turn all 1 like characters (iIl|!/) with 1
    Also replace all 0 like characters (oO@Θθ) with 0
*/
function OnesandZeros(){
    const input = "101o0OO1 i100l001 00!00011 iΘi101Θ0 0l@@l0|i 1@i0I0o0 00OO1!|1 1θ1@Θ0|0 01!00o1O 1iΘ01011 θ/1|0111 Oθ1l001! 1!00|0I0 11i0!10θ Θ11IΘ0@0 100/0|01 /101l00I o0110o11 /000011i 0Θo00i01 1111/0I1 i000Θ001 l1O@Θ1/0 10θ1100l 11000!10 11011il1 1Θ11i001 1ΘO!Θ@0O |0ΘO11θ0 0010Θ01O i110/011 /0101θ@@ 01Θ00/10 0|θ10111 101Θ01|! 0000|oiθ /i1110@θ 10I1Θ000 1O011/|1 1O01@01O O1011|10 1|O/0@0! 0I00/101 00/l/011 00Θ1!0@l 0o|I11!0 0!11101I 111011Θo 10|0!10I 0!@l11l1 0000o!01 l0I!i0O1 0i10l0θ/ !00o@i01 Oo10110/ I10001i1 1Θ000101 0/@|0Θ01 I10111Θ1 I11I0l1i i1|lIΘ0l 1O/0/1Θ0 !0000io1 1100Θ1l0 001oIoI0 01101010 11!11i1o 110Ii000 i1000o01 0!001@!0 1000111O 010!001/ 11l0OO/@ 111000io O!01@0ΘI 00oO1!i0 0/110!10 1001011i |1l00!0Θ 11O11oi1 00!0/00I iθ0i111o I01θ00Θ1 11I01θ1O /|1!!111 @10/l1I/ 0@110i00 i!11l001 1l01O110 Θ@θ1/|00 01!0ili0 Θ01l1111 01@10|o1 0101011l Θ110ΘI1| 1101/001 101|01IΘ 1|101110 0|11lΘθ0 1O0l1100"

    const output = input
        .replace(/[iIl|!\/]/g, '1')
        .replace(/[oO@Θθ]/g, '0');

    console.log(output);
}

OnesandZeros();