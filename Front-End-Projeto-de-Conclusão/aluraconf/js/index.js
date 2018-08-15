function ScrollSuave(selector)  {
    $(selector).click(function(event){
        event.preventDefault();

        const target = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1500);
         
    });
}

ScrollSuave("a[href*=painel-conteudo]");
ScrollSuave("a[href*=painel-palestrantes]");
ScrollSuave("a[href*=painel-formulario]");