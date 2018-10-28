import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloseElement
 * @class IconSharpCloseElement
 * @extends {AoflElement}
 */
class IconSharpCloseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-close';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloseElement.is, IconSharpCloseElement);

export default IconSharpCloseElement;
