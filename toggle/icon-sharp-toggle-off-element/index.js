import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpToggleOffElement
 * @class IconSharpToggleOffElement
 * @extends {AoflElement}
 */
class IconSharpToggleOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpToggleOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-toggle-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpToggleOffElement.is, IconSharpToggleOffElement);

export default IconSharpToggleOffElement;
