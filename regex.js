const fs = require('fs');
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

/*
    From the left, identify at which position the first 1 appears. Index starts at 0
*/
function MSB(){
    const input = "00001001 10111110 01101001 01100101 00101011 01101110 01001011 10000110 11110011 01111100 11010000 11100110 01110110 11111111 01010101 00111011 11011011 10110100 11111001 10001011 01100110 10111100 01001000 00001111 00100101 10100001 00111100 11001100 10100110 00011101 10000101 10111110 00011111 01100100 11100010 01011011 01110110 00011100 00011011 10101100 01010111 11110110 01000000 00000110 11000010 01011111 01010001 00011111 10011011 00011100 10010110 11000010 10110000 11000001 00001010 00100111 00010011 11010011 11101111 11110100 11111001 01101001 01000111 01001111 01000011 00100101 11110001 00111111 00100110 10111000 11111011 10010000 10100010 01101101 01000111 11111011 10110111 00000000 11111100 01100011 01010111 01101000 01010001 10110100 11011011 11100010 00010000 10001011 11011111 10001100 10111100 10010101 11101101 00000010 11100100 11110101 11101000 00101101 11000100 00100100"
    const inputSplit = input.split(/\s/);
    const result = [];

    for(let entry of inputSplit){
        const index = entry.indexOf('1');
        result.push(index === -1 ? 0 : index + 1);
    }

    console.log(result.join(' '));

}

/*
    Same as above MSB, but identifying position of last 1 to appear
*/
function LSB(){
    const input = "00001001 10111110 01101001 01100101 00101011 01101110 01001011 10000110 11110011 01111100 11010000 11100110 01110110 11111111 01010101 00111011 11011011 10110100 11111001 10001011 01100110 10111100 01001000 00001111 00100101 10100001 00111100 11001100 10100110 00011101 10000101 10111110 00011111 01100100 11100010 01011011 01110110 00011100 00011011 10101100 01010111 11110110 01000000 00000110 11000010 01011111 01010001 00011111 10011011 00011100 10010110 11000010 10110000 11000001 00001010 00100111 00010011 11010011 11101111 11110100 11111001 01101001 01000111 01001111 01000011 00100101 11110001 00111111 00100110 10111000 11111011 10010000 10100010 01101101 01000111 11111011 10110111 00000000 11111100 01100011 01010111 01101000 01010001 10110100 11011011 11100010 00010000 10001011 11011111 10001100 10111100 10010101 11101101 00000010 11100100 11110101 11101000 00101101 11000100 00100100"
    const inputSplit = input.split(/\s/);
    const result = [];

    for(let entry of inputSplit){
        const index = entry.lastIndexOf('1')
        result.push(index === 8 ? 0 : index + 1)
    }

    console.log(result.join(' '));
}

/*
    If byte ends with 1, its odd and we want to keep it / if byte ends with 0 its even and we want to remove
*/
function HowOdd(){
    const input = "00001001 10111110 01101001 01100101 00101011 01101110 01001011 10000110 11110011 01111100 11010000 11100110 01110110 11111111 01010101 00111011 11011011 10110100 11111001 10001011 01100110 10111100 01001000 00001111 00100101 10100001 00111100 11001100 10100110 00011101 10000101 10111110 00011111 01100100 11100010 01011011 01110110 00011100 00011011 10101100 01010111 11110110 01000000 00000110 11000010 01011111 01010001 00011111 10011011 00011100 10010110 11000010 10110000 11000001 00001010 00100111 00010011 11010011 11101111 11110100 11111001 01101001 01000111 01001111 01000011 00100101 11110001 00111111 00100110 10111000 11111011 10010000 10100010 01101101 01000111 11111011 10110111 00000000 11111100 01100011 01010111 01101000 01010001 10110100 11011011 11100010 00010000 10001011 11011111 10001100 10111100 10010101 11101101 00000010 11100100 11110101 11101000 00101101 11000100 00100100"
    const inputSplit = input.split(/\s/);
    const result = [];

    for(let entry of inputSplit){
        const last = entry.endsWith('1');

        if(last){
            result.push(entry);
        }
    }

    console.log(result.join(' '));
}

