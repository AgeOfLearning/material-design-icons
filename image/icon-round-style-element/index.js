import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStyleElement
 * @class IconRoundStyleElement
 * @extends {AoflElement}
 */
class IconRoundStyleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStyleElement.is, IconRoundStyleElement);

export default IconRoundStyleElement;
