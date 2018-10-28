import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEventSeatElement
 * @class IconSharpEventSeatElement
 * @extends {AoflElement}
 */
class IconSharpEventSeatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEventSeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-event-seat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEventSeatElement.is, IconSharpEventSeatElement);

export default IconSharpEventSeatElement;
