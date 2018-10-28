import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineImportExportElement
 * @class IconBaselineImportExportElement
 * @extends {AoflElement}
 */
class IconBaselineImportExportElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineImportExportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-import-export';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineImportExportElement.is, IconBaselineImportExportElement);

export default IconBaselineImportExportElement;
