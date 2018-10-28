import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMaximizeElement
 * @class IconSharpMaximizeElement
 * @extends {AoflElement}
 */
class IconSharpMaximizeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMaximizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-maximize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMaximizeElement.is, IconSharpMaximizeElement);

export default IconSharpMaximizeElement;
