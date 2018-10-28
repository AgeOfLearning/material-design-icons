import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsBackupRestoreElement
 * @class IconRoundSettingsBackupRestoreElement
 * @extends {AoflElement}
 */
class IconRoundSettingsBackupRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsBackupRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-backup-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsBackupRestoreElement.is, IconRoundSettingsBackupRestoreElement);

export default IconRoundSettingsBackupRestoreElement;
