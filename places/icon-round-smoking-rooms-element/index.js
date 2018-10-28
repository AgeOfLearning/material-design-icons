import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSmokingRoomsElement
 * @class IconRoundSmokingRoomsElement
 * @extends {AoflElement}
 */
class IconRoundSmokingRoomsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSmokingRoomsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-smoking-rooms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSmokingRoomsElement.is, IconRoundSmokingRoomsElement);

export default IconRoundSmokingRoomsElement;
