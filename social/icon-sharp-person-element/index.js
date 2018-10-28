import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonElement
 * @class IconSharpPersonElement
 * @extends {AoflElement}
 */
class IconSharpPersonElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-person';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonElement.is, IconSharpPersonElement);

export default IconSharpPersonElement;
