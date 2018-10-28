import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwapCallsElement
 * @class IconBaselineSwapCallsElement
 * @extends {AoflElement}
 */
class IconBaselineSwapCallsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwapCallsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-swap-calls';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwapCallsElement.is, IconBaselineSwapCallsElement);

export default IconBaselineSwapCallsElement;
