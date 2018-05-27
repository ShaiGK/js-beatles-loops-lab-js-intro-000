function theBeatlesPlay (musicians,instruments) {
  const arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}

function johnLennonFacts (facts) {
  var i = 0
  while (i < truths.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
}
