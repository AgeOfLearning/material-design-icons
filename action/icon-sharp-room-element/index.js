import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRoomElement
 * @class IconSharpRoomElement
 * @extends {AoflElement}
 */
class IconSharpRoomElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRoomElement.is, IconSharpRoomElement);

export default IconSharpRoomElement;
