import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertDriveFileElement
 * @class IconOutlineInsertDriveFileElement
 * @extends {AoflElement}
 */
class IconOutlineInsertDriveFileElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertDriveFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-drive-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertDriveFileElement.is, IconOutlineInsertDriveFileElement);

export default IconOutlineInsertDriveFileElement;
