import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMeetingRoomElement
 * @class IconRoundMeetingRoomElement
 * @extends {AoflElement}
 */
class IconRoundMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMeetingRoomElement.is, IconRoundMeetingRoomElement);

export default IconRoundMeetingRoomElement;
