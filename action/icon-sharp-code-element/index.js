import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCodeElement
 * @class IconSharpCodeElement
 * @extends {AoflElement}
 */
class IconSharpCodeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCodeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-code';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCodeElement.is, IconSharpCodeElement);

export default IconSharpCodeElement;
