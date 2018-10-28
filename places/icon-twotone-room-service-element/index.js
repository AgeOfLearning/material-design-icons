import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRoomServiceElement
 * @class IconTwotoneRoomServiceElement
 * @extends {AoflElement}
 */
class IconTwotoneRoomServiceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRoomServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-room-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRoomServiceElement.is, IconTwotoneRoomServiceElement);

export default IconTwotoneRoomServiceElement;
