import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextsmsElement
 * @class IconSharpTextsmsElement
 * @extends {AoflElement}
 */
class IconSharpTextsmsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextsmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-textsms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextsmsElement.is, IconSharpTextsmsElement);

export default IconSharpTextsmsElement;
