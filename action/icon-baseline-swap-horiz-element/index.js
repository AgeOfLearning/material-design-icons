import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwapHorizElement
 * @class IconBaselineSwapHorizElement
 * @extends {AoflElement}
 */
class IconBaselineSwapHorizElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwapHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-swap-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwapHorizElement.is, IconBaselineSwapHorizElement);

export default IconBaselineSwapHorizElement;
