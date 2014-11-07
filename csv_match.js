
Drupal.behaviors.csv_match = {
    attach: function (context, settings) {
        jQuery('.choose-link', context).click( function(e) {
          e.preventDefault && e.preventDefault();
          // fire ajax request to choose this link.
          var url = jQuery(this).attr('href').replace('\/assign','/assign/ajax');
          var className = jQuery(this).text() == 'Reset' ? 'multiple' : 'found';
          var td=jQuery(this).closest('td');
          jQuery.ajax(url, {
            complete: function(r) {
              var obj = JSON.parse(r.responseText);
              td.html(obj.item).closest('tr').attr('class', obj.className);
              jQuery('#csv-match-summary').html(obj.summary);
              Drupal.attachBehaviors(td);
            }
            })
          });
    }
};

