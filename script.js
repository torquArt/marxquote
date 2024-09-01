const quotes = ["“Religion is the opium of the people.” — Karl Marx",
    "“Democracy is the road to socialism.” — Karl Marx    ", 
    "“History repeats itself, first as tragedy, second as farce.” — Karl Marx    ",
    "“Keep people from their history, and they are easily controlled.” — Karl Marx"]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
}
}