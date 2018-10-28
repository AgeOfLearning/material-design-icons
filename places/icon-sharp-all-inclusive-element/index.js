import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAllInclusiveElement
 * @class IconSharpAllInclusiveElement
 * @extends {AoflElement}
 */
class IconSharpAllInclusiveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAllInclusiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-all-inclusive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAllInclusiveElement.is, IconSharpAllInclusiveElement);

export default IconSharpAllInclusiveElement;
