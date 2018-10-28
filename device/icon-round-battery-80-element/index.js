import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBattery80Element
 * @class IconRoundBattery80Element
 * @extends {AoflElement}
 */
class IconRoundBattery80Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBattery80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBattery80Element.is, IconRoundBattery80Element);

export default IconRoundBattery80Element;
