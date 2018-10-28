import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsBackupRestoreElement
 * @class IconOutlineSettingsBackupRestoreElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsBackupRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsBackupRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-backup-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsBackupRestoreElement.is, IconOutlineSettingsBackupRestoreElement);

export default IconOutlineSettingsBackupRestoreElement;
