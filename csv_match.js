
Drupal.behaviors.csv_match = {
    attach: function (context, settings) {
        jQuery('.choose-link', context).click( function(e) {
          e.preventDefault && e.preventDefault();
          // fire ajax request to choose this link.
          var url = jQuery(this).attr('href').replace('\/assign','/assign/ajax');
          var className = jQuery(this).text() == 'Reset' ? 'multiple' : 'found';
          jQuery(this).closest('td').load(url, function() { Drupal.attachBehaviors(this); } )
            .closest('tr').attr('class',className);
            });
    }
};

