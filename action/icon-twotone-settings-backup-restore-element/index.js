import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsBackupRestoreElement
 * @class IconTwotoneSettingsBackupRestoreElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsBackupRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsBackupRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-backup-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsBackupRestoreElement.is, IconTwotoneSettingsBackupRestoreElement);

export default IconTwotoneSettingsBackupRestoreElement;
