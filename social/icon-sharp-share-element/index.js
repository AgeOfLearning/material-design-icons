import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShareElement
 * @class IconSharpShareElement
 * @extends {AoflElement}
 */
class IconSharpShareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShareElement.is, IconSharpShareElement);

export default IconSharpShareElement;
