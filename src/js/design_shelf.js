    /**
     * 本棚型の一覧の行を更新します
     * @param {type} primary 最初の書籍データ
     * @param {type} secondary 次の書籍データ
     * @returns {undefined}
     */
    function updateShelfRow(primary,secondary){
        var html = "";
        html += "<tr class='title'>";
        html +=   "<th>書籍名</th>" ;
        html +=   createTD("colspan='2' width='45%'","<strong>" + primary.title + "</strong>");
        if(secondary != null){
            html +=   "<th>書籍名</th>" ;
            html +=   createTD("colspan='2' width='45%'","<strong>" + secondary.title + "</strong>");
        }
        html += "</tr>";
        html += "<tr class='author'>";
        var imgSrc = primary.amazon_image;
        if(imgSrc == null){
            imgSrc = "./img/book-notfound.gif";
        }
        html +=   createTD("width='113' rowspan='6'","<img height='160' width='113' src='" + imgSrc + "' />");
        html +=   "<th>著者</th>";
        html +=   createTD("",primary.author);

        if(secondary != null){
            var imgSrc = secondary.amazon_image;
            if(imgSrc == null){
                imgSrc = "./img/book-notfound.gif";
            }

            html +=   createTD("width='113' rowspan='6'","<img height='160' width='113' src='" + imgSrc + "' />");
            html +=   "<th>著者</th>";
            html +=   createTD("",secondary.author);
        }
        html += "</tr>";

        html += "<tr class='series'>";
        html +=   "<th nowrap='1'>シリーズ</th>";
        html +=   createTD("",primary.magazine);
        if(secondary != null){
            html +=   "<th nowrap='1'>シリーズ</th>";
            html +=   createTD("",secondary.magazine);
        }
        html += "</tr>";

        html += "<tr class='s_code'>";
        html +=   "<th nowrap='1'>シリーズコード</th>";
        html +=   createTD("",primary.m_code);

        if(secondary != null){
            html +=   "<th nowrap='1'>シリーズコード</th>";
            html +=   createTD("",secondary.m_code);
        }
        html += "</tr>";

        html += "<tr class='publisher'>";
        html +=   "<th>出版社</th>";
        html +=   createTD("",primary.publisher);
        if(secondary != null){
            html +=   "<th>出版社</th>";
            html +=   createTD("",secondary.publisher);
        }
        html += "</tr>";

        html += "<tr class='release_date'>";
        html +=   "<th>発売日</th>";
        html +=   createTD("",primary.release_date);
        if(secondary != null){
            html +=   "<th>発売日</th>";
            html +=   createTD("",secondary.release_date);
        }
        html += "</tr>";

        html += "<tr class='barcode'>";
        html +=   "<th>バーコード</th>";
        html +=   createTD("",primary.barcode);
        if(secondary != null){
            html +=   "<th>バーコード</th>";
            html +=   createTD("",secondary.barcode);
        }
        html += "</tr>";

        $(html).appendTo('table.shelf tbody');  
    }
