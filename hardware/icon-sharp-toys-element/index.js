import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpToysElement
 * @class IconSharpToysElement
 * @extends {AoflElement}
 */
class IconSharpToysElement extends AoflElement {
  /**
   * Creates an instance of IconSharpToysElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-toys';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpToysElement.is, IconSharpToysElement);

export default IconSharpToysElement;
