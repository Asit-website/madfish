function animateCounter(element, start, end, duration, symbol = "") {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
        current += increment;
        element.innerText = current + symbol;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    const counters = document.querySelectorAll('.stats-head h2 b');
    
    const stats = [
        { target: 300, symbol: "+" },  // 300+
        { target: 25, symbol: "+" },   // 25+
        { target: 95, symbol: "%" },   // 95%
        { target: 50, symbol: "%" }    // 50%
    ];

    counters.forEach((counter, index) => {
        const { target, symbol } = stats[index];
        animateCounter(counter, 0, target, 2000, symbol);  
    });
};
