import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBattery30Element
 * @class IconBaselineBattery30Element
 * @extends {AoflElement}
 */
class IconBaselineBattery30Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBattery30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBattery30Element.is, IconBaselineBattery30Element);

export default IconBaselineBattery30Element;
