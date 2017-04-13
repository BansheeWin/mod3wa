'use strict';
class FormValidator {
    constructor($form) {
        this.$form = $form;
        this.$errorMessage = this.$form.find('.error-message');
        this.$totalErrorCount = this.$form.find('.total-error-count');
        // Tableau général de toutes les erreurs de validation trouvées.
        this.totalErrors = [];
    }
    checkMinLength() {
        var wrongFields;
        wrongFields = [];
        this.$form.find('[data-length]').each(function () {
            var minLength;
            var data;
            minLength = $(this).data('length');
            data = $(this).val().trim();
            if (data.length < minLength) {
                wrongFields.push({
                    nomDuChamp: $(this).data('name')
                    , message: 'il faut au minimum ' + minLength + ' caractères'
                });
            }
        });
        $.merge(this.totalErrors, wrongFields);
    }
}