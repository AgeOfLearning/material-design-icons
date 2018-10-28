import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMonetizationOnElement
 * @class IconBaselineMonetizationOnElement
 * @extends {AoflElement}
 */
class IconBaselineMonetizationOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMonetizationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-monetization-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMonetizationOnElement.is, IconBaselineMonetizationOnElement);

export default IconBaselineMonetizationOnElement;
