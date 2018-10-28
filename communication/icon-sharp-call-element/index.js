import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallElement
 * @class IconSharpCallElement
 * @extends {AoflElement}
 */
class IconSharpCallElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallElement.is, IconSharpCallElement);

export default IconSharpCallElement;
