import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalMallElement
 * @class IconSharpLocalMallElement
 * @extends {AoflElement}
 */
class IconSharpLocalMallElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalMallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-mall';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalMallElement.is, IconSharpLocalMallElement);

export default IconSharpLocalMallElement;
