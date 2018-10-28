import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineImportExportElement
 * @class IconOutlineImportExportElement
 * @extends {AoflElement}
 */
class IconOutlineImportExportElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineImportExportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-import-export';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineImportExportElement.is, IconOutlineImportExportElement);

export default IconOutlineImportExportElement;
