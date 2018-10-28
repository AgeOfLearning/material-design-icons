import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGridOnElement
 * @class IconRoundGridOnElement
 * @extends {AoflElement}
 */
class IconRoundGridOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGridOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-grid-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGridOnElement.is, IconRoundGridOnElement);

export default IconRoundGridOnElement;
