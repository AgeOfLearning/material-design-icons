import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooks5Element
 * @class IconSharpLooks5Element
 * @extends {AoflElement}
 */
class IconSharpLooks5Element extends AoflElement {
  /**
   * Creates an instance of IconSharpLooks5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooks5Element.is, IconSharpLooks5Element);

export default IconSharpLooks5Element;
