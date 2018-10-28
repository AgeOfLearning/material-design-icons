import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBackupElement
 * @class IconOutlineBackupElement
 * @extends {AoflElement}
 */
class IconOutlineBackupElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBackupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-backup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBackupElement.is, IconOutlineBackupElement);

export default IconOutlineBackupElement;
