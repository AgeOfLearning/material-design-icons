import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEventSeatElement
 * @class IconTwotoneEventSeatElement
 * @extends {AoflElement}
 */
class IconTwotoneEventSeatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEventSeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-event-seat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEventSeatElement.is, IconTwotoneEventSeatElement);

export default IconTwotoneEventSeatElement;
