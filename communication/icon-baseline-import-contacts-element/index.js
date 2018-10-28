import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineImportContactsElement
 * @class IconBaselineImportContactsElement
 * @extends {AoflElement}
 */
class IconBaselineImportContactsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineImportContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-import-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineImportContactsElement.is, IconBaselineImportContactsElement);

export default IconBaselineImportContactsElement;
