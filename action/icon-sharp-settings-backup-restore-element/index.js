import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsBackupRestoreElement
 * @class IconSharpSettingsBackupRestoreElement
 * @extends {AoflElement}
 */
class IconSharpSettingsBackupRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsBackupRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-backup-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsBackupRestoreElement.is, IconSharpSettingsBackupRestoreElement);

export default IconSharpSettingsBackupRestoreElement;
