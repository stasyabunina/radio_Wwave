export default class FormValidator {
  constructor(form, options, fields, onSuccess = undefined) {
    this.form = form;
    this.options = options;
    this.fields = fields;
    this.onSuccess = onSuccess;

    this.validation = undefined;

    this.init()
  }

  init() {
    this.validate();
    this.addFields();
    this.onSuccessHandler();
  }

  validate() {
    this.validation = new JustValidate(this.form, this.options);
  }

  addFields() {
    for (const field of this.fields) {
      this.validation.addField(field.id, field.rules)
    }
  }

  onSuccessHandler() {
    this.onSuccess !== undefined && this.validation.onSuccess(() => this.onSuccess());
  }
}
