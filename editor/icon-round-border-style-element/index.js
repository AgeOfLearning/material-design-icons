import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderStyleElement
 * @class IconRoundBorderStyleElement
 * @extends {AoflElement}
 */
class IconRoundBorderStyleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderStyleElement.is, IconRoundBorderStyleElement);

export default IconRoundBorderStyleElement;
