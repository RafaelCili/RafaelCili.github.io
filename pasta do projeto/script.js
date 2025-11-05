$(function(){
    let produtos = [];

    $.getJSON("produtos.json", function(xhr) {
        produtos = xhr;
        let text_html = '';

        for(let i = 0; i < xhr.length; i++) {
            text_html += "<div class = 'cards-produtos'>";
            text_html += "<img class='img-cards' src='" + xhr[i].imagem + "'>";
            text_html += "<div class='text-div'>"
            text_html += "<h3 class = 'name-text'>" + xhr[i].nome +"</h3>";
            text_html += "<p class='text-description'>" + xhr[i].descricao + "</p>";
            text_html += "<p class='text-price'> R$" + xhr[i].preco +"</p>";
            text_html += "<button class='button' data-id='" + xhr[i].id + "'>Adicionar ao carrinho</button>";
            text_html += "</div>";
            text_html += "</div>";
        }
        $(".products").html(text_html);
    });

    $(".products button").click(function() {
        $.$(this).data("id");
        $.ajax({
            url: "produtos.json",
            type: 'GET',
            dataType: 'json',

            success : function(produtos) {
                let text_html = "";
            }
        })
    })
});