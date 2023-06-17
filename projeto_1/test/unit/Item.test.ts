import Item from "../../src/checkout/domain/entities/Item"

test('should create item', () => {
    const item = new Item(1, "musical instruments", 'Guitar', 1000)
    expect(item.idItem).toBe(1)
})

test('should create item and calculate volume', () => {
    const item = new Item(1, "musical instruments", 'Guitar', 1000, 100,30,10)
    const volume = item.getVolume()
    
    expect(volume).toBe(0.03)
})

test('should create item and calculate density', () => {
    const item = new Item(1, "musical instruments", 'Guitar', 1000, 100,30, 10,3)
    const density = item.getDensity()
    expect(density).toBe(100)
})

test('should create item and calculate freight', () => {
    const item = new Item(1, "musical instruments", 'Guitar', 1000, 100,30, 10,3)
    const freight = item.getFreight()
    expect(freight).toBe(30)
})

test('should create item and calculate minimum freight', () => {
    const item = new Item(1, "musical instruments", 'Cable', 30, 10,10, 10, 0.9)
    const freight = item.getFreight()
    expect(freight).toBe(10)
})