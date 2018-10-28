import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRoomServiceElement
 * @class IconOutlineRoomServiceElement
 * @extends {AoflElement}
 */
class IconOutlineRoomServiceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRoomServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-room-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRoomServiceElement.is, IconOutlineRoomServiceElement);

export default IconOutlineRoomServiceElement;
