import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBattery20Element
 * @class IconBaselineBattery20Element
 * @extends {AoflElement}
 */
class IconBaselineBattery20Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBattery20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBattery20Element.is, IconBaselineBattery20Element);

export default IconBaselineBattery20Element;
