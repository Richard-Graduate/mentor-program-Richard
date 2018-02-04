function stars (n){

  var arr=[]
  for(var i=0;i<n;i++){
    arr.push('*')
  }
  return arr
}

describe("hw1_1",function() {
  it("should return correct answer when n = 1",function(){
    expect(stars(1)).toEqual(['*'])
  })
})
