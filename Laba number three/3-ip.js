function ipToInt(ip = '192.168.1.1') {
    return ip
        .split('.')
        .reduce((acc, num) => acc + Number(num), 0);
}

console.log(ipToInt())