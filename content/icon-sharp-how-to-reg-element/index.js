import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHowToRegElement
 * @class IconSharpHowToRegElement
 * @extends {AoflElement}
 */
class IconSharpHowToRegElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHowToRegElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-how-to-reg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHowToRegElement.is, IconSharpHowToRegElement);

export default IconSharpHowToRegElement;
