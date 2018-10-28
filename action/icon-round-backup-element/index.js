import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBackupElement
 * @class IconRoundBackupElement
 * @extends {AoflElement}
 */
class IconRoundBackupElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBackupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-backup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBackupElement.is, IconRoundBackupElement);

export default IconRoundBackupElement;
