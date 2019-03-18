export function Entry(title, body) {
  this.title = title;
  this.body = body;

  Entry.prototype.numWords = function(){
    var splitTitle = this.title.split(' ');
    var splitBody = this.body.split(' ');
    return splitTitle.length + splitBody.length;
  };

  Entry.prototype.vowelCount = function(){
    var splitTitle = this.title.split('');
    var splitBody = this.body.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var combinedWords = splitTitle  + splitBody;
    var counter = 0;
    for(var i = 0; i < combinedWords.length;i++){
      if(vowels.includes(combinedWords[i])){
        counter++;
      }
    }
    return counter;
  };

  Entry.prototype.consonantCount = function(){
    var splitTitle = this.title.split('');
    var splitBody = this.body.split('');
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var combinedWords = splitTitle  + splitBody;
    var counter = 0;
    for(var i = 0; i < combinedWords.length;i++){
      if(consonants.includes(combinedWords[i])){
        counter++;
      }
    }
    return counter;
  };
}
