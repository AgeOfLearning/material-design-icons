import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWebElement
 * @class IconSharpWebElement
 * @extends {AoflElement}
 */
class IconSharpWebElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWebElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-web';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWebElement.is, IconSharpWebElement);

export default IconSharpWebElement;
