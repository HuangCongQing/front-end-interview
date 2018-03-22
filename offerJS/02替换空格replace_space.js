/*
请实现一个函数，将一个字符串中的空格替换成“%20”。
例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
*/
function replaceSpace(str)
{
   //method1: return str.replace(/\s/g,"%20");
   var temp = '', j = 0;
   for(var i = 0; i < str.length; i++)
   {
     if(str[i] == ' ')
     {
       temp +="%20";
       continue;
     }
      
      temp += str[i];
   }
     
  return str = temp;
}
module.exports = {
    replaceSpace : replaceSpace
};
