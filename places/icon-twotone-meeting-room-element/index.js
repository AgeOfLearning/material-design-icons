import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMeetingRoomElement
 * @class IconTwotoneMeetingRoomElement
 * @extends {AoflElement}
 */
class IconTwotoneMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMeetingRoomElement.is, IconTwotoneMeetingRoomElement);

export default IconTwotoneMeetingRoomElement;
