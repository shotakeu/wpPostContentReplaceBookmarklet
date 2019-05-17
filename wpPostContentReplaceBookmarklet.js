/**
* bookmarklet
*
* compressor:http://refresh-sf.com/
* javascript:!function(){var e="https://wandering-engineer.tech",n=document.getElementById("content"),t=n.value,l=t.replace(/http\:\/\/*******\.***\.jp/g,e);console.log("(σ・∀・)σｹﾞｯﾂ!!"),n.value=l,console.log("またつまらぬものを置換してしまったか・・・")}();
*/
(function(){
  var replaceString = "https://wandering-engineer.tech";// ブログの新URL
  var wpContent = document.getElementById('content');// 記事エリアオブジェクト
  var contentStr = wpContent.value;// 記事エリア文字列取得
  var replacedContent = contentStr.replace(/http\:\/\/*******\.***\.jp/g, replaceString); //旧URLを取得して置換
  wpContent.value = replacedContent;
})();
