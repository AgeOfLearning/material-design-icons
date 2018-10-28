import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSmokingRoomsElement
 * @class IconBaselineSmokingRoomsElement
 * @extends {AoflElement}
 */
class IconBaselineSmokingRoomsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSmokingRoomsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-smoking-rooms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSmokingRoomsElement.is, IconBaselineSmokingRoomsElement);

export default IconBaselineSmokingRoomsElement;
