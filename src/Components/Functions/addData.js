export default function addData (prevData, tempData) {
    let set = new Set();
    let ans = [...prevData];
    prevData.forEach((element) => set.add(element.id));

    tempData.forEach(element => {
        if(!set.has(element.id)) {
            set.add(element.id);
            ans.push(element);
        }
    });
    
    return ans;
}