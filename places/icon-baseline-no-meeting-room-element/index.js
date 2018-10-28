import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNoMeetingRoomElement
 * @class IconBaselineNoMeetingRoomElement
 * @extends {AoflElement}
 */
class IconBaselineNoMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNoMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-no-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNoMeetingRoomElement.is, IconBaselineNoMeetingRoomElement);

export default IconBaselineNoMeetingRoomElement;
