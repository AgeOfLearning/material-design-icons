import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBackupElement
 * @class IconTwotoneBackupElement
 * @extends {AoflElement}
 */
class IconTwotoneBackupElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBackupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-backup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBackupElement.is, IconTwotoneBackupElement);

export default IconTwotoneBackupElement;
