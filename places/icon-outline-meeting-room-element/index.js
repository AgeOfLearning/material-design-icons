import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMeetingRoomElement
 * @class IconOutlineMeetingRoomElement
 * @extends {AoflElement}
 */
class IconOutlineMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMeetingRoomElement.is, IconOutlineMeetingRoomElement);

export default IconOutlineMeetingRoomElement;
