import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTrafficElement
 * @class IconRoundTrafficElement
 * @extends {AoflElement}
 */
class IconRoundTrafficElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTrafficElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-traffic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTrafficElement.is, IconRoundTrafficElement);

export default IconRoundTrafficElement;
