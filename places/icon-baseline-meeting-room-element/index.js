import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMeetingRoomElement
 * @class IconBaselineMeetingRoomElement
 * @extends {AoflElement}
 */
class IconBaselineMeetingRoomElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMeetingRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-meeting-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMeetingRoomElement.is, IconBaselineMeetingRoomElement);

export default IconBaselineMeetingRoomElement;
