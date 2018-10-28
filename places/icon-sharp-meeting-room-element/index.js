import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMeetingRoomElement
 * @class IconSharpMeetingRoomElement
 * @extends {AoflElement}
 */
class IconSharpMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMeetingRoomElement.is, IconSharpMeetingRoomElement);

export default IconSharpMeetingRoomElement;
