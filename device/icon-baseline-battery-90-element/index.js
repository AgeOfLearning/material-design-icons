import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBattery90Element
 * @class IconBaselineBattery90Element
 * @extends {AoflElement}
 */
class IconBaselineBattery90Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBattery90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBattery90Element.is, IconBaselineBattery90Element);

export default IconBaselineBattery90Element;
