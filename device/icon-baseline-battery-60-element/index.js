import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBattery60Element
 * @class IconBaselineBattery60Element
 * @extends {AoflElement}
 */
class IconBaselineBattery60Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBattery60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBattery60Element.is, IconBaselineBattery60Element);

export default IconBaselineBattery60Element;
