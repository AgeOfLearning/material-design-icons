import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBackupElement
 * @class IconBaselineBackupElement
 * @extends {AoflElement}
 */
class IconBaselineBackupElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBackupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-backup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBackupElement.is, IconBaselineBackupElement);

export default IconBaselineBackupElement;
