import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpColorizeElement
 * @class IconSharpColorizeElement
 * @extends {AoflElement}
 */
class IconSharpColorizeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpColorizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-colorize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpColorizeElement.is, IconSharpColorizeElement);

export default IconSharpColorizeElement;
