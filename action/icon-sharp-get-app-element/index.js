import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGetAppElement
 * @class IconSharpGetAppElement
 * @extends {AoflElement}
 */
class IconSharpGetAppElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGetAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-get-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGetAppElement.is, IconSharpGetAppElement);

export default IconSharpGetAppElement;
