import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwapVertElement
 * @class IconBaselineSwapVertElement
 * @extends {AoflElement}
 */
class IconBaselineSwapVertElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwapVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-swap-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwapVertElement.is, IconBaselineSwapVertElement);

export default IconBaselineSwapVertElement;
