import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRoomServiceElement
 * @class IconBaselineRoomServiceElement
 * @extends {AoflElement}
 */
class IconBaselineRoomServiceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRoomServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-room-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRoomServiceElement.is, IconBaselineRoomServiceElement);

export default IconBaselineRoomServiceElement;
