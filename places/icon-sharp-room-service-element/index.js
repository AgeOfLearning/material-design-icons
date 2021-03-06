import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRoomServiceElement
 * @class IconSharpRoomServiceElement
 * @extends {AoflElement}
 */
class IconSharpRoomServiceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRoomServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-room-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRoomServiceElement.is, IconSharpRoomServiceElement);

export default IconSharpRoomServiceElement;
