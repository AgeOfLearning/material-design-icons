import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMinimizeElement
 * @class IconSharpMinimizeElement
 * @extends {AoflElement}
 */
class IconSharpMinimizeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMinimizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-minimize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMinimizeElement.is, IconSharpMinimizeElement);

export default IconSharpMinimizeElement;
