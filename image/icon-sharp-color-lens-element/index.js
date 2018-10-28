import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpColorLensElement
 * @class IconSharpColorLensElement
 * @extends {AoflElement}
 */
class IconSharpColorLensElement extends AoflElement {
  /**
   * Creates an instance of IconSharpColorLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-color-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpColorLensElement.is, IconSharpColorLensElement);

export default IconSharpColorLensElement;
