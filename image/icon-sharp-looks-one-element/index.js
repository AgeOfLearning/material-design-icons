import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooksOneElement
 * @class IconSharpLooksOneElement
 * @extends {AoflElement}
 */
class IconSharpLooksOneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLooksOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooksOneElement.is, IconSharpLooksOneElement);

export default IconSharpLooksOneElement;
