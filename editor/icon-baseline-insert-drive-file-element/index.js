import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertDriveFileElement
 * @class IconBaselineInsertDriveFileElement
 * @extends {AoflElement}
 */
class IconBaselineInsertDriveFileElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertDriveFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-drive-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertDriveFileElement.is, IconBaselineInsertDriveFileElement);

export default IconBaselineInsertDriveFileElement;
