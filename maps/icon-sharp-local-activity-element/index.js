import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalActivityElement
 * @class IconSharpLocalActivityElement
 * @extends {AoflElement}
 */
class IconSharpLocalActivityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalActivityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-activity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalActivityElement.is, IconSharpLocalActivityElement);

export default IconSharpLocalActivityElement;
