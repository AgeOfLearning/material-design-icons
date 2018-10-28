import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBattery50Element
 * @class IconBaselineBattery50Element
 * @extends {AoflElement}
 */
class IconBaselineBattery50Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineBattery50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBattery50Element.is, IconBaselineBattery50Element);

export default IconBaselineBattery50Element;
