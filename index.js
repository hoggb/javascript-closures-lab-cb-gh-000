const app = "I don't do much."

function bumpCounter(){
  var counter

  function addBump(){
    counter++
  }

  function getBumps(){
    return counter
  }

  return {addBump, getBumps}
}
