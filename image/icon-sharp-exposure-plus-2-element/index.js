import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExposurePlus2Element
 * @class IconSharpExposurePlus2Element
 * @extends {AoflElement}
 */
class IconSharpExposurePlus2Element extends AoflElement {
  /**
   * Creates an instance of IconSharpExposurePlus2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exposure-plus-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExposurePlus2Element.is, IconSharpExposurePlus2Element);

export default IconSharpExposurePlus2Element;
