import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwapHorizontalCircleElement
 * @class IconBaselineSwapHorizontalCircleElement
 * @extends {AoflElement}
 */
class IconBaselineSwapHorizontalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwapHorizontalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-swap-horizontal-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwapHorizontalCircleElement.is, IconBaselineSwapHorizontalCircleElement);

export default IconBaselineSwapHorizontalCircleElement;
