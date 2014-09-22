
Drupal.behaviors.csv_match = {
    attach: function (context, settings) {
        jQuery('.choose-link', context).click( function(e) {
          e.preventDefault && e.preventDefault();
          // fire ajax request to choose this link.
          var url = jQuery(this).attr('href').replace('\/assign','/assign/ajax');
          jQuery(this).closest('td').load(url)
            .closest('tr').attr('class','found');
            });
    }
};

