import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPagesElement
 * @class IconSharpPagesElement
 * @extends {AoflElement}
 */
class IconSharpPagesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPagesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pages';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPagesElement.is, IconSharpPagesElement);

export default IconSharpPagesElement;
