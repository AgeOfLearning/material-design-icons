import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSmokingRoomsElement
 * @class IconTwotoneSmokingRoomsElement
 * @extends {AoflElement}
 */
class IconTwotoneSmokingRoomsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSmokingRoomsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-smoking-rooms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSmokingRoomsElement.is, IconTwotoneSmokingRoomsElement);

export default IconTwotoneSmokingRoomsElement;
