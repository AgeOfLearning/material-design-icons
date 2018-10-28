import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharp4KElement
 * @class IconSharp4KElement
 * @extends {AoflElement}
 */
class IconSharp4KElement extends AoflElement {
  /**
   * Creates an instance of IconSharp4KElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-4k';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharp4KElement.is, IconSharp4KElement);

export default IconSharp4KElement;
