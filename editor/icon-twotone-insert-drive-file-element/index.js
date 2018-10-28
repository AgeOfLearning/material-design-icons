import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertDriveFileElement
 * @class IconTwotoneInsertDriveFileElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertDriveFileElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertDriveFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-drive-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertDriveFileElement.is, IconTwotoneInsertDriveFileElement);

export default IconTwotoneInsertDriveFileElement;
