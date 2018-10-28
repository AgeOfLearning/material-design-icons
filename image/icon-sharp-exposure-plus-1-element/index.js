import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExposurePlus1Element
 * @class IconSharpExposurePlus1Element
 * @extends {AoflElement}
 */
class IconSharpExposurePlus1Element extends AoflElement {
  /**
   * Creates an instance of IconSharpExposurePlus1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exposure-plus-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExposurePlus1Element.is, IconSharpExposurePlus1Element);

export default IconSharpExposurePlus1Element;
