import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneImportExportElement
 * @class IconTwotoneImportExportElement
 * @extends {AoflElement}
 */
class IconTwotoneImportExportElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneImportExportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-import-export';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneImportExportElement.is, IconTwotoneImportExportElement);

export default IconTwotoneImportExportElement;
