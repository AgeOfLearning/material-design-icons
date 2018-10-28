import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirplayElement
 * @class IconRoundAirplayElement
 * @extends {AoflElement}
 */
class IconRoundAirplayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airplay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirplayElement.is, IconRoundAirplayElement);

export default IconRoundAirplayElement;
