$(function () {
    $('#run').on('click', clickSwitch);
});

function ajaxGetJson(jsonData){
    
    var i;
    $("#target").empty().append('<ul>');
    for(i=0;i<jsonData.length;i++){
            $('<li>').append(
                
                '<p><strong>Prénom</strong> :'+jsonData[i].firstName+'</p>',
                '<p><em>Téléphone</em> :'+jsonData[i].phone+'</p>'
            
            ).appendTo('#target ul');
            
        };
    }
