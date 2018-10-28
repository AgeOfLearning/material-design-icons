import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneImportContactsElement
 * @class IconTwotoneImportContactsElement
 * @extends {AoflElement}
 */
class IconTwotoneImportContactsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneImportContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-import-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneImportContactsElement.is, IconTwotoneImportContactsElement);

export default IconTwotoneImportContactsElement;
