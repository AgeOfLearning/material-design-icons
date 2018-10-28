import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRoomServiceElement
 * @class IconRoundRoomServiceElement
 * @extends {AoflElement}
 */
class IconRoundRoomServiceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRoomServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-room-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRoomServiceElement.is, IconRoundRoomServiceElement);

export default IconRoundRoomServiceElement;
