import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNoMeetingRoomElement
 * @class IconRoundNoMeetingRoomElement
 * @extends {AoflElement}
 */
class IconRoundNoMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNoMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-no-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNoMeetingRoomElement.is, IconRoundNoMeetingRoomElement);

export default IconRoundNoMeetingRoomElement;
