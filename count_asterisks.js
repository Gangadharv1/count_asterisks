function countAsterisks(s) {
    let count = 0;
    let paired = false;
    for (let char of s) {
        if (char === '|') {
            paired = !paired;
        } else if (char === '*' && !paired) {
            count++;
        }
    }
    return count;
}