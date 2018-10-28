import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGradientElement
 * @class IconSharpGradientElement
 * @extends {AoflElement}
 */
class IconSharpGradientElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGradientElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gradient';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGradientElement.is, IconSharpGradientElement);

export default IconSharpGradientElement;
