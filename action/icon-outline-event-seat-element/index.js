import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEventSeatElement
 * @class IconOutlineEventSeatElement
 * @extends {AoflElement}
 */
class IconOutlineEventSeatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEventSeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-event-seat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEventSeatElement.is, IconOutlineEventSeatElement);

export default IconOutlineEventSeatElement;
