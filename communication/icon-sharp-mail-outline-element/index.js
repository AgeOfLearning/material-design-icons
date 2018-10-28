import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMailOutlineElement
 * @class IconSharpMailOutlineElement
 * @extends {AoflElement}
 */
class IconSharpMailOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMailOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mail-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMailOutlineElement.is, IconSharpMailOutlineElement);

export default IconSharpMailOutlineElement;
