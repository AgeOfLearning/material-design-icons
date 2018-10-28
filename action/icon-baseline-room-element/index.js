import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRoomElement
 * @class IconBaselineRoomElement
 * @extends {AoflElement}
 */
class IconBaselineRoomElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRoomElement.is, IconBaselineRoomElement);

export default IconBaselineRoomElement;
