import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBattery60Element
 * @class IconRoundBattery60Element
 * @extends {AoflElement}
 */
class IconRoundBattery60Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBattery60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBattery60Element.is, IconRoundBattery60Element);

export default IconRoundBattery60Element;
