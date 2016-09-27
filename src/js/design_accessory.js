
    /**
     * ページ情報タイトルを更新します
     * start件～end件 (total全件中）
     * @param {type} start
     * @param {type} end
     * @param {type} total
     * @returns {undefined}
     */
    function updataPageInfoTitle(start,end,total){
        var html = "";
        html = html + start;
        html = html + "件";
        html = html + "〜";
        html = html + end;
        html = html + "件";

        html = html + "(全";
        html = html + total;
        html = html + "件中）";
        $("p.pager-display").html(html);  


    }
    /**
     * ページナビゲーションを差違描写します
     * @returns {undefined}
     */
    function updatePageNavigation(){
        navi_page_start = page_no - 3;
        navi_page_end = page_no + 3;

        max_page = Math.ceil( page_datas.length / page_row_size );
        if( page_no < 4){
                navi_page_start = 1;
                navi_page_end = 7;
        }
        if( page_no > max_page - 4){
                navi_page_start = max_page - 7;
                navi_page_end = max_page;
        }
        if(navi_page_start < 1){
                navi_page_start = 1;
        }
        var html = "";
        html = html + " <li class='see'>";
        html = html + "     <span class='decoration-previous-arrow' >";
        if(page_no > 1){
            html = html + "         <a href='#' onclick='movetoPage(" + (page_no - 1) + ");return false;' >";
        }
        html = html + "             前の" + page_row_size + "件";
        if(page_no > 1){
            html = html + "         </a>";
        }
        html = html + "     </span>";
        html = html + " </li>";


        for (var i = navi_page_start; i <= navi_page_end; i++) {
            html = html + "<li>";
            if(i == page_no ) { 
                html = html + "<span class='current'>" + i + "</span>";
            } else {
                html = html + "<a href='#' onclick='movetoPage("+i+");return false;'>" + i + "</a>";
            }
            html = html + " </li>";
        }

        html = html + " <li class='see'>";
        html = html + "     <span class='decoration-next-arrow' >";
        if(page_no < max_page){
            html = html + "         <a href='#' onclick='movetoPage(" + (page_no + 1) + ");return false;' >";
        }
        html = html + "            次の" + page_row_size + "件";
        if(page_no < max_page){
            html = html + "         </a>";
        }
        html = html + "     </span>";
        html = html + " </li>"

        $("ul.pager-links").html(html);  
    }
    /**
     * テーブルのページを移動します
     * @param {type} pageno 移動後のページ番号
     * @returns {undefined}
     */
    function movetoPage(pageno){
        page_no = pageno;

        // テーブルを更新します
        updataTable();
    }
    function onclickShowShelfList(){
        $("table.list").hide();
        $("table.shelf").show();
    }
    function onclickShowListList(){
        $("table.list").show();
        $("table.shelf").hide();
    }
