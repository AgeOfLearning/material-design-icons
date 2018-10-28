import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBattery90Element
 * @class IconRoundBattery90Element
 * @extends {AoflElement}
 */
class IconRoundBattery90Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBattery90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBattery90Element.is, IconRoundBattery90Element);

export default IconRoundBattery90Element;
