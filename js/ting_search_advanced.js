Drupal.behaviors.extendSearchPreventToggling = {
  attach: function(context, settings) {
    jQuery('.extendsearch-advanced select', context).click(function(e){
      e.stopPropagation();
    });
  }
};
