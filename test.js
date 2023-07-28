function combinationSum(a, sum) {
    const uniqueElements = [...new Set(a)]; // Loại bỏ các phần tử trùng lặp
    const combinations = [];

    function backtrack(currentSum, startIndex, currentCombination) {
        if (currentSum === sum) {
            // nếu tổng hiện tại = tổng cho trước,lưu các cách kết hợp
            combinations.push([...currentCombination]);
            return;
        }
        if (currentSum > sum || startIndex === uniqueElements.length) {
            // nếu tổng hiện tại lớn hơn tổng cho trước,dừng
            return -1;
        }
        // thử thêm uniqueElement[startIndex] vào tổng hiện tại
        currentCombination.push(uniqueElements[startIndex]);
        backtrack(currentSum + uniqueElements[startIndex], startIndex, currentCombination);
        currentCombination.pop();
        // thử với các phần tử tiếp theo trong mảng
        backtrack(currentSum, startIndex + 1, currentCombination);
    }
    backtrack(0, 0, []);
    return combinations;
}

// Test
const a = [2, 3, 5, 9];
const sum = 9;
const result = combinationSum(a, sum);
console.log(`Tổng số cách kết hợp các phần tử trong mảng a để cộng lại thành ${sum} là:${result.length}`);
console.log(`Các cách kết hợp để có tổng bằng ${sum} là:`);
for (const combination of result) {
    console.log(combination.join(""));
}