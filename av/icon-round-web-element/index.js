import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWebElement
 * @class IconRoundWebElement
 * @extends {AoflElement}
 */
class IconRoundWebElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWebElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-web';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWebElement.is, IconRoundWebElement);

export default IconRoundWebElement;
