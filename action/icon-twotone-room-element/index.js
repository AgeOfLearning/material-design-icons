import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRoomElement
 * @class IconTwotoneRoomElement
 * @extends {AoflElement}
 */
class IconTwotoneRoomElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRoomElement.is, IconTwotoneRoomElement);

export default IconTwotoneRoomElement;
