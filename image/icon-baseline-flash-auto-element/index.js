import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlashAutoElement
 * @class IconBaselineFlashAutoElement
 * @extends {AoflElement}
 */
class IconBaselineFlashAutoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlashAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flash-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlashAutoElement.is, IconBaselineFlashAutoElement);

export default IconBaselineFlashAutoElement;
