import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooks3Element
 * @class IconSharpLooks3Element
 * @extends {AoflElement}
 */
class IconSharpLooks3Element extends AoflElement {
  /**
   * Creates an instance of IconSharpLooks3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooks3Element.is, IconSharpLooks3Element);

export default IconSharpLooks3Element;
