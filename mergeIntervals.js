/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 0) return [];
    
    intervals.sort((a, b) => b[0] - a[0]);
    
    const res = [intervals.pop()];
    
    while (intervals.length > 0) {
        const [start1, end1] = res[res.length - 1];
        const [start2, end2] = intervals.pop();
        
        if (end1 >= start2) {
            const a = Math.min(start1, start2);
            const b = Math.max(end1, end2);
            res[res.length - 1][0] = a;
            res[res.length - 1][1] = b;
        } else {
            res.push([start2, end2]);
        }
    }
    
    return res;
};