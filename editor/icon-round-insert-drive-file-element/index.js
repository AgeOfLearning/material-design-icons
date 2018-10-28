import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertDriveFileElement
 * @class IconRoundInsertDriveFileElement
 * @extends {AoflElement}
 */
class IconRoundInsertDriveFileElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertDriveFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-drive-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertDriveFileElement.is, IconRoundInsertDriveFileElement);

export default IconRoundInsertDriveFileElement;
