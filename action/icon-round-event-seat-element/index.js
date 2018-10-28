import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEventSeatElement
 * @class IconRoundEventSeatElement
 * @extends {AoflElement}
 */
class IconRoundEventSeatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEventSeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-event-seat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEventSeatElement.is, IconRoundEventSeatElement);

export default IconRoundEventSeatElement;
