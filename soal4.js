function count_vowels(str)
{
  var huruf_vokal = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var i = 0; i < str.length ; i++)
  {
    if (huruf_vokal.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  console.log(vcount)
}

count_vowels('programmer')