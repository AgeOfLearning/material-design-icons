import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSmokingRoomsElement
 * @class IconOutlineSmokingRoomsElement
 * @extends {AoflElement}
 */
class IconOutlineSmokingRoomsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSmokingRoomsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-smoking-rooms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSmokingRoomsElement.is, IconOutlineSmokingRoomsElement);

export default IconOutlineSmokingRoomsElement;
