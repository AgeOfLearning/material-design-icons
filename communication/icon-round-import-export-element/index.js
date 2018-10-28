import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundImportExportElement
 * @class IconRoundImportExportElement
 * @extends {AoflElement}
 */
class IconRoundImportExportElement extends AoflElement {
  /**
   * Creates an instance of IconRoundImportExportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-import-export';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundImportExportElement.is, IconRoundImportExportElement);

export default IconRoundImportExportElement;
