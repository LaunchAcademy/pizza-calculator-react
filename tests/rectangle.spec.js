class Rectangle {
  constructor(width, length) {
    this.length = length
    this.width = width
  }

  perimeter(){
    return this.width * 2 + this.length * 2
  }
}
describe('a rectangle', () => {
  let rec
  beforeEach(() => {
    rec = new Rectangle(2,4)
  })

  it('has a length', () => {
    expect(rec.length).toBe(4)
  })

  it('has a width', () => {
    expect(rec.width).toBe(2)
  })

  it('has a perimeter', () => {
    expect(rec.perimeter()).toBe(12)
  })

  it('has a different perimeter for 5x3', () => {
    const otherRec = new Rectangle(5,3)
    expect(otherRec.perimeter()).toBe(16)
  })

  it('has an area')
})
