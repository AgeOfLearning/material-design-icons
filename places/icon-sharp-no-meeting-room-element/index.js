import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNoMeetingRoomElement
 * @class IconSharpNoMeetingRoomElement
 * @extends {AoflElement}
 */
class IconSharpNoMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNoMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-no-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNoMeetingRoomElement.is, IconSharpNoMeetingRoomElement);

export default IconSharpNoMeetingRoomElement;
