import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOpacityElement
 * @class IconSharpOpacityElement
 * @extends {AoflElement}
 */
class IconSharpOpacityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOpacityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-opacity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOpacityElement.is, IconSharpOpacityElement);

export default IconSharpOpacityElement;
