import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpImportContactsElement
 * @class IconSharpImportContactsElement
 * @extends {AoflElement}
 */
class IconSharpImportContactsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpImportContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-import-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpImportContactsElement.is, IconSharpImportContactsElement);

export default IconSharpImportContactsElement;
