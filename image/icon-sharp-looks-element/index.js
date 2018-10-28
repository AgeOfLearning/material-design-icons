import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooksElement
 * @class IconSharpLooksElement
 * @extends {AoflElement}
 */
class IconSharpLooksElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooksElement.is, IconSharpLooksElement);

export default IconSharpLooksElement;
