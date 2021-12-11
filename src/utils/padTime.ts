function padTime(unit: number): string | number {
    
    if (unit.toString().length === 2) return unit;
    
    return `00${unit}`.slice(-2)
}
export default padTime