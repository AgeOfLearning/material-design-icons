import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRestoreElement
 * @class IconBaselineRestoreElement
 * @extends {AoflElement}
 */
class IconBaselineRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRestoreElement.is, IconBaselineRestoreElement);

export default IconBaselineRestoreElement;
