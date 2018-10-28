import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalMallElement
 * @class IconTwotoneLocalMallElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalMallElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalMallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-mall';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalMallElement.is, IconTwotoneLocalMallElement);

export default IconTwotoneLocalMallElement;
