import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalMallElement
 * @class IconRoundLocalMallElement
 * @extends {AoflElement}
 */
class IconRoundLocalMallElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalMallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-mall';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalMallElement.is, IconRoundLocalMallElement);

export default IconRoundLocalMallElement;
