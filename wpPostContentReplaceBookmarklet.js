/**
* bookmarklet
*
* compressor:http://refresh-sf.com/
* javascript:!function(){var e="https://wandering-engineer.tech",n=document.getElementById("content"),t=n.value,l=t.replace(/http\:\/\/takelab\.sub\.jp/g,e);console.log("(σ・∀・)σｹﾞｯﾂ!!"),n.value=l,console.log("またつまらぬものを置換してしまったか・・・")}();
*/
(function(){
  var replaceString = "https://wandering-engineer.tech";
  var wpContent = document.getElementById('content');// 記事エリアオブジェクト
  var contentStr = wpContent.value;// 記事エリア文字列取得
  var replacedContent = contentStr.replace(/http\:\/\/takelab\.sub\.jp/g, replaceString);
  console.log("(σ・∀・)σｹﾞｯﾂ!!");
  wpContent.value = replacedContent;
  console.log("またつまらぬものを置換してしまったか・・・");
})();
