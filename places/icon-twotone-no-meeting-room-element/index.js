import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNoMeetingRoomElement
 * @class IconTwotoneNoMeetingRoomElement
 * @extends {AoflElement}
 */
class IconTwotoneNoMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNoMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-no-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNoMeetingRoomElement.is, IconTwotoneNoMeetingRoomElement);

export default IconTwotoneNoMeetingRoomElement;
