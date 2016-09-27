
    /**
     * TDタグを簡単に作るツール
     * @param {type} attribute
     * @param {type} value
     * @returns {String}
     */
    function createTD(attribute,value){
        return createTag("td",attribute,value);
    }
    function createTag(tagName,attribute,value){
        var html = "";
        html += "<" + tagName + " " + attribute + ">";
        if(value != null){
            html += value;
        }
        html += "</" + tagName + ">";
        return html;
    }
