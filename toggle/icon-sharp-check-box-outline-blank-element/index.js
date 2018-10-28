import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCheckBoxOutlineBlankElement
 * @class IconSharpCheckBoxOutlineBlankElement
 * @extends {AoflElement}
 */
class IconSharpCheckBoxOutlineBlankElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCheckBoxOutlineBlankElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-check-box-outline-blank';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCheckBoxOutlineBlankElement.is, IconSharpCheckBoxOutlineBlankElement);

export default IconSharpCheckBoxOutlineBlankElement;
