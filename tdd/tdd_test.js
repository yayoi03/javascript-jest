const assert = require("assert").strict;
const ClosedInterval = require("./tdd");

describe('整数閉区間の文字列表記を返せる', ()=>{
    test("閉区間を出力できる",()=>{
        const closedInterval = new ClosedInterval(3,8)
        assert.equal(closedInterval.outputMyClosedInterval(), "[3,8]");
      }
    )
    test("上端より下端が大きい場合例外を返す",()=>{
        expect(() =>new ClosedInterval(8,3)).toThrow('上端より下端が大きい')
      }
    )
  }
)

describe("整数閉区間が指定した整数を含むか判定できる", ()=>{
  const closedInterval = new ClosedInterval(3,8)

  test('指定した整数が含まれている場合', ()=>{
    assert.equal(closedInterval.isNumberIncluded(4), true);
    }
  )
  test('指定した整数が含まれていない場合', ()=>{
    assert.equal(closedInterval.isNumberIncluded(9), false);
    }
  )
})

describe('別の閉区間と等価かどうかや、完全に含まれるかどうか判定', ()=>{
    const closedInterval = new ClosedInterval(3,8)

    test("等価の閉区間が渡された場合、「等価の閉区間」と出力",()=>{
      const otherClosedInterval = new ClosedInterval(3,8)
      assert.equal(closedInterval.compairClosedInterval(otherClosedInterval), "等価の閉区間");
    })

    test("完全に含まれる閉区間が渡された場合、「完全に含まれる」と出力",()=>{
      const otherClosedInterval = new ClosedInterval(4,7)
      assert.equal(closedInterval.compairClosedInterval(otherClosedInterval), "完全に含まれている");
    })

    test("等価の閉区間でも完全に含まれる閉区間でもない閉区間が渡された場合、「等価でもないし、完全に含まれているわけでもない」と出力",()=>{
      const otherClosedInterval = new ClosedInterval(2,9)
      assert.equal(closedInterval.compairClosedInterval(otherClosedInterval), "等価でもないし、完全に含まれているわけでもない");
    })
  }
)