import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBattery20Element
 * @class IconRoundBattery20Element
 * @extends {AoflElement}
 */
class IconRoundBattery20Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBattery20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBattery20Element.is, IconRoundBattery20Element);

export default IconRoundBattery20Element;
