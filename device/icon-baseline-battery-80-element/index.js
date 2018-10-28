import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBattery80Element
 * @class IconBaselineBattery80Element
 * @extends {AoflElement}
 */
class IconBaselineBattery80Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBattery80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBattery80Element.is, IconBaselineBattery80Element);

export default IconBaselineBattery80Element;
