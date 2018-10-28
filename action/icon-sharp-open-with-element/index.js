import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOpenWithElement
 * @class IconSharpOpenWithElement
 * @extends {AoflElement}
 */
class IconSharpOpenWithElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOpenWithElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-open-with';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOpenWithElement.is, IconSharpOpenWithElement);

export default IconSharpOpenWithElement;
