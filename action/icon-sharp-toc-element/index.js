import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTocElement
 * @class IconSharpTocElement
 * @extends {AoflElement}
 */
class IconSharpTocElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTocElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-toc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTocElement.is, IconSharpTocElement);

export default IconSharpTocElement;
