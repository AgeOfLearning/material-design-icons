import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNoMeetingRoomElement
 * @class IconOutlineNoMeetingRoomElement
 * @extends {AoflElement}
 */
class IconOutlineNoMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNoMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-no-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNoMeetingRoomElement.is, IconOutlineNoMeetingRoomElement);

export default IconOutlineNoMeetingRoomElement;
