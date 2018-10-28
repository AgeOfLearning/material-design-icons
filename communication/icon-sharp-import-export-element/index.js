import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpImportExportElement
 * @class IconSharpImportExportElement
 * @extends {AoflElement}
 */
class IconSharpImportExportElement extends AoflElement {
  /**
   * Creates an instance of IconSharpImportExportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-import-export';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpImportExportElement.is, IconSharpImportExportElement);

export default IconSharpImportExportElement;
