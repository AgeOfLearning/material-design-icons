import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpThumbDownElement
 * @class IconSharpThumbDownElement
 * @extends {AoflElement}
 */
class IconSharpThumbDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpThumbDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-thumb-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpThumbDownElement.is, IconSharpThumbDownElement);

export default IconSharpThumbDownElement;
