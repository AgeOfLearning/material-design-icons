import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLensElement
 * @class IconSharpLensElement
 * @extends {AoflElement}
 */
class IconSharpLensElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLensElement.is, IconSharpLensElement);

export default IconSharpLensElement;
