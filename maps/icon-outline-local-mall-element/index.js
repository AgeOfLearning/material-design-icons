import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalMallElement
 * @class IconOutlineLocalMallElement
 * @extends {AoflElement}
 */
class IconOutlineLocalMallElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalMallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-mall';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalMallElement.is, IconOutlineLocalMallElement);

export default IconOutlineLocalMallElement;
