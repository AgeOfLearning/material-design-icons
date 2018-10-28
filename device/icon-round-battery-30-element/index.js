import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBattery30Element
 * @class IconRoundBattery30Element
 * @extends {AoflElement}
 */
class IconRoundBattery30Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBattery30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBattery30Element.is, IconRoundBattery30Element);

export default IconRoundBattery30Element;
