import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwapVerticalCircleElement
 * @class IconBaselineSwapVerticalCircleElement
 * @extends {AoflElement}
 */
class IconBaselineSwapVerticalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwapVerticalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-swap-vertical-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwapVerticalCircleElement.is, IconBaselineSwapVerticalCircleElement);

export default IconBaselineSwapVerticalCircleElement;
