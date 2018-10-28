import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRoundedCornerElement
 * @class IconSharpRoundedCornerElement
 * @extends {AoflElement}
 */
class IconSharpRoundedCornerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRoundedCornerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rounded-corner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRoundedCornerElement.is, IconSharpRoundedCornerElement);

export default IconSharpRoundedCornerElement;
