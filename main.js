let say1 = 'Uwielbiam JavaScript';
let say2 = 'Jestem świetnym programistą';
console.log(string(say1, say2));
function string (say1,say2)
{
    if(say1>say2){
        return say2;
    }
    if(say1<say2){
        return say1;
    }
}