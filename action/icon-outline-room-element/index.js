import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRoomElement
 * @class IconOutlineRoomElement
 * @extends {AoflElement}
 */
class IconOutlineRoomElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRoomElement.is, IconOutlineRoomElement);

export default IconOutlineRoomElement;
