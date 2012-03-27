/*
 * ppsb.js: Privacy preserving social buttons
 *
 * Copyright 2012 Geoffroy Couprie
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
//(function () {
    function mygetElementsByClassName(classname) {
        if (document.getElementsByClassName)
            return document.getElementsByClassName(classname);
        else {
            var classElements = new Array();
            var els = document.getElementsByTagName("*");
            var elsLen = els.length;
            var pattern = new RegExp("(^|\\s)"+classname+"(\\s|$)");
            for (i = 0, j = 0; i < elsLen; i++) {
                if ( pattern.test(els[i].className) ) {
                    classElements[j] = els[i];
                    j++;
                }
            }
            return classElements;
        }
    }

    function addHandler(cssClass, urlCreator) {
        var nodes = mygetElementsByClassName(cssClass);
        for(var i = 0; i< nodes.length; i++){
            var node = nodes[i];
            var dataUrl = node.attributes["data-url"].value;
            var dataVia = node.attributes["data-via"].value;
            var dataText = node.attributes["data-text"].value;
            node.onclick = function(){
            var url = urlCreator(dataUrl, dataVia, dataText);
            var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes';
            var width = 550;
            var height = 420;
            window.open(url, 'intent', windowOptions + ',width=' + width +
                            ',height=' + height);
            };
        }
    }

    addHandler("pp-twitter",  function(url, via, text) { return "https://twitter.com/intent/tweet?url="+url+"&text="+text+"&via="+via } );
    addHandler("pp-facebook", function(url, via, text) { return "https://www.facebook.com/sharer.php?u="+url+"&t="+text } );
    addHandler("pp-reddit",   function(url, via, text) { return "http://www.reddit.com/submit?url="+url+"&title="+text } );