/*
    If byte begins with 1, it is negative. If begins with 0, number is positive
    Convert all negatibe bytes to their positive counterpart using twos complement (subract one from number and flip all bits)
    ie flip everything, apart from least significant 1.
*/
function TwosComplement() {
    const input = "00001001 10111110 01101001 01100101 00101011 01101110 01001011 10000110 11110011 01111100 11010000 11100110 01110110 11111111 01010101 00111011 11011011 10110100 11111001 10001011 01100110 10111100 01001000 00001111 00100101 10100001 00111100 11001100 10100110 00011101 10000101 10111110 00011111 01100100 11100010 01011011 01110110 00011100 00011011 10101100 01010111 11110110 01000000 00000110 11000010 01011111 01010001 00011111 10011011 00011100 10010110 11000010 10110000 11000001 00001010 00100111 00010011 11010011 11101111 11110100 11111001 01101001 01000111 01001111 01000011 00100101 11110001 00111111 00100110 10111000 11111011 10010000 10100010 01101101 01000111 11111011 10110111 00000000 11111100 01100011 01010111 01101000 01010001 10110100 11011011 11100010 00010000 10001011 11011111 10001100 10111100 10010101 11101101 00000010 11100100 11110101 11101000 00101101 11000100 00100100";
    const inputSplit = input.split(/\s+/);
    const result = [];

    for (let entry of inputSplit) {
        const isNegative = entry.startsWith('1');

        if (isNegative) {
            // convert string to int and subtract 1, then convert back to string and ensure has original length of 8
            let binaryNum = parseInt(entry, 2) - 1;
            let binaryStr = binaryNum.toString(2).padStart(8, '0');

            // convert 0 to temporary x value first, as if turn 1 to 0 will be fine, but if then turn 0 to 1 after will also flip all new 1's as well
            // so turn all 0's to x first, then flip all 1's to 0, finally turn all tem x's(0's) to 1's
            let flipped = binaryStr
                .replace(/0/g, 'x') 
                .replace(/1/g, '0')
                .replace(/x/g, '1');

            result.push(flipped);
        } else {
            result.push(entry); 
        }
    }

    console.log(result.join(' '));
}

/*
    arrow shaft must be just dashes, single head >, double fletching >>, total 6/8 units
*/
function FletchersAssistant(){
    const input = fs.readFileSync("FletchersAssisstant.txt", "utf8").split(/\s+/);

    const result = [];

    const regex = /^>>-{3,5}>$/;

    let lineNumber = 1;

    for (let arrow of input){
        if(!regex.test(arrow)){
            result.push(lineNumber);
        }
        lineNumber++;
    }
    console.log(result.join(' '));
    
}

/*
    same rules apply for assisstant, however if whole shaft too wide (=) can clip down to -/ and if more than 2 fletchings can clip down to just 2
    return list of arrows which meet rules
*/

function FletchersApprentice() {
  const input = fs.readFileSync("FletchersApprentice.txt", "utf8");

  const valid = input.match(/>>([-|=])\1{3,5}>/g);

  const arrow = valid
    .map(arrow => arrow
    .replace(/=/g, '-'));

  fs.writeFileSync("FletchersApprenticeOutput.txt", arrow.join('\n'), "utf8");
}

/*
    process stream of event user info / each has a timestamp grouped with [] and followed by new lines
    need to extract uniqueID for each user, each event may have username, UUID, email or HEX (0x) 
    if event has username, use this as ID / if not extract from email
*/
function IdentifyUsers() {
  const input = fs.readFileSync("Users.txt", "utf8");

  const ids = [...input.matchAll( //as matchAll returns Iterator object, so ... converts iterable into array so can use .map and .filter
    /\[\d{1,2}\/\d{1,2}\/\d{4},\s\d{1,2}:\d{2}:\d{2}\s(?:AM|PM)\](?:[\s\S]*?)(?:(?<=\n)(?!.*@|.*0x|.*\b[a-f0-9\-]{36}\b)([\w.-]{3,})|[^\n]*\n([a-zA-Z0-9._%+-]+)@)/g    //very long lol
  )].map(([, user, email]) => user || email).filter(Boolean);

  fs.writeFileSync("IdentifiedUsers.txt", ids.join('\n'), "utf8");
}

IdentifyUsers();