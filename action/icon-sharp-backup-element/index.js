import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBackupElement
 * @class IconSharpBackupElement
 * @extends {AoflElement}
 */
class IconSharpBackupElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBackupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-backup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBackupElement.is, IconSharpBackupElement);

export default IconSharpBackupElement;
