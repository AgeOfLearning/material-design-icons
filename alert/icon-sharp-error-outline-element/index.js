import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpErrorOutlineElement
 * @class IconSharpErrorOutlineElement
 * @extends {AoflElement}
 */
class IconSharpErrorOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpErrorOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-error-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpErrorOutlineElement.is, IconSharpErrorOutlineElement);

export default IconSharpErrorOutlineElement;
