import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderOuterElement
 * @class IconSharpBorderOuterElement
 * @extends {AoflElement}
 */
class IconSharpBorderOuterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderOuterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-outer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderOuterElement.is, IconSharpBorderOuterElement);

export default IconSharpBorderOuterElement;
