 (function ( $ ) {
        $.fn.mintabs = function(hide) {
            
            var tabs = $(this);
            if(typeof(hide) === 'undefined') hide = true;
            
            
            // Add data attributes to li items
            var x = 0;
            tabs.find('> ul li').each(function(){
                $(this).attr('data-id', x);
                x++;
            });
            
            
            // And the same for content items
            var x = 0;
            tabs.find('> div').each(function(){
                $(this).attr('data-id', x);
                x++;
            });
            
            
            // Add intitial active classes
            tabs.find('> ul li:first').addClass('active');
            tabs.find('> div:first').addClass('active');
            
            
            // Hide intitial content
            hideContent();
            
            
            // Click links
            tabs.find('> ul li').click(function(){
               if($(this).hasClass('active')) return;
               
               var id = $(this).data('id');
               var newContent = tabs.find('> div[data-id="'+ id +'"]').addClass('active');
               tabs.find('> div').not(newContent).removeClass('active');
               
               $(this).addClass('active');
               tabs.find('> ul li').not($(this)).removeClass('active');
               
               hideContent();
               
            });
            
            
            function hideContent(){
                if(hide !== false){
                    tabs.find('> div.active').show();
                    tabs.find('> div').not('.active').hide();
                }
            }
            
        };
}( jQuery ));