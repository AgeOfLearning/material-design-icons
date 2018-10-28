import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderBottomElement
 * @class IconSharpBorderBottomElement
 * @extends {AoflElement}
 */
class IconSharpBorderBottomElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderBottomElement.is, IconSharpBorderBottomElement);

export default IconSharpBorderBottomElement;
