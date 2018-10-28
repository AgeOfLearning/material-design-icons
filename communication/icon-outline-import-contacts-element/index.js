import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineImportContactsElement
 * @class IconOutlineImportContactsElement
 * @extends {AoflElement}
 */
class IconOutlineImportContactsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineImportContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-import-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineImportContactsElement.is, IconOutlineImportContactsElement);

export default IconOutlineImportContactsElement;
