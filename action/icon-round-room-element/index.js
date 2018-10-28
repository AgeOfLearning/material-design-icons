import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRoomElement
 * @class IconRoundRoomElement
 * @extends {AoflElement}
 */
class IconRoundRoomElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRoomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-room';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRoomElement.is, IconRoundRoomElement);

export default IconRoundRoomElement;
