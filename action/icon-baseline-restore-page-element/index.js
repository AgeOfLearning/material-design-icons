import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRestorePageElement
 * @class IconBaselineRestorePageElement
 * @extends {AoflElement}
 */
class IconBaselineRestorePageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRestorePageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-restore-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRestorePageElement.is, IconBaselineRestorePageElement);

export default IconBaselineRestorePageElement;
