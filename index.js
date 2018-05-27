function theBeatlesPlay (musicians,instruments) {
  for (var i = 0; i < musicians.length; i++) {
    const arr = []
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}
