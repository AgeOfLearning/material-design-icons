import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTollElement
 * @class IconSharpTollElement
 * @extends {AoflElement}
 */
class IconSharpTollElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-toll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTollElement.is, IconSharpTollElement);

export default IconSharpTollElement;
