import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLineStyleElement
 * @class IconRoundLineStyleElement
 * @extends {AoflElement}
 */
class IconRoundLineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-line-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLineStyleElement.is, IconRoundLineStyleElement);

export default IconRoundLineStyleElement;
