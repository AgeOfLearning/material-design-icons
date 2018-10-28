import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEmailElement
 * @class IconRoundEmailElement
 * @extends {AoflElement}
 */
class IconRoundEmailElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEmailElement.is, IconRoundEmailElement);

export default IconRoundEmailElement;
