import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertDriveFileElement
 * @class IconSharpInsertDriveFileElement
 * @extends {AoflElement}
 */
class IconSharpInsertDriveFileElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertDriveFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-drive-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertDriveFileElement.is, IconSharpInsertDriveFileElement);

export default IconSharpInsertDriveFileElement;
