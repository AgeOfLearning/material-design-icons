import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHttpsElement
 * @class IconSharpHttpsElement
 * @extends {AoflElement}
 */
class IconSharpHttpsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHttpsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-https';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHttpsElement.is, IconSharpHttpsElement);

export default IconSharpHttpsElement;
