import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsBackupRestoreElement
 * @class IconBaselineSettingsBackupRestoreElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsBackupRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsBackupRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-backup-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsBackupRestoreElement.is, IconBaselineSettingsBackupRestoreElement);

export default IconBaselineSettingsBackupRestoreElement;
