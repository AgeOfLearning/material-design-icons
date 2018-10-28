import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOpenInNewElement
 * @class IconSharpOpenInNewElement
 * @extends {AoflElement}
 */
class IconSharpOpenInNewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOpenInNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-open-in-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOpenInNewElement.is, IconSharpOpenInNewElement);

export default IconSharpOpenInNewElement;
