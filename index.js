function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
} 

function sayHiToGrandma(whisper, shout, say) {
  whisper = `hello`
  shout = `HELLO!`
  say = `I love you, Grandma!`
  return whisper (`I can't hear you!`),
         shout (`YES INDEED!`)
         say (`I love you, too.`)
}
