
    /**
     * 一覧表示の行を更新します
     * @param {type} raw 更新する書籍データ
     * @returns {undefined}
     */
    function updateListRow(raw){
        var html = "";
        html += "<tr>";
        html += createTD("",raw.title);
        html += createTD("",raw.author);
        html += createTD("",raw.magazine);
        html += createTD("",raw.m_code);
        html += createTD("",raw.publisher);
        html += createTD("class='release_date'",raw.release_date);
        html += createTD("class='barcode'",raw.barcode);
        html += "</tr>";
        $(html).appendTo('table.list tbody');  

    }
    
