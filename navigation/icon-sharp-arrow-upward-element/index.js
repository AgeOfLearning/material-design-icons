import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowUpwardElement
 * @class IconSharpArrowUpwardElement
 * @extends {AoflElement}
 */
class IconSharpArrowUpwardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowUpwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-upward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowUpwardElement.is, IconSharpArrowUpwardElement);

export default IconSharpArrowUpwardElement;
