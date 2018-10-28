import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGridOffElement
 * @class IconSharpGridOffElement
 * @extends {AoflElement}
 */
class IconSharpGridOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGridOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-grid-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGridOffElement.is, IconSharpGridOffElement);

export default IconSharpGridOffElement;
